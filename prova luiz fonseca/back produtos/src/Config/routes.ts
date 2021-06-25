import { Router } from "express";
import {ProdutoController}  from "../Controllers/ProdutoController";



const router = Router();
const produtoController = new ProdutoController();


router.get("/produto/listar", produtoController.listar);

router.post("/produto/cadastrar", produtoController.cadastrar);


export { router };
