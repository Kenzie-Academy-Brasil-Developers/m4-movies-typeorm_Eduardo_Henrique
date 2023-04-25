import express, { Application } from "express";
import "express-async-errors";
import "reflect-metadata";
import { errorHandler } from "./error";
import { moviesRoutes } from "./router/movies.routes";

export const app: Application = express();

app.use(express.json());

app.use("/movies/", moviesRoutes);

app.use(errorHandler);
