import { Router } from "express";
import { taskRouter } from "./task.controller";

const router = Router();

router.use("/tasks", taskRouter);

export default router;
