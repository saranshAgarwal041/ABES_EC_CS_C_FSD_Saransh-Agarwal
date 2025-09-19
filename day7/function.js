// function isODD(a){
//     if(a%2!==0){
//         return "value is odd";
//     }
//     else{
//     return "value is even";
// }
// }
// function isODDUsingTernary(a){
//     return a%2!==0?"value is odd":"value is even";
// }
// console.log(isODDUsingTernary,"isODDUsingTernary");
// //function as expression
// let funAsExpression=function isODD(){
//     return a%2!==0?"value is odd":"value is even";
// }
// console.log(funAsExpression());
// console.log("invokation of function",isODDUsingTernary(4));

//arrow function
const arrowFun =(a)=>
     a%2!==0?"value is odd":"value is even";
console.log("output of arrow function",arrowFun(4));
//IIFE function
(function iifeFun(){
    console.log("Inside IIfe function");
})();