// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const function1=()=>(console.log("Hi my name is Priyanshu"))
const function2=(a)=>{
    for(let i=0;i<a;i++)
    {
        function1()
    }
}
function2(4)


// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function
// to the result.
 function funct1(value)
{
    console.log(value*value);
    return(value*value)
}
function funct2(value)
{
    console.log(value);
}
function funct3(f1,f2,value)
{
    let tmp=f1(value)
    f2(tmp)
}
funct3(funct1,funct2,2)