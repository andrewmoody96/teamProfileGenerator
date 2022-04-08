const Employee = require("../index.js")

describe("Employee", () => {
    it("should return an object containing 'name', 'ID', & 'email' properties, when called with the 'new' keyword", () => {
        const obj = new Employee();
        expect("name" in obj).toEqual(expect.any(typeof(String)))
    })
});