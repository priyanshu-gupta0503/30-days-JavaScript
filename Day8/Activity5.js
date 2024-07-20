// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
var name = "Tike"; 
var color = "Black"; 
var age = 7; 
var bark = function(){ 
	console.log("Woof Woof!!"); 
} 
var anotherDog = {name, color, age, bark}; 
anotherDog.bark(); 
console.log(anotherDog);


// • Task 9: Create an object with computed property names based on variables and log the object to the console.\

const property1 = "title";
const property2 = "author";
const property3 = "year";

const book3 = {
    [property1]:"HP 3",
    [property2]:"JK 3",
    [property3]:1999,

    getFullName() {
        return `the name of the book is ${book3.title} and author is ${book3.author}`;
      }
}

console.log(book3.title);
console.log(book3.author);
console.log(book3.year);
console.log(book3.getFullName());