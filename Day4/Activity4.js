// • Task 7: Write a program to print a pattern using nested for loops:
// *
// **
// ***
// ****
let str= "";

for (let i=1;i<=4;i++)
{
    for(let j=1;j<=i;j++)
    {
       str=str.concat(" *") 
    }
    console.log(str.trim());
    str="";
}
