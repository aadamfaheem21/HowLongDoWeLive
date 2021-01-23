const fs = require('fs');

const build = "build/";
const images = "build/images/";
const css ="build/css/";
const countypages ="build/countypages/";
const js="build/js/"

const dist = "dist/";
const distimages = "dist/images/";
const distcss ="dist/css/";
const distcountypages ="dist/countypages/";
const distjs="dist/js/"

const publicimages = "src/public/images/";
const publicjs = "src/public/js/"

const buildarray = [countypages,css,images,js,build];
const distarray = [distcountypages,distcss,distimages,distjs,dist];

for (value of buildarray) {
  fs.readdirSync(value).forEach((file) => {
    try {
      fs.unlinkSync(value + file);
    } catch(err) {
      console.log(err);
    }
  })
  if (value===build) {
  }
  else {
    fs.rmdirSync(value);
  }
}

for (value of distarray) {
  fs.readdirSync(value).forEach((file) => {
    try {
      fs.unlinkSync(value + file);
    } catch(err) {
      console.log(err);
    }
  })
  if (value===dist) {
  }
  else {
    fs.rmdirSync(value);
  }
}

fs.mkdirSync(images);
fs.mkdirSync(css);
fs.mkdirSync(countypages);
fs.mkdirSync(js)

fs.mkdirSync(distimages);
fs.mkdirSync(distcss);
fs.mkdirSync(distcountypages);
fs.mkdirSync(distjs)


fs.readdirSync(publicimages).forEach((file) => {
  try {
    fs.copyFileSync(publicimages + file, images + file);
  } catch(err) {
    console.log(err);
  }
}
)
fs.readdirSync(publicjs).forEach((file) => {
  try {
    fs.copyFileSync(publicjs + file, js + file);
  } catch(err) {
    console.log(err);
  }
}
)

fs.readdirSync(publicimages).forEach((file) => {
  try {
    fs.copyFileSync(publicimages + file, distimages + file);
  } catch(err) {
    console.log(err);
  }
}
)

fs.readdirSync(publicjs).forEach((file) => {
  try {
    fs.copyFileSync(publicjs + file, distjs + file);
  } catch(err) {
    console.log(err);
  }
}
)
