import { model, Schema } from "mongoose";

const classeSchema = new Schema(
  {
    atributo1: {
      type: String,
      required: [true, "O campo atributo1 é obrigatório!"],
    },
    atributo2: {
      type: String,
      required: [true, "O campo atributo2 é obrigatório!"],
    },
    atributo3: {
      type: Number,
      required: [true, "O campo atributo3 é obrigatório!"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("nomeColecao", classeSchema);
