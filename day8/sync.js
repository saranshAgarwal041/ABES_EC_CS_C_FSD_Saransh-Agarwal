console.log("start");
const syncFun=()=>{
 for(let i=0;i<=90;i++){
    console.log(i)
 }
}
const waitForSomeTime=(ms)=>{
    const start=Date.now();
    while(Date.now()-start<ms){
   //do nothing
    }
}
const syncusingTimer=()=>{
    waitForSomeTime(3000);
console.log("wait has been completd");
}
syncusingTimer();
// console.log(syncFun());
console.log("end");

const asyncUsingTimer=()=>{
    setTimeout(()=>{
        console.log("inside set Timeout");
    },3000)
}
console.log("start");
syncusingTimer();
asyncUsingTimer();
console.log("end");