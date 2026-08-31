import * as bd from "pg"

const Banco = new bd.Pool({
    user: "vini",
    host: "localhost",
    database: "Database_veiculos",
    password: "rafael98",
    port: "5432"
});

Banco.connect((err, client, release) => {
    if (err){
        return console.error("houve um erro ao se conectar com o BD: ",err.stack);
    }
    console.log("Conectado ao BD :)")
    release()
}); 


export const  conectar = () => Banco.connect();