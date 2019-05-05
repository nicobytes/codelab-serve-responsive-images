![Imgur](https://i.imgur.com/GLMJvVf.png)

# Demo

1. down images w/ imagen
2. instal npm i sharp

```javascript
const sharp = require('sharp');
const fs = require('fs');
const directory = './src/assets/images';

fs.readdirSync(directory).forEach(file => {
  const name = file.split('.')[0];
  console.log(file, name);
});
```

```javascript
const sharp = require('sharp');
const fs = require('fs');
const directory = './src/assets/images';

fs.readdirSync(directory).forEach(file => {
  const name = file.split('.')[0];
  sharp(`${directory}/${file}`)
    .resize(450) // width
    .toFile(`${directory}/${name}-small.jpg`);

  sharp(`${directory}/${file}`)
    .resize(750) // width
    .toFile(`${directory}/${name}-medium.jpg`);
});
```

```html
<picture>
  <source srcset="assets/images/image-small.jpg" media="(max-width:  480px)" />
  <source srcset="assets/images/image-medium.jpg" media="(max-width: 640px)" />
  <source srcset="assets/images/image.jpg" media="(max-width: 1200px)" />
  <img src="assets/images/image.jpg" />
</picture>
```

