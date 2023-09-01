import dotenv from "dotenv";
import express from "express";      // Requisição do pacote do express
dotenv.config();
import roteadorUsuario from "./routes/usuario.js";

app.use(roteadorUsuario);

const app = express();              // Instancia o Express
const port = 3000;                 // Define a porta

app.use(roteadorUsuario);
app.use(express.json());

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "Jackson Darley Rocha Santos",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});