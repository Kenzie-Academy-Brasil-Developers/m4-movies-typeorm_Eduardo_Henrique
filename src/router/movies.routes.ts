import { Router } from "express";
import { createMoviesController, deleteMovieController, listAllMoviesController, updateMovieController } from "../controllers/movies.controllers";
import { ensureValidateBody } from "../middlewares/ensureValidateBody";
import { requestMovieSchema } from "../schemas/movies.schemas";

export const moviesRoutes: Router = Router();

moviesRoutes.post("", ensureValidateBody(requestMovieSchema), createMoviesController);
moviesRoutes.get("", listAllMoviesController);
moviesRoutes.patch("/:id", updateMovieController );
moviesRoutes.delete("/:id", deleteMovieController );
