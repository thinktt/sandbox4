const myNum = require('./m2');
const foo = import('./m3'); 


foo.then(foo => console.log(foo.default)); 
console.log(myNum);

