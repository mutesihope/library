const {add,displayBooks,updateBooks,updateAllBooks,removeAllBooks} = require("./controller.js");

var addition = {
     title: 'The power of silence',
     author: 'Tesy the great',
     year: 40 
};
const update = {
    id: 1,
    title: 'The morning stars',
    author: 'Hope K',
    year: 2

};

const updateMe = {
    id: 2,
    title: 'Open mind',
    author: 'Hope K',
    year: 2
};
const removeAll ={
    id: 5,
}
add(addition);
displayBooks();
updateBooks(update);
updateAllBooks(updateMe);
removeAllBooks(removeAll);