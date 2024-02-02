const http = require('http')

const PORT = 3000;

const fs =  require('fs')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.readFile('index.html', (error,data)=> {
        if(error){
            res.writeHead(404)
            res.write('Page not found')
        }else{
            res.write(data)
        }
        res.end()
    })

})


server.listen(PORT,(err)=>{
    if(err){
        console.log('log error: '+err)
        console.error('Error: '+err)
    }else{
        console.log('Server is running on ' + PORT)
    }
   
})