import { Request, Response } from "express";
import ClasseSchema from "../models/ClasseSchema";

class ClasseController {
  async listar(request: Request, response: Response) {
    response.status(200).json(await ClasseSchema.find({}));
  }


  async cadastrar(request: Request, response: Response) {
    const novaPessoa = await ClasseSchema.create(request.body);
    response.status(201).json(novaPessoa);
  }
}

export { ClasseController };
