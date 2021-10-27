//  Engineer Class
const Engineer = require("../lib/Engineer");

// Creating Engineer
describe("Engineer", () => {
    it("Create an example of engineer", () => {
        const engineer = new Engineer("Nacho", 23,"nacho77@gmail.com", "nacho776");
        expect(engineer.github).toEqual(expect.any(String));
    });

    // getGithub()
    it("get engineer github value", () => {
        const engineer = new Engineer("Nacho", 23,"nacho77@gmail.com", "nacho776");
        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
    });

    // getRole()
    it("get role of employee", () => {
        const engineer = new Engineer("Nacho", 23,"nacho77@gmail.com", "nacho776");
        expect(engineer.getRole()).toEqual("Engineer");
    });
});