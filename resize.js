const sharp = require('sharp');
const fs = require('fs');
const directory = './src/assets/images';

fs.readdirSync(directory).forEach(file => {
  const name = file.split('.')[0];

  sharp(`${directory}/${file}`)
    .resize(450, 450) // width
    .toFile(`${directory}/${name}-small.jpg`);

  sharp(`${directory}/${file}`)
    .resize(750) // width
    .toFile(`${directory}/${name}-medium.jpg`);
});