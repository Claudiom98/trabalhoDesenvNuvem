const express = require("express");
const router = express.Router();

router.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
});

router.get("/users", function(req, res){
    res.send("Lista todos os usuários")
});

router.get("/user", function(req, res){
    res.send("Inclui um usuário")
});

router.get("/user/:id", function(req, res){
    res.send(`Edita o usuário ${req.params.id}`)
})

router.get("/areaquadrado", function(req, res){
    let base = req.query.base;
    let altura = req.query.altura;
    res.send(`A área do quadrado é: ${base * altura}`)
})

module.exports = router;