import express, { ErrorRequestHandler, Request, Response } from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { CreateTaskInput } from "./models/task.js";
import { createTask, completeTask, getTaskById, getTasks } from "./services/task.service.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_request: Request, response: Response) => {
  response.json({ status: "ok", service: "backend" });
});

app.get("/api/tasks", async (_request, response, next) => {
  try { response.json(await getTasks()); } catch (error) { next(error); }
});

app.get("/api/tasks/:id", async (request, response, next) => {
  try {
    const id = Number(request.params.id);
    if (!Number.isInteger(id) || id < 1) {
      response.status(400).json({ error: "El identificador debe ser un entero positivo" });
      return;
    }
    response.json(await getTaskById(id));
  } catch (error) { next(error); }
});

app.post("/api/tasks", async (request, response, next) => {
  try {
    response.status(201).json(await createTask(request.body as CreateTaskInput));
  } catch (error) { next(error); }
});

app.patch("/api/tasks/:id/complete", async (request, response, next) => {
  try {
    const id = Number(request.params.id);
    if (!Number.isInteger(id) || id < 1) {
      response.status(400).json({ error: "El identificador debe ser un entero positivo" });
      return;
    }
    response.json(await completeTask(id));
  } catch (error) { next(error); }
});

const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  const errors: Record<string, { status: number; message: string }> = {
    TASK_NOT_FOUND: { status: 404, message: "La tarea no existe" },
    TITLE_REQUIRED: { status: 400, message: "El título es obligatorio" },
    INVALID_STATUS: { status: 400, message: "El estado no es válido" },
  };
  const knownError = errors[error instanceof Error ? error.message : ""];
  response.status(knownError?.status ?? 500).json({ error: knownError?.message ?? "Error interno del servidor" });
};

app.use(errorHandler);
app.listen(env.port, () => console.log(`Backend ejecutándose en http://localhost:${env.port}`));