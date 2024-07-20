// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const arr=[1,2,3,4,5,6,7,8]
const [one,two,...three]=arr;
console.log(one);
console.log(two);
console.log(three);

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

const book={
    title:"Jack and Jones",
    author:"Arjun Gupta",
    price:123,
    year:1997
   
}

// const {title}=book;
// const {author}=book;
const{title,...price} =book;
console.log(title);
console.log(price);

// console.log(author);
// console.log(book);
// console.log(b);
// console.log(c);