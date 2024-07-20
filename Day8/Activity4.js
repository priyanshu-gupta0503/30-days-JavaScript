// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of
// calling this function with and without the second parameter.

const arr=(a,b=1)=>(a*b)
let  result=arr(5)
console.log(result);
result=arr(5,2)
console.log(result);

