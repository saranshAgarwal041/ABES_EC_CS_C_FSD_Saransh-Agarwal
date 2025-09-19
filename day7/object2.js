const student = {
    name: "xyz",
    course: "Btech",
    branch: "CS",
    section: "C",
    phoneNo: {
        phoneNo1: 9389285223,
        phoneNo2: 7017395518
    },
    address: {
        hno: 23,
        street: "abc",
        city: "ghaziabad",
        state: "UP"
    }
};
console.log("Before modification",student.section);
console.log("Before modification",student.address.city);
const newStudent=object.assign({},student);
console.log(newStudent);
newStudent.section="A";
newStudent.address.city="noida";