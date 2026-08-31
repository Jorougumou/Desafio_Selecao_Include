import app from "./src/api.js"
import {conectar} from "./src/config/postgree.js"

conectar();

app.listen(3000, () => {
    console.log("servidor está rodando em https://localhost:3000")
})