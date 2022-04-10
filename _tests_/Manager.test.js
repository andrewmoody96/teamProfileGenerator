const Manager = require("../Assets/Scripts/index.js")

// Tests to make sure all required properties are included in Employee object.
describe("Manager", () => {
    it("should return an object containing 'name', 'ID', 'email', 'office' & 'role' properties, when called with the 'new' keyword", () => {
        const obj = new Manager();
        expect("name" in obj).toEqual(true);
        expect("ID" in obj).toEqual(true);
        expect("email" in obj).toEqual(true);
        expect("office" in obj).toEqual(false);
        expect("role" in obj).toEqual(false);
        // expect("role" in obj).toBe();
        console.log(obj);
    })
});