import {Banco} from '../config/postgree.js'

export class VeiculoModel {
    

    static async BuscarVeiculos(){    // READ
        const resultado = await Banco.query('SELECT * FROM VEICULOS ORDER BY id')
        return resultado.rows
    }

    static async BuscarVeiculosCond(coluna,valor){ //READ COM CONDIÇÕES
  
        const query = "SELECT * FROM VEICULOS WHERE " + coluna + " = $1"
        const resultado = await Banco.query(query,[valor])
        return resultado.rows
    }

    static async AdicionarVeiculo(dados){  // INSERT
        const query = `INSERT INTO VEICULOS
         (MARCA,MODELO,ANO,PLACA,VALOR_DIARIA,DISPONIBILIDADE) 
         VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`
        const resultado = await Banco.query(query,dados)
        return resultado.rows[0]
    }

    static async DeletarVeiculo(id){    // DELETE
        const query = "DELETE FROM VEICULOS WHERE ID = $1 RETURNING *"
        const resultado = await Banco.query(query,[id])
        return resultado.rows[0]
    }

    static async AlterarVeiculo(id,coluna,valor){  // UPDATE
        const lista = [valor,id]
        var query = "UPDATE VEICULOS SET " + coluna + " = $1 WHERE ID = $2 RETURNING *"
        const resultado = await Banco.query(query,lista)
        return resultado.rows[0]
    }

    static async Alugarveiculo(id,dados){
        const query1 = "UPDATE VEICULOS SET DISPONIBILIDADE = false WHERE ID = $1 RETURNING *"
        const resultado1 = await Banco.query(query1,[id])

        const query2 = `INSERT INTO SERVICO 
        (CLIENTE,DATA_INICIO,DATA_FIM,ID_V)
        VALUES ($1,$2,$3,$4)
        RETURNING *`
        dados.push(id)
        const resultado2 = await Banco.query(query2,dados)
        return[resultado1.rows[0], resultado2.rows[0]]

    }
}