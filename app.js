var http = require("http");

http.createServer(function(requisicao,resposta){
  resposta.end("Welcome!");
}).listen(8181);

console.log("Server up");