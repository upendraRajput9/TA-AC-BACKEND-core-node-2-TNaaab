var http = require('http');
var server = http.createServer(handleRequest);
var qs = require('querystring')
function handleRequest(req,res){
    let dataFormat = req.headers['content-type']
    let store= "";
    console.log(dataFormat)
req.on('data',(chunk)=>{
store+=chunk;

})
req.on('end',()=>{
if(dataFormat==='application/json'){
    var jsonParseData = JSON.parse(store);
    res.setHeader('Content-Type', 'type/html')
    res.end(`<h2>${jsonParseData.name}</h2><p>${jsonParseData.email}</p>`);
}
if(dataFormat==='application/x-www-form-urlencoded'){
    var parseData = qs.parse(store);
    let data=JSON.stringify(parseData)
    console.log(data)
    res.setHeader('Content-Type', 'type/html')
    res.end(`<h2>${parseData.name}</h2><p>${parseData.email}</p>`);
}
})
}


server.listen(9000,()=>{
    console.log('server listening on port 9k')
})
