import { Request, Response } from "express";
import { createMovieService } from "../services/createMovie.services";
import { listAllMoviesService } from "../services/listAllMovies.services";
import { updateMovieService } from "../services/updateMovie.services";
import { TMoviePages, TMovieRequest } from "../interface/movie.interface";
import { deleteMovieService } from "../services/deleteMovie.services";

export const createMoviesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const movieData = request.body;
  const newMovie = await createMovieService(movieData);

  return response.status(201).json(newMovie);
};

export const listAllMoviesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const page: number | undefined = Number(request.query.page);
  const perPage: number | undefined = Number(request.query.perPage);
  const order: any = request.query.order;
  const sort: any = request.query.sort;
  const allMovies: TMoviePages = await listAllMoviesService(
    page,
    perPage,
    order,
    sort
  );

  return response.status(200).json(allMovies);
};

export const updateMovieController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const movieData: TMovieRequest = request.body;

  const movieId: number = Number(request.params.id);

  const movieUpdated = await updateMovieService(movieData, movieId);

  return response.status(200).json(movieUpdated);
};

export const deleteMovieController = async (
  request: Request,
  response: Response
) => {
  const idMovie: number = Number(request.params.id);
  await deleteMovieService(idMovie);

  return response.status(204).json();
};
