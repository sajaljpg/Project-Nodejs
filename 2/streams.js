const fs = require('fs');

const readStream = fs.createReadStream('./2/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./2/blog4.txt');

readStream.on('data', chunk => {
  console.log('---- NEW CHUNK ----');
  console.log(chunk);
  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk);
});


//piping
readStream.pipe(writeStream);