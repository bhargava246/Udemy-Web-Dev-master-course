const http = require("http")

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req,res) => {
   if(req.url == '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type','Text/plain')
    res.end("Hello ice tea")
   }  else if(req.url == '/ice-tea'){
    res.statusCode = 200;
    res.setHeader('Content-Type','Text/plain')
    res.end("thanks ice tea")
   } else{
    res.statusCode = 200;
    res.setHeader('Content-Type','Text/plain')
    res.end("OOPS Page not found")
   }

})

server.listen(port,hostname,()=>{
    console.log(`server is listening at http://${hostname}:${port}`);
})