import { z } from "zod";
import { movieSchema, requestMovieSchema, requestUpdateMovieSchema, responseMoviesSchema } from "../schemas/movies.schemas";

export type TMovieResponse = z.infer<typeof movieSchema>;

export type TMovieRequest = z.infer<typeof requestMovieSchema>;
export type TMoviesResponse = z.infer<typeof responseMoviesSchema>;
export type TMovieRequestUpdate = z.infer<typeof requestUpdateMovieSchema>;