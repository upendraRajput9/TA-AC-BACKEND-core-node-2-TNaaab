var path = require('path');
console.log(__filename)
console.log(path.join(__dirname,'./app.js'));
console.log(path.join(__dirname,'./index.html'));

var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req,res){
let store ="";
let dataFormat = req.headers['content-type']
if(req.method==='POST'&&req.url==='/' ){
    req.on('data',(chunk)=>{
        store=store+chunk;
    })
    req.on('end',()=>{
        if( dataFormat==='applicatin/json'){
        let parseData= JSON.parse(store);
        res.end(store);
        }
    })
}
}


server.listen(3000,()=>{
    console.log('server listening on port 3k')
})
