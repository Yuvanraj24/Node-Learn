const logEvents = require('./logEvents')

const EventEmitter = require('node:events');


//inheritance
class MyEmitter extends EventEmitter {}

//This is MyEmitter class object
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => {
    console.log('msg : '+ msg)
  logEvents(msg)
});

myEmitter.emit('log','log event is emitted');