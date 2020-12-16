 const fs = require("fs");
let stateNames = fs.readFileSync('../statenames.json');
let output = JSON.parse(fs.readFileSync('../output.json'));

  const outputKeys = ouptut.keys();

  for (state in stateNames) {
    describe('Checking data completeness', ()=> {
      test("All states should be represented", () =>) {
        expect(stateNames).toContain(output[state]);
      });

      test("All states should have data from 1987-2009", () =>) {
        for (int i = 1987; i <= 2009; i++) {
          expect(output[state]["year"][i]).not.toEqual("");
        }
      });
      //
      // test("All counties should be represented", () =>) {
      //   expect(true).toEqual(true);
      // });

      test("All total male life expectancies should be filled in", () =>) {
        for (int i = 1987; i <= 2009; i++) {
          expect(output[state][i]["Male life expectancy (years)"]).not.toEqual("");
        }
      });

      test("All total female life expectancies should be filled in", () =>) {
        for (int i = 1987; i <= 2009; i++) {
          expect(output[state][i]["Female life expectancy (years)"]).not.toEqual("");
        }
      });

      test("All white female life expectancies should be filled in", () =>) {
        for (int i = 1987; i <= 2009; i++) {
          expect(output[state][i]["Female life expectancy (years)"]).not.toEqual("");
        }
      });

      test("All white male life expectancies should be filled in", () =>) {
        for (int i = 1987; i <= 2009; i++) {
          expect(output[state][i]["White male life expectancy (years)"]).not.toEqual("");
        }
      });

      test("All black male life expectancies should be filled in", () =>) {
        for (int i = 1987; i <= 2009; i++) {
          expect(output[state][i]["White female life expectancy (years)"]).not.toEqual("");
        }
      });

      test("All black female life expectancies should be filled in", () =>) {
        for (int i = 1987; i <= 2009; i++) {
          expect(output[state][i]["Black female life expectancy (years)"]).not.toEqual("");
        }
      });

      test("Change in male life expectancy over time should be mathematically correct", () =>) {
        expect(parseInt(output[state][2009]["Male life expectancy (years)"])
        - parseInt(output[state][1987]["Male life expectancy (years)"]
      ])).toEqual(parseInt(output[state]["Male life expectancy change 1987 to 2009 (years)"]));
      });

      test("Change in female life expectancy over time should be mathematically correct", () =>) {
        expect(parseInt(output[state][2009]["Female life expectancy (years)"])
        - parseInt(output[state][1987]["Female life expectancy (years)"]
      ])).toEqual(parseInt(output[state]["Female life expectancy change 1987 to 2009 (years)"]));
      });

    });

  }
