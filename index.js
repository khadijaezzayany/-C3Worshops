// Enoncé1 & 1/2 de Enoncé 2:
var favoriteBooks = ["ali", "adam", "tasnim"];
class bookshelf {
    constructor() {
        this.addFavoriteBook();
        this.printFavoritBooks();
    }
    addFavoriteBook(bookName) {
        var bookName = favoriteBooks.includes("Great");
        if (bookName == true) {
            console.log(favoriteBooks);
        } else {
            favoriteBooks.push("Great");
            console.log(favoriteBooks);
        }
    }
        printFavoritBooks(){
            for (let value of favoriteBooks) {
                console.log(value);
            }
            var x = favoriteBooks.length;
            console.log("Livres favoris :" + " " + x);
        
    }}
    window.onload = new bookshelf();

    // Enoncé 3:
    function nextInLine(arr,item){
        arr.push(item);
        return arr.shift();
    }
    // Enoncé 4: