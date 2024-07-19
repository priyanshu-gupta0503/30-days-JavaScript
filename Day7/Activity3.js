// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the
// console.
const library=[
{
    Bookname:"Rich Dad Poor Dad",
    Author:" Robert Kiyosaki"
},
{
     Bookname:"Merchant of Venice",
     Author:" William Shakespeare "
},
{
      Bookname:"The Girl In Room 107",
      Author:"Chetan Bhagat"
}]


console.log(library);


// • Task 6: Access and log the name of the library and the titles of all the books in the library.
library.forEach(element => {
    console.log(element.Bookname);
    
});