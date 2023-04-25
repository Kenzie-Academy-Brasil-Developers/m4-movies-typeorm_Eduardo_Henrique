import { Repository } from "typeorm";
import { TMoviesResponse } from "../interface/movie.interface";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { responseMoviesSchema } from "../schemas/movies.schemas";

export const listAllMoviesService = async (): Promise<TMoviesResponse> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movies = await movieRepository.find();

  const returnMovies: TMoviesResponse = responseMoviesSchema.parse(movies);
  
  return returnMovies;
};
