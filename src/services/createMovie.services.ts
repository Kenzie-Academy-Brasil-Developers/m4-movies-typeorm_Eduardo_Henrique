import { NextFunction, Request, Response } from "express";
import { TMovieRequest, TMovieResponse } from "../interface/movie.interface";
import { Movie } from "../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { movieSchema } from "../schemas/movies.schemas";

export const createMovieService = async (
  movieData: TMovieRequest
): Promise<TMovieResponse> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie: Movie = movieRepository.create(movieData);
  await movieRepository.save(movie);

  const returnMovie: TMovieResponse = movieSchema.parse(movie);

  return returnMovie;
};
