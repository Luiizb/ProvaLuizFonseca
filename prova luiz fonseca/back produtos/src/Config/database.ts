import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://prova2:prova2@clusterprova.k7enk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )

  
  .then(() => {
    console.log("API CONECTADA AO BANCO");
  })


  .catch((error) => {
    console.log(`ERRO AO CONECTAR COM O BANCO: ${error}`);
  });



export { mongoose };
