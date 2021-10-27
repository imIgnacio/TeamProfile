// Manager constructor
const Manager = require("../lib/Manager");

//Create Manager 
describe("Manager", () => {
    it("Create Manager", () => {
        const manager = new Manager("Nacho", 22,"nacho55@gmail.com", 103);
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });

    // getRole()
    it("get role of manager", () => {
        const manager = new Manager("Nacho", 22,"nacho55@gmail.com", 103);
        expect(manager.getRole()).toEqual("Manager");
    });
});