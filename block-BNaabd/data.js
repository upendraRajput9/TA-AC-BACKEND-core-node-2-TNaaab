var http = require('http')
var server = http.createServer(handleRequest)
var qs = require('querystring')

function handleRequest(req, res) {
  let store = ''
  req.on('data', (chunk) => {
    store = store + chunk
  })
  req.on('end', () => {
    if ((req.method === 'POST', req.url === '/json')) {
      setImmediate.header('Content-Type', 'type/json')
      res.end(store)
    }
    if ((req.method === 'POST', req.url === '/form')) {
      var parseData = qs.parse(store)
      res.end(JSON.stringify(parseData))
    }
  })
}
server.listen(7000, () => {
  console.log('server listening on port 7k')
})
