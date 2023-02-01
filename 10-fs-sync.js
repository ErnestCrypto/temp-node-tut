// BILUT IN FILE SYSTEM MUDULE 

// Built in file sytem mudule synchronous example
const {readFileSync,writeFileSync} = require('fs'); // destructuring 
console.log('start');
// read contents of fist.txt
const first = readFileSync('./content/first.txt','utf8');

// read contents of second.txt
const second = readFileSync('./content/second.txt','utf8');

writeFileSync('./content/result-sync.txt',`Here is the result : ${first},${second}`,{flag:'a'});

console.log('done with this task');
console.log('starting the next one');







