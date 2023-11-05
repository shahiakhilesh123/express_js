const express = require('express');
const EventEmitter = require('events');

const app = express();
const event = new EventEmitter();
let count = 0;

event.on("counterApi", ()=>{
    count++;
    console.log('event called '+count);
})

app.get('/', ()=>{
    console.log('Event Api')
    event.emit('counterApi')
})

app.listen(5000);