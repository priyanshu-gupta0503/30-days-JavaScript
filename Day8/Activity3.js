// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to
// the console.
const arr=["Priyanshu","Akash","Monoj"]
const arr2=["Sinhchan"]
const arr3=[...arr,...arr2,"rao"]
console.log(arr3);


// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

const spread=(...num)=>{
    let sum =0;
    for (let index = 0; index < num.length; index++) {
    
    sum =sum + num[index];
     
}
return sum};

const result=spread(1,2,3)
 console.log(result);