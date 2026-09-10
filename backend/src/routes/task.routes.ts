import { Router } from 'express';
import {
  getTask,
  getTasks,
  patchTaskComplete,
  postTask,
  removeTask,
  updateTask,
} from '../controllers/task.controller.js';

export const taskRouter = Router();

taskRouter.get('/', getTasks);
taskRouter.get('/:id', getTask);
taskRouter.post('/', postTask);
taskRouter.patch('/:id', updateTask);
taskRouter.patch('/:id/complete', patchTaskComplete);
taskRouter.delete('/:id', removeTask);
