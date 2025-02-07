import { Request, Response, Router } from "express";
import { Query } from "../../../application/utils/query";
import { TaskDto } from "../../../application/services/task/dtos/task.dto";
import { TaskService } from "../../../application/services/task/task.service";
import { TaskRepositoryMemory } from "../../repositories/memory/task.repository.memory";

export const taskRouter = Router();

const repo = new TaskRepositoryMemory();
const taskService = new TaskService(repo);

taskRouter.get("/", async (req: Request, res: Response) => {
  const query = new Query(req.query);

  const response = await taskService.getMany(query);

  res.json(response);
});

taskRouter.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const response = await taskService.getOne(id);

  res.json(response);
});

taskRouter.post("/", async (req: Request, res: Response) => {
  const { title, description } = req.body;

  const dto = new TaskDto();

  (dto.title = title), (dto.description = description);

  const response = await taskService.create(dto);

  res.status(201).json(response);
});

taskRouter.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const dto = new TaskDto();

  dto.title = title;
  dto.description = description;
  dto.status = status;

  const response = await taskService.update(id, dto);

  res.json(response);
});

taskRouter.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const response = await taskService.delete(id);

  res.json(response);
});
