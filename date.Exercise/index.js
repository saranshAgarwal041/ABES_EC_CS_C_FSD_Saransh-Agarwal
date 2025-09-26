const callbackFun = () => {
    const inputDOB = document.getElementById("dob").value;
    const output = document.getElementById("output");

    const currentdate = new Date();
    const userDate = new Date(inputDOB); 

    const currrentDateInYear = currentdate.getFullYear();
    const currrentDateInMonth = currentdate.getMonth();

    const userdateInYear = userDate.getFullYear();
    const usertDateInMonth = userDate.getMonth();

    let age = currrentDateInYear - userdateInYear;
    let ageInMonth = currrentDateInMonth - usertDateInMonth; 
    if (currrentDateInMonth < usertDateInMonth) age--;
    if (ageInMonth < 0) ageInMonth += 12;
    output.innerText = `user's Age is ${age} Year and ${ageInMonth} Months`; 
};
const btn = document.getElementById("btn");
btn.addEventListener("click", callbackFun);
