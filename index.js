//  var bookName = ["ali", "adam", "tasnim"];

class bookshelf {
    constructor() {
        this.addFavoriteBook();
        this.printFavoritBooks();
    }
    addFavoriteBook(bookName) {
        bookName = ["ali", "adam", "tasnim"];
        var book = bookName.includes("Great");
        if (book == true) {
            console.log(bookName);
        } else {
            bookName.push("Great");
            console.log(bookName);
        }

    }
    printFavoritBooks(bookName) {
        bookName = ["ali", "adam", "tasnim"];
        for (let value of bookName) {
            console.log(value);
        }
        var x = bookName.length;
        console.log("Livres favoris :" + " " + x);
    }
}
    window.onload = new bookshelf();

    // function 
    //      function 
    //      printFavoritBooks()
    //  }
    //  addFavoriteBook()