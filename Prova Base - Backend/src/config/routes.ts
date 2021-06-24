import { Router } from "express";
import { ClasseController } from "../controllers/ClasseController";

const router = Router();
const classeController = new ClasseController();

router.post("/classe/cadastrar", classeController.cadastrar);
router.get("/classe/listar", classeController.listar);

export { router };
