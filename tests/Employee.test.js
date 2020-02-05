"use strict";

const Employee = require("../lib/employee");

describe("Employee", () => {
  let employee;
  beforeEach(() => {
    employee = new Employee("Alice", 100, "test@test.com");
  });

  test("Can instantiate Employee instance", () => {
    expect(typeof employee).toBe("object");
  });

  test("Can set name via constructor arguments", () => {
    const name = "Alice";
    expect(employee.name).toBe(name);
  });

  test("Can set id via constructor argument", () => {
    const testValue = 100;
    expect(employee.id).toBe(testValue);
  });

  test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    expect(employee.email).toBe(testValue);
  });

  test("Can get name via getName()", () => {
    const testValue = "Alice";
    expect(employee.getName()).toBe(testValue);
  });

  test("Can get id via getId()", () => {
    const testValue = 100;
    expect(employee.getId()).toBe(testValue);
  });

  test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    expect(employee.getEmail()).toBe(testValue);
  });

  test('getRole() should return "Employee"', () => {
    const testValue = "Employee";
    expect(employee.getRole()).toBe(testValue);
  });
});
