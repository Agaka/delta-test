const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const router = require("./routes/routes")
const cors = require("cors")
const path = require("path")
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Habilitar requisição das imagens
app.use("/files", express.static(path.resolve(__dirname, "public", "upload")))

// Habilitando CORS para todos os requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
    app.use(cors())
    next()
})

app.use("/",router);

app.listen(3333,() => {
    console.log("Servidor rodando")
});
