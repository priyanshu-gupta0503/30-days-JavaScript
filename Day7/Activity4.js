// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this
// method.

const book= 
{
    Title:"Rich Dad Poor Dad",
    Author:" Robert Kiyosaki",
    Year:"1997",
    Print : function()
    {
        console.log(`The title of the book is ${this.Title} and the authior of the book is ${this.Author}`);
    }
}

book.Print();
