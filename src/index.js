import { foo, createCb } from './task1';
import { parseJSON, successCb, failureCb } from './task2'

console.log('-----------------------------');

foo(5, createCb('cb'));
foo(20, createCb('cb'));

console.log('-----------------------------');

parseJSON('{"x": 10}', successCb, failureCb);
parseJSON('{x}', successCb, failureCb);

console.log('-----------------------------');


console.log('-----------------------------');


console.log('-----------------------------');