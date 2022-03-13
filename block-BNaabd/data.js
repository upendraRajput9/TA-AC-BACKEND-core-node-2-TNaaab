// writeCode

// 1. Create a basic server `data.js`

// - add a listener on port 7000
// - send different types of data from postman and
//  check `req.headers` for `content-type` after creating below server
// - send json data from postman using `POST` request on `/json` and
//  parse it into the server.
// - send form data from postman using `POST` request on `/form` and
//  parse it into the server.
// - send in response the entire data received by server.


var http = require('http');
var server = http.createServer(handleRequest);
var qs = require('querystring');
function handleRequest(req,res){
let store = "";
req.on('data',(chunk)=>{
    store= store+chunk
})
req.on('end',()=>{
    if(req.method==='POST',req.url==='/json'){
var parseData = JSON.parse(store);
res.end(parseData);
    }
    else if(req.method==='POST',req.url==='/form'){
    var parseData = qs.parse(store);
    res.end(JSON.stringify(parseData))
    }
})

}
server.listen(7000,()=>{
    console.log('server listening on port 7k')
})