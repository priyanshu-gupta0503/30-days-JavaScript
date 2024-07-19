// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
const book= 
{
    Title:"Rich Dad Poor Dad",
    Author:" Robert Kiyosaki",
    Year:"1997",
    Print : function()
    {
        console.log(`The title of the book is ${this.Title} and the author of the book is ${this.Author}`);
    }
};



for (let property in book) {
    
    console.log(`${property}: ${book[property]}`);
}

    




// • Task 9: Use Object. keys and Object. values methods to log all the keys and values of the book object.

console.log(Object.keys(book));
console.log(Object.values(book));