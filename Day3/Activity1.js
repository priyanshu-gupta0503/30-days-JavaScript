// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.


const user= 123;
if(user>0)
{
    console.log(`${user} is Positive`);
}
else if(user<0)
{
     console.log(`${user} is negative`);
}
else if(user==0)
{
    console.log(`${user} is Zer0`);

}
else
{
    console.log("Wrong statement");
}
// • Task 2: Write a program to check if a person is eligible to vote (age 18) and log the result to the console.

const enterAge= 13;

if(enterAge>18)
{
    console.log(`${enterAge} is eligible to vote`);
}
else if(enterAge<18)
{
     console.log(`${enterAge} is not eligible to vote`);
}
else
{
    console.log("Wrong input");
}