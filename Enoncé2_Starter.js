class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: Définir la méthode `addFavoriteBook(..)`
	// et `printFavoriteBooks()`
}

function addFavoriteBook(bookName) {
	if (!bookName.includes("Great")) {
		favoriteBooks.push(bookName);
	}
}

function printFavoriteBooks() {
	console.log(`Favorite Books: ${favoriteBooks.length}`);
	for (let bookName of favoriteBooks) {
		console.log(bookName);
	}
}

function loadBooks( /* .. */ ) {
	// TODO: appeler fakeAjax( .. );
}

var BOOK_API = "https://fake.url/api";


// ***********************

// NOTE: Ne modifie pas cette fonction
function fakeAjax(url, cb) {
	setTimeout(function fakeLoadingDelay() {
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	}, 500);
}