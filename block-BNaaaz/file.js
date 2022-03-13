var fs = require('fs');
var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    fs.createReadStream('./readme.txt').pipe(res);
}

server.listen(2000,()=>{
    console.log('port 2000')
})