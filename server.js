const http =  require('node:http');
const server = http.createServer((req,res)=>{
   
        res.end("secrete data");
    
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

