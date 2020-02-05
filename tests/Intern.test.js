"use strict";

const Intern = require("../lib/intern");

describe("Intern", () => {
  let intern;
  beforeEach(() => {
    intern = new Intern("Foo", 1, "test@test.com", "UCLA");
  });
  test("Can set school via constructor", () => {
    const testValue = "UCLA";
    expect(intern.school).toBe(testValue);
  });

  test('getRole() should return "Intern"', () => {
    const testValue = "Intern";
    expect(intern.getRole()).toBe(testValue);
  });

  test("Can get school via getSchool()", () => {
    const testValue = "UCLA";
    expect(intern.getSchool()).toBe(testValue);
  });
});
