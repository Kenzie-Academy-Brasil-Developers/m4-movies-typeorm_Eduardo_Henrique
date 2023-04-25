import express, { Application } from "express";
import 'express-async-errors'
import 'reflect-metadata'
import { errorHandler } from "./error";

export const app: Application = express();
app.use(express.json());
app.use(errorHandler)