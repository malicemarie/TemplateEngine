"use strict";

const Manager = require("../lib/manager");

describe("Manager", () => {
  let manager;
  beforeEach(() => {
    manager = new Manager("Foo", 1, "test@test.com", 100);
  });

  test("Can set office number via constructor argument", () => {
    const testValue = 100;
    expect(manager.officeNumber).toBe(testValue);
  });

  test('getRole() should return "Manager"', () => {
    const testValue = "Manager";

    expect(manager.getRole()).toBe(testValue);
  });

  test("Can get office number via getOffice()", () => {
    const testValue = 100;
    expect(manager.getOfficeNumber()).toBe(testValue);
  });
});
