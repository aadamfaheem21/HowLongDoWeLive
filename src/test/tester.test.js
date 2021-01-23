const fs = require("fs");
//const jest = require("jest");
let county = JSON.parse(fs.readFileSync('src/data/county.json'));
let output = JSON.parse(fs.readFileSync('src/data/output.json'));
let stateNames = JSON.parse(fs.readFileSync('src/data/statenames.json'));

  const countyNames = Object.keys(county);
  const outputKeys = Object.keys(output);
  const stateNameKeys = Object.keys(stateNames);

    describe('Checking data completeness', ()=> {

      test("All counties provided in the data set should be represented in the json file", () => {
        expect(countyNames.length).toEqual(1844);
      });

      test("All states in the US should be represented", () => {
        var statesRepresented = [];
        outputKeys.forEach(function (currentValue, index) {
          var testingState = output[index]["State"];
          if (!(statesRepresented.includes(testingState)) && testingState != '') {
            statesRepresented.push(testingState);
          }
        });
        stateNameKeys.forEach(function (currentValue, index) {
          var expectedState = (stateNames[currentValue]["name"]).toUpperCase();
          expect(statesRepresented[index]).toEqual(expectedState);
        });
      });

      test("Total life expectancies should be between 10 and 100", () => {
        outputKeys.forEach(function (currentValue, index) {
          const categories = Object.keys(output[currentValue]);
          expect(parseInt(output[index]["Male life expectancy (years)"])).toBeGreaterThan(10);
          expect(parseInt(output[index]["Male life expectancy (years)"])).toBeLessThan(100);
          expect(parseInt(output[index]["Female life expectancy (years)"])).toBeGreaterThan(10);
          expect(parseInt(output[index]["Female life expectancy (years)"])).toBeLessThan(100);
        });
      });


      test("Fips code should be between 4 and 5 digits long", () => {
        outputKeys.forEach(function (currentValue, index) {
          const categories = Object.keys(output[currentValue]);
          expect(output[index]["fips"].length).toBeGreaterThanOrEqual(4);
          expect(output[index]["fips"].length).toBeLessThan(6);
        });
      });

      test("All total male life expectancies should be filled in", () => {
        countyNames.forEach(function (currentValue, index) {
          for (var i = 0; i <= 22; i++) {
            expect(county[currentValue]["maleLife"][i]).not.toEqual(null);
          }
        });
      });

      test("All total female life expectancies should be filled in", () => {
        countyNames.forEach(function (currentValue, index) {
          for (var i = 0; i <= 22; i++) {
            expect(county[currentValue]["femaleLife"][i]).not.toEqual(null);
          }
        });
      });

      test("All white male life expectancies should be filled in", () => {
        countyNames.forEach(function (currentValue, index) {
          for (var i = 0; i <= 22; i++) {
            expect(county[currentValue]["whiteMaleLife"][i]).not.toEqual(null);
          }
        });
      });

      test("All white female life expectancies should be filled in", () => {
        countyNames.forEach(function (currentValue, index) {
          for (var i = 0; i <= 22; i++) {
            expect(county[currentValue]["whiteFemaleLife"][i]).not.toEqual(null);
          }
        });
      });

      test("All black male life expectancies should be filled in", () => {
        countyNames.forEach(function (currentValue, index) {
          for (var i = 0; i <= 22; i++) {
            expect(county[currentValue]["blackMaleLife"][i]).not.toEqual(null);
          }
        });
      });

      test("All black female life expectancies should be filled in", () => {
        countyNames.forEach(function (currentValue, index) {
          for (var i = 0; i <= 22; i++) {
            expect(county[currentValue]["blackFemaleLife"][i]).not.toEqual(null);
          }
        });
      });
    });
