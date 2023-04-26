import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

export const deleteMovieService = async (idMovie: number): Promise<void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  await movieRepository.delete(idMovie);

  return
};
