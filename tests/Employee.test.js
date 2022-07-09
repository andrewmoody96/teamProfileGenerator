const Employee = require("../index.js")

// Tests to make sure all required properties are included in Employee object.
describe("Employee", () => {
    it("should return an object containing 'name', 'ID', & 'email' properties, when called with the 'new' keyword", () => {
        const obj = new Employee();
        expect("name" in obj).toEqual(true);
        expect("ID" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        console.log(obj);
    })
});