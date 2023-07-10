path = require('path');

console.log(path.sep);

filepath = path.join('content' , 'subcontent' , 'test.txt');

console.log(filepath);

absolutePath = path.resolve(__dirname , 'content' , 'subcontent' , 'test.txt11');

console.log(absolutePath);