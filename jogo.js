const express = require("express");
const router = express.Router();


let listaJogos = [];


router.get("/", (req,res) => {
    res.status(200).json({message: "Moedas Ok"});
});

router.get("/listar", (req,res) => {
    res.status(200).json(listaJogos);
});

router.get("/listar/:nome", (req,res) => {
    const nome = req.params.nome;
    const jogos = listaJogos.find((item) => item.nome === nome);
    res.status(200).json(jogos);
});

router.get("/listarindex/:nome", (req,res) => {
    const nome = req.params.nome;
    const index = listaJogos.findIndex((item) => item.nome === nome);
    if(index == -1){
        res.status(204);
        return;
    }
    res.status(200).json({index:index});
});


router.post("/", (req,res) => {
    const jogos = req.body;

    if(!jogos.nome){
        res.status(400).json({message:"corpo da requisição vazio"});
        return;

    }if(!jogos.ano){
        res.status(400).json({message:"corpo da requisição vazio"});
        return;

    }if(!jogos.estilo){
        res.status(400).json({message:"corpo da requisição vazio"});
        return;
    }

    listaJogos.push(jogos);     
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/:id", (req,res) => {
    const id = req.params.id;
    const jogos = listaJogos[id];

    console.log(jogos);

    listaJogos[id] = req.body;

    res.status(200).json(listaJogos[id]);
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaJogos[id];
    console.log(listaJogos[id]);
    res.status(200).json(listaJogos);
});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;
    listaJogos.splice(id,1);
    res.json(listaJogos);
});


module.exports = router;