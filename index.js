 function addFavoriteBook(bookName) {
     bookName = ["ali", "adam", "tasnim"];
     var book = bookName.includes("Great");
     if (book == true) {
         console.log(bookName);
     } else {
         bookName.push("Great");
         console.log(bookName);
     }

     function printFavoritBooks() {
         for (let value of bookName) {
             console.log(value);
         }
         var x = bookName.length;
         console.log("Livres favoris :" + " " + x);
     }
     printFavoritBooks()
 }
 addFavoriteBook()