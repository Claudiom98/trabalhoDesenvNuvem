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

module.exports = router;