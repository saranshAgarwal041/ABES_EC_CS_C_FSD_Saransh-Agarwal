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

console.log(student.name);      
console.log(student['name']);
let x="name";
console.log(student[x]);
function modifyStudent(obj){
    obj.name="ABC";
}
modifyStudent(student);
console.log(student.name);
console.log(student['name']);
