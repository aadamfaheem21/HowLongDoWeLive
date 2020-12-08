const fs = require('fs');
const ejs = require('ejs');

let about_template = fs.readFileSync('views/about.ejs', 'utf8');

let about_html = ejs.render(about_template, {
    filename: __dirname + '/views/about.ejs',
  });

  fs.writeFileSync('about.html', about_html, 'utf8');
