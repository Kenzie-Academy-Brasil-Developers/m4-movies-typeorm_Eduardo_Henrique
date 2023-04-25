import { Router } from "express";
import { createMoviesController, listAllMoviesController } from "../controllers/movies.controllers";
import { ensureValidateBody } from "../middlewares/ensureValidateBody";
import { requestMovieSchema } from "../schemas/movies.schemas";

export const moviesRoutes: Router = Router();

moviesRoutes.post("", ensureValidateBody(requestMovieSchema), createMoviesController);
moviesRoutes.get("", listAllMoviesController);
