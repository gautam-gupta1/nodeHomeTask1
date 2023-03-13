const http = require('http');

const server = http.createServer(async (req,res)=>{
 
     if(req.url.match(/\/\?name\=[a-zA-Z]+/)&&req.method==="GET"){
        const name = req.url.slice(7)
         res.writeHead(200,{ "Content-Type": "text/plain" })
        res.write(`Hello, ${name}!`)
        res.end();
     }
     else{
        res.writeHead(200,{"Content-Type": "text/plain"})
        res.write("Enter Query String ?name='YourName' ")
        res.end()
     }

})

server.listen(5000,()=>{
    console.log(`Listening at port 5000`)
})