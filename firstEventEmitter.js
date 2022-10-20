import EventEmitter from 'events';

const firstEmitter = new EventEmitter();

firstEmitter.emit('My first event');
