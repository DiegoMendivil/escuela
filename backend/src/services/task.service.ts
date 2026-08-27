import { delay } from "../utils/delay.js";
import { CreateTaskInput, Task, TaskStatus } from "../models/task.js";

const validStatuses: TaskStatus[] = ["pendiente", "en progreso", "completada"];
const tasks: Task[] = [];
let nextId = 1;

export async function getTasks(): Promise<Task[]> {
  await delay(50);
  return tasks;
}

export async function getTaskById(id: number): Promise<Task> {
  await delay(50);
  const task = tasks.find((item) => item.id === id);
  if (!task) throw new Error("TASK_NOT_FOUND");
  return task;
}

export async function createTask(input: CreateTaskInput): Promise<Task> {
  await delay(50);
  const title = input?.title?.trim();
  if (!title) throw new Error("TITLE_REQUIRED");
  if (input?.status && !validStatuses.includes(input.status)) throw new Error("INVALID_STATUS");

  const task: Task = {
    id: nextId++,
    title,
    status: input.status ?? "pendiente",
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  return task;
}

export async function completeTask(id: number): Promise<Task> {
  const task = await getTaskById(id);
  task.status = "completada";
  return task;
}