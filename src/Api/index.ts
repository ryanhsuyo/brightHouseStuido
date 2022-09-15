// 透過http啟動web server
<script>

const http = require('http')

const server = http.createServer(function(req, res){
  res.writeHead(200, {'content-Type': 'text/plain'})
  res.end('hello')
})

//設定服務監聽locatlost: 3000(127.0.0.1/:3000)
server.listen('3000', function(){
  console.log('server start on 3000 port');
})
</script>
