import express from 'express'
import { VeiculoController } from '../controllers/veiculo.controller.js'

export const veiculoRoute = express.Router()

veiculoRoute.get("/",VeiculoController.BuscarVeiculos)
veiculoRoute.get("/buscar_cond/:coluna/:valor",VeiculoController.BuscarVeiculoCond)
veiculoRoute.post("/adicionar",VeiculoController.AdicionarVeiculo)
veiculoRoute.delete("/deletar/:id",VeiculoController.DeletarVeiculo)
veiculoRoute.put("/alterar/:id", VeiculoController.AlterarVeiculo)
veiculoRoute.post("/alugar/:id", VeiculoController.Alugarveiculo)

