var http = require('http')
var server = http.createServer(handleRequest)
var fs = require('fs')
var path = require('path');
var url = require('url')
var qs = require('querystring')
function handleRequest(req, res) {
  let store = ''
  const userDir = path.join(__dirname, '/users/')
var parsedUrl=url.parse(req.url,true);
  req.on('data', (chunk) => {
    store += chunk
  })
  req.on('end', () => {
    
    
    if (req.method === 'POST' && req.url === '/users') {
        var userData = JSON.parse(store)
      fs.open(userDir + userData.username + '.json', 'wx', (err, fd) => {
        fs.writeFile(fd, store, (err) => {
          fs.close(fd, (err) => {
            res.end(`${userData.username} successfully created`)
          })
        })
      })
    } 
    else if (req.method === 'GET' && parsedUrl.pathname === "/users") {

        
        fs.readFile(userDir+parsedUrl.query.username+`.json`, function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data)
            return res.end();
          });
    } else if (req.method === 'PUT' && parsedUrl.pathname === '/users') {
        var userData = JSON.parse(store)
        fs.open(userDir+parsedUrl.query.username+`.json`,'r+',function(err, fd){
            fs.ftruncate(fd,0,(err)=>console.log(err));
            fs.writeFile(fd, store, (err) => {
              fs.close(fd, (err) => {
                res.end(`${parsedUrl.query.username} successfully update`)
              })
            })
          })
    } else if (req.method === 'DELETE' && parsedUrl.pathname === '/users') {
        fs.unlink(userDir+parsedUrl.query.username+`.json`, function (err) {
            if (err) throw err;
            console.log('File deleted!');
            res.end(`${parsedUrl.query.username}.json file deleted!`)
          });
    } else {
      res.statusCode = 400
      res.end('Page not found')
    }
  })
}

server.listen(3000, () => {
  console.log('server listening on port 3k')
})
