const EventEmitter = require('events');


class MyEmitter extends EventEmitter{}

const myEmitter= new MyEmitter();

myEmitter.on('waterfull',()=>{
console.log('Please Turn off  the motor');
setTimeout(()=>{
    console.log('Please Turn off  the motor ! Its a gental reminder');
},3000)
});

console.log("the script  is running");
console.log("the script is still running ");
myEmitter.emit('waterfull');