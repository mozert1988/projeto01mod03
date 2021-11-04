const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({message:"Bem vindos a nossa API"});
});

const paisesRouter = require("./paises");
app.use("/paises", paisesRouter);

const serieRouter = require("./serie");
app.use("/serie", serieRouter);

const jogoRouter = require("./jogo");
app.use("/jogo", jogoRouter);


app.listen(port, () => {  
    console.info(`App rodando em: http://localhost:${port}`);
});