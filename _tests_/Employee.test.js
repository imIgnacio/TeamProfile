// Employee class
const Employee = require("../lib/Employee");

// Create employee
describe("Employee", () => {
    it("Create an employee ", () => {
        const employee = new Employee();
        expect(typeof employee).toBe("object");
    });

    // Create an example of employee
    it("create an example of employee", () => {
        const employee = new Employee("Carlos", 69,"carlos-crack@gmail.com");
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.email).toEqual(expect.any(String));
    });

    // getname()
    it("Get employee name", () => {
        const employee = new Employee("Nacho", 22, "nacho@gmail.com");
        expect(employee.getName()).toEqual(expect.any(String));
    });

    // getId()
    it("Get employee Id", () => {
        const employee = new Employee("Josefa", 23,"Josefa@gmail.com");
        //expect employee id to equal any number
        expect(employee.getId()).toEqual(expect.any(Number));
    });

    // getEmail()
    it("Get employee email", () => {
        const employee = new Employee("Josefa", 23,"Josefa03@gmail.com");
        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    });

    // getRole()
    it("Get employee role", () => {
        const employee = new Employee("Josefa", 23,"Josefa07@gmail.com");
        expect(employee.getRole()).toEqual("Employee");
    });
});