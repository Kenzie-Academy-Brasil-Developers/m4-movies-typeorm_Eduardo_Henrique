import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../error";

export const ensureExistsName = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const nameMovie = request.body.name;
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie = await movieRepository.findOne({ where: { name: nameMovie } });

  if (movie) {
    throw new AppError("Movie already exists.", 409);
  }

  next();
};