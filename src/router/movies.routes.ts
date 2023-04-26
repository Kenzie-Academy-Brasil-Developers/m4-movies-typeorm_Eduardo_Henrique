import { Router } from "express";
import { createMoviesController, deleteMovieController, listAllMoviesController, updateMovieController } from "../controllers/movies.controllers";
import { ensureValidateBody } from "../middlewares/ensureValidateBody";
import { requestMovieSchema } from "../schemas/movies.schemas";
import { ensureExistsId } from "../middlewares/ensureExistsId";
import { ensureExistsName } from "../middlewares/ensureExistsName";

export const moviesRoutes: Router = Router();

moviesRoutes.post("", ensureValidateBody(requestMovieSchema), ensureExistsName, createMoviesController);
moviesRoutes.get("", listAllMoviesController);
moviesRoutes.patch("/:id", ensureExistsId, ensureExistsName, updateMovieController );
moviesRoutes.delete("/:id", ensureExistsId, deleteMovieController );
