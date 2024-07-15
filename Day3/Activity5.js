// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the
// result to the console.


const userYear = 2024; 
console.log(`Is ${userYear} a leap year `);




if ((userYear % 4 === 0 && userYear % 100 !== 0) || userYear % 400 === 0) {
    
} else {
    console.log(`No  it is not`);
    
}


