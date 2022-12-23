const fs = require('fs');
const readStream = fs.createReadStream('./docs/blog2');
const writeStream = fs.createWriteStream('./docs/blog4')

//  ----- ----- ----- First way to make way -------- -------- ---------
readStream.on('data',(chunk)=>{
    console.log(" new chunk ");
    console.log(chunk);
    writeStream.write('\n new chunk \n');
    writeStream.write(chunk);
});

//  ----- ----- ----- Second way to make way -------- -------- ---------
readStream.pipe(writeStream);