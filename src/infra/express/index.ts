import "express-async-errors";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./controllers";
import { errorHandler } from "../../application/utils/error-handler";

export function bootstrap() {
  dotenv.config();

  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use(router);
  app.use(errorHandler);

  app.listen(process.env.PORT, () =>
    console.log("Express: server started")
  );
}
