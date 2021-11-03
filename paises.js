const express = require("express");
const router = express.Router();


let listaPaises = [];

router.get("/listar", (req,res) => {
    res.status(200).json(listaPaises);
});

router.get("/listar/:nome", (req,res) => {
    const nome = req.params.nome;
    const paises = listaPaises.find((item) => item.nome === nome);
    res.status(200).json(listaPaises);
});

router.get("/listarindex/:nome", (req,res) => {
    const nome = req.params.nome;
    const index = listaPaises.findIndex((index) => item.nome === nome);
    if(index == -1){
        res.status(204);
        return;
    }
    res.status(200).json(listaPaises[id]);
});


router.post("/", (req,res) => {
    const paises = req.body;
    if(!paises.nome){
        res.status(400).json({message:"corpo da requisição vazio"});
        return;
    }if(!paises.capital){
        res.status(400).json({message:"corpo da requisição vazio"});
        return;
    }if(!paises.moeda){
        res.status(400).json({message:"corpo da requisição vazio"});
        return;
    }if(!paises.idioma){
        res.status(400).json({message:"corpo da requisição vazio"});
        return;
    }

    listaPaises.push(paises);     
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/:id", (req,res) => {
    const id = req.params.id;
    const pessoa = listaPaises[id];

    console.log(paises);

    listaPaises[id] = req.body;

    res.status(200).json(listaPaises[id]);
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaPaises[id];
    console.log(listaPaises[id]);
    res.status(200).json(listaPaises);
});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;
    listaPaises.splice(id,1);
    res.json(listaPaises);
});


module.exports = router;