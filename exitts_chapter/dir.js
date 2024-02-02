const fs = require('fs')

if(fs.existsSync('./new')){
    fs.rmdir('./new', (err)=>{
        if(err) throw err
        console.log('Directory Removed')
    })
} else if(!fs.existsSync('./new')){
   fs.mkdir('.new', (err) => {
        if(err) throw err
        console.log('Directory Created')
   })
}


process.on('uncaughtException', err => {
    console.log(`There is a uncaught exception :- ${err}`)
    process.exit(1)
})