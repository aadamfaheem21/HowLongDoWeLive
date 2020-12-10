// Reading the file using default
// fs npm package
const fs = require("fs");
const csv = fs.readFileSync("CSV_file.csv")
const statenames= JSON.parse(fs.readFileSync("statenames.json", 'utf8'));

function csvJSON(csv){
  let count=0;
  for (state of statenames) {
    console.log("Generating JSON for: " + state.name);
    count++;
    console.log(count);
  var lines=csv.toString().split("\n");

  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].replace('\r', "").split(",");

      for(var j=0;j<headers.length;j++){
          obj[headers[j].replace('\r', "")] = currentline[j];
      }

      if (obj.State.includes(state.name.toUpperCase())) {
      result.push(obj);
    }
  }
fs.writeFileSync("jsons/"+state.name.replace(/ /g, "-")+".json", JSON.stringify(result));
  //return result; //JavaScript object
}
return result
}
csvJSON(csv);
