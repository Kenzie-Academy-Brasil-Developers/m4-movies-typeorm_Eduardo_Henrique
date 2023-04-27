import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";

export const ensureExistsId = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const idMovie = Number(request.params.id);
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie = await movieRepository.findOne({ where: { id: idMovie } });

  if (!movie) {
    throw new AppError("Movie not found", 404);
  }

  next();
};
