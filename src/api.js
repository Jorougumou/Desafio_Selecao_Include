// Importando o módulo express para lidar com rotas e middlewares
import express from "express"

// Inicializando a aplicação Express
const app = express();

app.use(express.json())

app.use("/veiculos",veiculoRoute)

export default app; 