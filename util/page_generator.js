/**
 * fs is an node package that allows us to read and write to files
 *@author Aadam Faheem and Cassie Elish
 */
const fs = require('fs');
/**
 * ejs is an node package that allows write to templates
 * @author Aadam Faheem and Cassie Elish
 */
const ejs = require('ejs');


// Reading the file using default
// fs npm package

/**
 * csv is the data that we analyzed
 * @author Aadam Faheem and Cassie Elish
 */
const csv = fs.readFileSync("src/data/CSV_File.csv");
/**
 * json is a json files maps statenames
 * @author Aadam Faheem and Cassie Elish
 */
const statenames = JSON.parse(fs.readFileSync("src/data/statenames.json", 'utf8'));

/**
 * lines is a variable of csv split into string
 * @author Aadam Faheem and Cassie Elish
 */
  let lines = csv.toString().split("\n");

  /**
   * result is an array of the data that will be put into a json file
   * @author Aadam Faheem and Cassie Elish
   */
  let result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  /**
   * headers is an arrray of the headers of the csv
   * @author Aadam Faheem and Cassie Elish
   */
  let headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    /**
     * obj creates one of the objects the data
     * @author Aadam Faheem and Cassie Elish
     */
    let obj = {};
    /**
     * currentline is the variable keeps track of the current csv line
     * @author Aadam Faheem and Cassie Elish
     */
    let currentline = lines[i].replace('\r', "").split(",");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j].replace('\r', "")] = currentline[j];
    }

    result.push(obj);
  }
  fs.writeFileSync("src/data/output.json", JSON.stringify(result));


// Example Code from = https://stackoverflow.com/questions/27979002/convert-csv-data-into-json-format-using-JavaScript
/**
 * about_template is the about page template that will generate the about page
 * @author Aadam Faheem and Cassie Elish
 */
let about_template = fs.readFileSync('src/views/about.ejs', 'utf8');
/**
 * index_template is the index page template that will generate the index page
 * @author Aadam Faheem and Cassie Elish
 */
let index_template = fs.readFileSync('src/views/index.ejs', 'utf8');
/**
 * jsvalues is a json file of the data
 * @author Aadam Faheem and Cassie Elish
 */
let jsonvalues = fs.readFileSync('src/data/output.json', 'utf8');

/**
 * about_html is the about page that will be written
 * @author Aadam Faheem and Cassie Elish
 */
let about_html = ejs.render(about_template, {
  filename: __dirname.replace("/util", "") + '/src/views/about.ejs',

});

/**
 * index_html is the index page that will be written
 * @author Aadam Faheem and Cassie Elish
 */
let index_html = ejs.render(index_template, {
  filename: __dirname.replace("/util", "") + '/src/views/index.ejs',

  data: jsonvalues
});

fs.writeFileSync('build/about.html', about_html, 'utf8');
fs.writeFileSync('build/index.html', index_html, 'utf8');

/**
 * output is the data that will be analyzed
 * @author Aadam Faheem and Cassie Elish
 */

let output = JSON.parse(fs.readFileSync('src/data/output.json', 'utf8'));
/**
 * county is an object that will structure the county
 * @author Aadam Faheem and Cassie Elish
 */

let county = {};
/**
 * countynames is an array of the countynames
 * @author Aadam Faheem and Cassie Elish
 */
let countyNames = [];

for (let i = 0; i < output.length; i++) {
  if (countyNames.includes(output[i].County) === false) {
    countyNames.push(output[i].County);
  }
}

for (let j = 0; j < countyNames.length; j++) {
  /**
   * countyname is the countyname of the current county
   * @author Aadam Faheem and Cassie Elish
   */
  let countyName = countyNames[j];
  /**
   * thisCountyObject is the object of the county
   * @author Aadam Faheem and Cassie Elish
   */
  let thisCountyObject = {
    "maleLife": [],
    "femaleLife": [],
    "whiteMaleLife": [],
    "whiteFemaleLife": [],
    "blackMaleLife": [],
    "blackFemaleLife": []
  }

  for (let i = 0; i < output.length; i++) {
    if (output[i].County === countyName) {
      thisCountyObject.maleLife.push(output[i]["Male life expectancy (years)"]);
      thisCountyObject.femaleLife.push(output[i]["Female life expectancy (years)"]);
      thisCountyObject.whiteMaleLife.push(output[i]["White male life expectancy (years)"]);
      thisCountyObject.whiteFemaleLife.push(output[i]["White female life expectancy (years)"]);
      thisCountyObject.blackMaleLife.push(output[i]["Black male life expectancy (years)"]);
      thisCountyObject.blackFemaleLife.push(output[i]["Black female life expectancy (years)"]);
    }
  }
  county[countyName] = thisCountyObject;
}

fs.writeFileSync("src/data/county.json", JSON.stringify(county));
/**
 * micro_template is the template of the micropage
 * @author Aadam Faheem and Cassie Elish
 */
let micro_template = fs.readFileSync('src/views/micropage.ejs', 'utf8');
/**
 * data is the parsed data file
 * @author Aadam Faheem and Cassie Elish
 */
let data = JSON.parse(fs.readFileSync('src/data/county.json', 'utf8'));
/**
 * usdata is the parsed data file
 * @author Aadam Faheem and Cassie Elish
 */
let usdata = JSON.parse(fs.readFileSync('src/data/usdata.json', 'utf8'));
/**
 * names is an array of county names
 * @author Aadam Faheem and Cassie Elish
 */
let names = Object.keys(data);

names.forEach(function(currentValue, index) {
  /**
   * micro_page is the micropage that will be written to the countypages folder
   * @author Aadam Faheem and Cassie Elish
   */
  let micro_page = ejs.render(micro_template, {
    filename: __dirname.replace("/util", "") + '/src/views/micropage.ejs',

    objdata: data[currentValue],
    name: currentValue,
    us: usdata,
    prev: names[index-1],
    next: names[index+1]
  });

  fs.writeFileSync('build/countypages/' + currentValue.replace(/ /g, "-") + '.html', micro_page, 'utf8');

});
