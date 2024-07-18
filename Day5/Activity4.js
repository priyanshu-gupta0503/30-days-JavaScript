// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const product=(a,b=0)=>(a*b)
console.log(product(2,3));


// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const chai =  (name,age=30) => {
     let username = "hitesh"
     let age1=age;
    console.log(`Hello ${username} your age is ${age1}`);
}
chai()