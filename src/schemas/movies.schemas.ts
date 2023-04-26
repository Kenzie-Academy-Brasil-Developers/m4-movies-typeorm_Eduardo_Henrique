import { z } from "zod";

export const movieSchema = z.object({
  id: z.number(),
  name: z.string().max(50).nonempty(),
  description: z.string().nullish(),
  duration: z.number(),
  price: z.number(),
});

export const requestMovieSchema = movieSchema.omit({ id: true });

export const requestUpdateMovieSchema = requestMovieSchema.partial()

export const responseMoviesSchema = z.array(movieSchema)