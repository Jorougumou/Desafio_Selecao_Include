import { veiculoRoute } from "./routes/veiculoRoute.js";
import express from "express"

const app = express();

app.use(express.json())

app.use("/veiculos",veiculoRoute)

export default app; 