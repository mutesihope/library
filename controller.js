// ADD,DISPLAY,UPDATE,DELETE
const {booksDatabase}=require("./db.js");


const add = (addBook)=>{
    addBook.id = booksDatabase.length+1;
    booksDatabase.push(addBook);
}
console.log(booksDatabase);

// displayBooks

const displayBooks = ()=>{
    console.log(booksDatabase);
}


// updateBooks

const updateBooks = (id,updateBook)=>{
    for(let i=0;i<booksDatabase.length;i++){
        if(booksDatabase[i].id===id){
            booksDatabase[i]=updateBook;
        }
    }
    console.log("Updated books database");
    console.log(booksDatabase);
}
// updateAllBooks

const updateAllBooks = (library)=>{
    for(let i=0;i<booksDatabase.length;i++){
        booksDatabase[i]=library;
    }
    console.log("library updated");
    console.log(booksDatabase);
}
const removeAllBooks= (library)=>{
    for(let i=0;i<booksDatabase.length;i++){
        booksDatabase[i]=library;
    }
    console.log("library removed");
    console.log(booksDatabase);

}
module.exports = {add,displayBooks,updateBooks,updateAllBooks};

