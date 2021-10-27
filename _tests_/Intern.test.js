// Intern constructor
const Intern = require("../lib/Intern");

//Create Intern 
describe("Intern", () => {
    it("Create an example of Intern", () => {
        const intern = new Intern("Nacho", 23, "nacho77@gmail.com", "MIT");
        expect(intern.school).toEqual(expect.any(String));
    });

    // getSchool()
    it("get intern school", () => {
        const intern = new Intern("Nacho", 23, "nacho77@gmail.com", "MIT");
        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    });

    // getRole()
    it("get role of intern", () => {
        const intern = new Intern("Nacho", 23, "nacho77@gmail.com", "MIT");
        expect(intern.getRole()).toEqual("Intern");
    });
});