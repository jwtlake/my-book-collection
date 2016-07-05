// es6 imports also supported 
//import { Library, Book } from 'simple-book-library';

var simple = require('simple-book-library');

// create new library (numbOfShelves, numbOfSlots)
var MyLibrary = new simple.Library(10,5);

// if you want to dissable passive console.logs on library actions
//MyLibrary.logPassiveOutput = false; 

//output library
MyLibrary.render();

// create some books (name)
var book1 = new simple.Book('A Game of Thrones');
var book2 = new simple.Book('A Clash of Kings');
var book3 = new simple.Book('A Storm of Swords');

//put the books in the library (Book, shelfNumb, rowNumber)
MyLibrary.shelf(book1,11,1) // out of bounds
MyLibrary.shelf(book1,1,5) // out of bounds
MyLibrary.shelf(book1,1,4); // valid
MyLibrary.shelf(book2,2,1); // valid
MyLibrary.shelf(book3,1,4); // occupied

//move book
var bookInHand = MyLibrary.unshelf(1,4);
MyLibrary.shelf(bookInHand,2,4);

//try again
MyLibrary.shelf(book3,1,4); // valid

//output library
MyLibrary.render();
