var express = require("express");
var app = express();

app.use(express.json());


app.use(function(req, res, next) {
    console.log("Método HTTP:", req.method);
    console.log("URL:", req.url);
    console.log("Horário:", new Date().toISOString());
    next();
});

app.get("/", function (req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/contato", function (req, res){
    res.send("Essa é a rota Contato!");
});

app.get("/sobre", function (req, res){
    res.send("Essa é a rota Sobre!");
});

app.get("/produto/:id", function (req, res){
    const id = req.params.id;
    res.send("A ID do meu produto é " + id);
});

app.listen(3000, function(){
    console.log("Minha aplicação está no ar!");
});