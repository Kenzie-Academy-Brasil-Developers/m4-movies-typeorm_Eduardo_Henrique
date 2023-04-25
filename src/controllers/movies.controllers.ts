import { Request, Response } from "express";
import { createMovieService } from "../services/createMovie.services";
import { listAllMoviesService } from "../services/listAllMovies.services";

export const createMoviesController =async (request:Request,response:Response):Promise<Response> => {
  const movieData = request.body
  const newMovie = await createMovieService(movieData)

  return response.status(200).json(newMovie)
  
}
export const listAllMoviesController = async (request:Request,response:Response):Promise<Response> => {
  const allMovies = await listAllMoviesService()
  return response.status(200).json(allMovies)
}