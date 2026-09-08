import * as bd from "pg"

export const Banco = new bd.Pool({
    user: "vini",
    host: "localhost",
    database: "DB_desafio",
    password: "rafael98",
    port: "5432"
});
