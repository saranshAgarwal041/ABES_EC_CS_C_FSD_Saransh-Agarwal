const sum=(...args)=>{
    console.log(args);
    let sum =0;
    args.forEach(
        (ele)=>{
            sum+=ele;
           
        }
    )
    return sum;
}
 const output=sum(1,2,3,4,5,6,7,8,9);
 console.log(output);
 const isdiv=(...args)=>{
    console.log(args);
    let arr =[];
    args.forEach(
        (ele)=>{
           if((ele%2)==0){
            arr.push(ele);
           }
           
        }
    )
    return arr;
}
const divisiblebytwo=isdiv(1,2,3,4,5,6,7,8,9);
console.log(divisiblebytwo);