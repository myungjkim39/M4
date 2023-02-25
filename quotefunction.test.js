const quote = require("./quote");
const { expect } = require("chai");

const testCases = [
  {
    scenario: "Both inputs are numbers",
    carValue: 4800,
    riskRating: 2,
    expected: {
      yearly_premium: 96,
      monthly_premium: 8,
    },
  },
  {
    scenario: "Car value as a string format of number",
    carValue: "4800",
    riskRating: 2,
    expected: {
      yearly_premium: 96,
      monthly_premium: 8,
    },
  },
  {
    scenario: "Risk rating as a string format of number",
    carValue: 4800,
    riskRating: "2",
    expected: {
      yearly_premium: 96,
      monthly_premium: 8,
    },
  },
  {
    scenario: "Risk rating as 0",
    carValue: 4800,
    riskRating: 0,
    expected: "Risk rating needs to be between 1 to 5",
  },
  {
    scenario: "Risk rating above 5",
    carValue: 4800,
    riskRating: 6,
    expected: "Risk rating needs to be between 1 to 5",
  },
  {
    scenario: "Negative risk rating number",
    carValue: 4800,
    riskRating: -1,
    expected: "The value cannot be a negative number",
  },
  {
    scenario: "Negative Car value number",
    carValue: -4800,
    riskRating: 2,
    expected: "The value cannot be a negative number",
  },
  {
    scenario: "Missing car value",
    carValue: null,
    riskRating: 5,
    expected: "Missing car value, please enter the numbers",
  },
];

describe("quote tests", () => {
  testCases.map((tc) => {
    it(tc.scenario, () => {
      const actual = quote(tc.carValue, tc.riskRating);
      expect(actual).to.deep.equal(tc.expected);
    });
  });
});
