console.clear();

import cors from "cors";
import express from "express";
import { mongoose } from "./Config/database";
import { router } from "./Config/routes";

const app = express();
const db = mongoose;


app.use(cors())
app.use(express.json());
app.use(router);



app.listen(3000, () => {
  console.log("Servidor rodando...");
});
