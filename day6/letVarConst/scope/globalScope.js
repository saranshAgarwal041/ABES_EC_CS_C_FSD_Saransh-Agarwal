var a=20;
let b=30;
const pi=3.14;
console,log("Global scope");
console,log("Value of a in global scope :",a);
console,log("Value of b in global scope :",b);
console,log("Value of pi in global scope :",pi);
function callValues(a,b,pi){
    console,log("Inside function :");
    console,log("Value of a inside the function :",a);
    console,log("Value of b inside the function :",b);
    console,log("Value of pi inside the function :",pi);
}
callValues(a,b,pi);
