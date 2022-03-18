var path = require('path');
console.log(__filename)
console.log(__dirname+'/app.js');
console.log(path.join(__dirname,'./index.html'));

var http = require('http');
var server = http.createServer(handleRequest);
var qs = require('querystring')
function handleRequest(req,res){


if(req.method==='POST'&&req.url==='/' ){
    let store ="";
    req.on('data',(chunk)=>{
        store=store+chunk;
    })
    req.on('end',()=>{
            res.statusCode=201;
        let parseData= qs.parse(store);
        res.end(JSON.stringify(parseData));
        
    })
}
}


server.listen(3000,()=>{
    console.log('server listening on port 3k')
})
