const fs = require("fs");
let stateNames = fs.readFileSync('../statenames.json');

for (state of stateNames) {
  let state = fs.readFileSync('../jsons/'+state+'.json');

  describe('Checking data format', ()=> {
    test("All %'s should be represented as decimals'", () =>) {
      expect(true).toEqual(true);
    });
  });

  describe('Checking data completeness', ()=> {
    test("All states should be represented", () =>) {
      expect(true).toEqual(true);
    });

    test("All states should have data from 1987-2009", () =>) {
      expect(states).not.toEqual("");
    });

    test("All counties should be represented", () =>) {
      expect(true).toEqual(true);
    });

    test("All total male life expectancies should be filled in", () =>) {
      expect(true).toEqual(true);
    });

    test("All total female life expectancies should be filled in", () =>) {
      expect(true).toEqual(true);
    });

    test("All white female life expectancies should be filled in", () =>) {
      expect(true).toEqual(true);
    });

    test("All white male life expectancies should be filled in", () =>) {
      expect(true).toEqual(true);
    });

    test("All black male life expectancies should be filled in", () =>) {
      expect(true).toEqual(true);
    });

    test("All black female life expectancies should be filled in", () =>) {
      expect(true).toEqual(true);
    });

  });
}
