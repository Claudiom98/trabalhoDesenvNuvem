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
    res.send("Edita o usuário " + req.params.id)
})

module.exports = router;