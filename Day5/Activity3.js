// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = function(a,b)
{
  const result=a+b;
  return result;
}
const result=sum(1,2)
console.log(result);
//or
const sum1 = (a,b)=>(a+b)
console.log(sum1(1,2));


// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const check=(str="",char)=>
{
    if(str.includes(char))
        return true
    return false
}
console.log(check("Aish","e"));