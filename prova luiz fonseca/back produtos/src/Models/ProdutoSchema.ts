import { model, Schema } from "mongoose";

const ProdutoSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "campo nome obrigatório"],
    },
    cod: {
      type: String,
      required: [true, "Código de barras é obrigatório!"],
    },
    preco: {
      type: Number,
      required: [true, "O preço é obrigatório!"],
    },
    criadoEm: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
  }
);

export default model("produto", ProdutoSchema);
