import dotenv from "dotenv";
import express from "express";      
dotenv.config();
import roteadorUsuario from "./routes/usuario.js";



const app = express();              
const port = 3000;                 

app.use(roteadorUsuario);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(roteadorLogin);

app.get("/", (req, res) => {        
  res.json({
    nome: "Jackson Darley Rocha Santos",      
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            
  console.log(`Serviço escutando na porta:  ${port}`);
});