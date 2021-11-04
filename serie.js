const express = require("express");
const router = express.Router();


let listaSerie = [];


router.get("/", (req,res) => {
    res.status(200).json({message: "Series Ok"});
});

router.get("/listar", (req,res) => {
    res.status(200).json(listaSerie);
});

router.get("/listar/:nome", (req,res) => {
    const nome = req.params.nome;
    const serie = listaSerie.find((item) => item.nome === nome);
    res.status(200).json(serie);
});

router.get("/listarindex/:nome", (req,res) => {
    const nome = req.params.nome;
    const index = listaSerie.findIndex((item) => item.nome === nome);
    if(index == -1){
        res.status(204);
        return;
    }
    res.status(200).json({index:index});
});


router.post("/", (req,res) => {
    const serie = req.body;

    if(!serie.nome){
        res.status(400).json({message:"corpo da requisição vazio"});
        return;

    }if(!serie.ano){
        res.status(400).json({message:"corpo da requisição vazio"});
        return;

    }if(!serie.temporadas){
        res.status(400).json({message:"corpo da requisição vazio"});
        return;
    }

    listaSerie.push(serie);     
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/:id", (req,res) => {
    const id = req.params.id;
    const series = listaSerie[id];

    console.log(serie);

    listaSerie[id] = req.body;

    res.status(200).json(listaSerie[id]);
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaSerie[id];
    console.log(listaSerie[id]);
    res.status(200).json(listaSerie);
});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;
    listaSerie.splice(id,1);
    res.json(listaSerie);
});


module.exports = router;