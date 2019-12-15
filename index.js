var http = require('http');
var wol = require ('node-wol')

var port = 8081;

var s = http.createServer();
s.on('request', function(request, response) {
    response.writeHead(200);


   console.log(request.url);
   if(request.url == "/index.js?action=wol") {
     console.log("Requête Wake On Lan lancée")
     wol.wake('00:D8:61:58:6A:F4', {
      address: '78.212.153.180',
      port: 9
     }, function(error) {
      if(error) {
        // handle error
        return;
      }
    });
   }
    response.write('hi');
    response.end();
});

s.listen(port);
console.log('Browse to http://127.0.0.1:' + port);
