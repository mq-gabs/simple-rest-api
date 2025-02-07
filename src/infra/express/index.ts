import "express-async-errors";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./controllers";

export function bootstrap() {
  dotenv.config();

  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use(router);

  app.listen(process.env.PORT, () => console.log("Express: server started"));
}
