const http = require('http');
//  req: 客户端向服务器请求
//  res: 服务器向客户端响应
http.createServer((req, res) => {
  // 设置响应头
  res.writeHead(200, { "Content-type": "text/plain; charset=utf-8" })
  //  返回数据
  res.write(data);
  //  终止响应  也可以返回数据
  res.end()
  //  服务正确开启，需要监听3000 端口
}).listen(3000, () => {
  console.log('server runnning ....')
})
