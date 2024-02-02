console.log("Hello Yuvanraj");

const { write } = require('fs');
/*
// Lesson - 1
const os = require('os')
const path = require('path')

// const math = require('./math')
// console.log("add"+" "+math.add(5,1))

const {add,sub,mul,div} = require('./math') 
console.log("add"+" "+add(5,1))
console.log("sub"+" "+sub(5,1))
console.log("mul"+" "+mul(5,2))
console.log("div"+" "+div(50,2))
*/

//Lesson - 2

const path = require('path') 
const fsPromises = require('fs').promises

//function declaration :
const fileOps = async () => {
    try{
        const data = 
        //Write the file :
        await fsPromises.writeFile(path.join(__dirname,'files','write_text.txt'),'I Love You diii')
        console.log('Write file is completed') 
        //Append the file :
        await fsPromises.appendFile(path.join(__dirname,'files','write_text.txt'),'\nMy Dear Ammu')
        console.log('File Append is completed...')
        //Rename the file :
        await fsPromises.rename(path.join(__dirname,'files','write_text.txt'),path.join(__dirname,'files','love.txt'))
        console.log('Rename is completed')
        //Read the file :
        await fsPromises.readFile(path.join(__dirname,'files','love.txt'),'utf8')
        console.log('Read file is completed')
        //Delete the file :
        await fsPromises.unlink(path.join(__dirname,'files','love.txt'))
        console.log('Delete file is completed')
    } catch (e) {
        console.error('catch error : '+e)
    }
}


//function calling :
fileOps()


//exit on Uncaught errors
process.on('uncaughtException', err => {
    console.log(`There was an uncaught error : ${err}`)
    process.exit(1)
});