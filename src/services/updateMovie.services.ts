import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { TMovieRequest, TMovieResponse,  } from "../interface/movie.interface";
import { movieSchema } from "../schemas/movies.schemas";

export const updateMovieService = async (
  movieData: TMovieRequest,
  movieId:number
): Promise<TMovieResponse | undefined> => {
  
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);
  
  await movieRepository.update(movieId, { ...movieData });
  
  const movie = await movieRepository.findOne({ where: { id: movieId } });

  const returnMovie: TMovieResponse = movieSchema.parse(movie);

  return returnMovie;
};
