// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
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


// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

book.Update=function(year)
{
   this.Year=year
}
book.Update("2001")

console.log(book);