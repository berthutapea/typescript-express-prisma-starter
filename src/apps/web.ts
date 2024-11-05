import express from "express";
import { publicRouter } from "../routes/public-api";
import { errorMiddleware } from "../middlewares/error-middleware";
import { apiRouter } from "../routes/api";

export const web = express();
web.use(express.json());
web.use(publicRouter);
web.use(apiRouter);
web.use(errorMiddleware);
