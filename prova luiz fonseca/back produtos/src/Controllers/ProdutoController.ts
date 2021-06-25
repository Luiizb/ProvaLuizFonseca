import { Request, Response } from "express";
import ProdutoSchema from "../Models/ProdutoSchema";

class ProdutoController {


  async cadastrar(request: Request, response: Response) {
    const newProduto = await ProdutoSchema.create(request.body);
    response.status(201).json(newProduto);
  }


  async listar(request: Request, response: Response) {
    response.status(200).json(await ProdutoSchema.find({}));
  }

}

export { ProdutoController };
