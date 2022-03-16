let path =require('path');
var relativePath = './client(dir)/index.js'
var absolutePath = path.join(__dirname,'./client(dir)/index.js')

console.log(absolutePath,relativePath);
// var http = require('http');
// var server = http.createServer(handleRequest);
// var fs= require('fs');
// function handleRequest(req,res){
//     res.setHeader('Content-Type','text/html');
//     fs.createReadStream('./form.html').pipe(res)
// }

// server.listen(3000,()=>{
//     console.log('server listening on port 3k')
// })


var http = require('http');
var server = http.createServer(handleRequest);
var fs= require('fs');
function handleRequest(req,res){
    if(req.method==='GET'&& req.url==='/form'){
        res.setHeader('Content-Type','text/html');
            fs.createReadStream('./form.html').pipe(res)
    }
    else if(req.method==='POST'&& req.url==='/form'){
        
    }
}

server.listen(5678,()=>{
    console.log('server listening on port 5678')
})


