import { VeiculoModel } from "../model/veiculoModel.js";

export class VeiculoController{

    static async BuscarVeiculos(req,res ){ //READ
        try {
            const veiculos = await VeiculoModel.BuscarVeiculos()
            if (!veiculos || veiculos.length == 0){
                return res.status(404).json({'mensagem':"Nenhum veiculo foi encontrado"})
            }
            return res.status(200).json(veiculos)      

        } catch (erro) {
            return res.status(500).json({'mensagem':"Erro ao buscar os veiculos", 'erro':erro.message   })
            
        }
    }

    static async BuscarVeiculoCond(req,res){ // READ COM CONDICIONAL
        try {
            const coluna = req.params.coluna
            const valor = req.params.valor  
            if (!coluna || valor == undefined){
                return res.status(400).json({'mensagem' : "algum dos campos está vazio"})
            }
            const veiculo = await VeiculoModel.BuscarVeiculosCond(coluna,valor)
            if (!veiculo || veiculo.length == 0){
                return res.status(404).json({'mensagem': "Nenhum veiculo com esse id foi encontrado"})
            }
            return res.status(200).json(veiculo)
        } catch (erro) {
            return res.status(500).json({'mensagem':"Erro ao buscar os veiculos", 'erro':erro.message   })   
        }
    }

    static async AdicionarVeiculo(req,res){  // INSERT  
        try {
            const marca = req.body.marca        // parametros da query
            const modelo = req.body.modelo
            const ano = req.body.ano
            const placa = req.body.placa
            const v_diaria = req.body.valor_diaria
            const disp = req.body.disponibilidade
            
            if (!marca || !modelo || !ano || !placa || v_diaria == undefined || disp == undefined){  // validação dos dados 
                return res.status(400).json({'mensagem' : "algum dos campos está vazio"})
            }

            const dados = [marca,modelo,ano,placa,v_diaria,disp];        
            const veiculo = await VeiculoModel.AdicionarVeiculo(dados)    // query 
            return res.status(201).json(veiculo)
            
        } catch (erro) {
            return res.status(500).json({'mensagem':"Erro ao adicionar o veiculo", 'erro':erro.message})
        }
    }

    static async DeletarVeiculo(req, res){ // DELETE
        try {
            const id = req.params.id
            if (id == undefined){
                return res.status(400).json({'mensagem' : "algum dos campos está vazio"})
            }
            const veiculo = await VeiculoModel.DeletarVeiculo(id)
            if (!veiculo){
                return res.status(404).json({'mensagem':"nenhum veiculo com esse id foi encontrado para ser deletado"})
            }
            return res.status(200).json(veiculo)
        } catch (erro) {
            return res.status(500).json({'mensagem':"Erro ao deletar o veiculo", 'erro':erro.message})
            
        }
    }

    static async AlterarVeiculo(req,res){ // UPDATE
        try {
            const id = req.params.id
            const coluna = req.body.coluna
            const valor = req.body.valor
            if (id == undefined || !coluna || valor == undefined){
                return res.status(400).json({'mensagem' : "algum dos campos está vazio"})
            }

            const veiculo = await VeiculoModel.AlterarVeiculo(id,coluna,valor)
            if (!veiculo){
                return res.status(404).json({'mensagem': "veiculo a ser alterado não foi encontrado"})
            }
            return res.status(200).json(veiculo)
        } catch (erro) {
            return res.status(500).json({'mensagem':"Erro ao alterar o veiculo", 'erro':erro.message})
        }
    }

    static async Alugarveiculo(req,res){ // alugar
        try {
            const id = req.params.id
            const cliente = req.body.cliente
            const data_inicio = req.body.data_inicio
            const data_fim = req.body.data_fim
            if (id == undefined || !cliente || !data_inicio || !data_fim){
                return res.status(400).json({'mensagem' : "algum dos campos está vazio"})
            }

            const dados = [cliente,data_inicio,data_fim]
            const veiculoEServico = await VeiculoModel.Alugarveiculo(id,dados)
            if (!veiculoEServico[0] || !veiculoEServico[1]){
                return res.status(404).json({'mensagem': "veiculo a ser alterado não foi encontrado"})
            }
            return res.status(200).json(veiculoEServico)
        } catch (erro) {
            return res.status(500).json({'mensagem':"Erro ao alugar o veiculo", 'erro':erro.message})
            
        }
    }
}