import { Repository } from "typeorm";
import { TMoviePages, TMoviesResponse } from "../interface/movie.interface";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { responseMoviesSchema } from "../schemas/movies.schemas";

export const listAllMoviesService = async (
  page: number | undefined,
  perPage: number | undefined,
  order: string,
  sort: string
): Promise<TMoviePages> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);
  let movies: Movie[] | undefined;

  if (!page || page < 0) {
    page = 1;
  }

  if (!perPage || perPage < 0 || perPage > 5) {
    perPage = 5;
  }

  if (order !== "asc" && order !== "desc" || sort === undefined) {
    order = "asc";
  }

  if (sort !== "price" && sort !== "duration") {

    sort = "id";
  }

  if (page && perPage) {
    movies = await movieRepository.find({
      skip: (page - 1) * perPage,
      take: perPage,
      order: { [sort]: order },
    });
  } else {
    movies = await movieRepository.find({
      take: 5,
      order: { [sort]: order },
    });
  }

  const returnMovies: TMoviesResponse = responseMoviesSchema.parse(movies);

  const totalCount = await movieRepository.count();
  const totalPages =  Math.ceil(totalCount / perPage)
  
  let nextPage:string | null = null
  let prevPage:string | null = null

  if(page > 1){
    prevPage = `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}`
  }

  if (page < totalPages) {
    nextPage = `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}`;
  }

  return {
    prevPage,
    nextPage,
    count: totalCount,
    data: returnMovies,
  };
};
