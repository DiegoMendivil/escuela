export type TaskStatus = "pendiente" | "en progreso" | "completada";

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
  createdAt: string;
}

export interface CreateTaskInput {
  title: string;
  status?: TaskStatus;
}