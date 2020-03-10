## Enoncée
Le code de cet exercice peut être exécuté via Node.js ou dans l'onglet "console" des outils de développement de votre navigateur.

1. Définissez une fonction `addFavoriteBook(..)` qui reçoit un seul paramètre, appelé `bookName`.

2. Si la chaîne `bookName` fournie ne contient *PAS* le mot "Great", ajoutez-la au tableau `favoriteBooks`.

Conseils :

	- `someString.includes(anotherString)` renverra `true` si `anotherString` est trouvé dans `someString`, ou `false` sinon.

	- Utilisez `!` pour annuler une valeur booléenne (changez `true` en `false` ou vice versa).

	- `someArray.push(value)` ajoutera une valeur à la fin du tableau.

3. Définissez une fonction `printFavoriteBooks()` qui ne reçoit aucun paramètre.

4. La fonction `printFavoriteBooks()` doit d'abord imprimer un message comme "Livres favoris : ..", et inclure le nombre de livres dans le tableau `favoriteBooks`.

	Indice :


	- Utilisez `console.log(..)` pour imprimer un message à l'écran.

5. Enfin, `printFavoriteBooks()` devrait boucler le tableau `favoriteBooks` et imprimer chaque valeur.

	Assurez-vous d'appeler ensuite la fonction `printFavoriteBooks()` à la fin du programme.

	Astuce : Utilisez la boucle de style `for ( let .. of .. ) { }`.
### Enoncée 2
Cet exercice vise à mettre brièvement en pratique les trois piliers de JS : Types / Coercion, Scope / Closures, et `this`.

1. Dans la fonction `printFavoriteBooks()`, assurez-vous qu'il n'y a pas de conversion de type accidentelle (c'est-à-dire de nombre en chaîne de caractères).

	Astuce : Utilisez `String(..)` pour forcer quelque chose à un type de chaîne de caractères.

2. Déplacez les fonctions `addFavoriteBook(..)` et `printFavoriteBooks()` dans la classe `Bookshelf` comme méthodes. Modifiez-les pour qu'elles utilisent le mot-clé "this" pour accéder au tableau des "FavoriteBooks".

	Astuce : les méthodes de la classe n'utilisent pas le mot-clé "function", mais seulement leur nom.

3. Remplissez la définition de la fonction `loadBooks(..)`, qui devrait recevoir une instance de la classe `Bookshelf` que vous lui passerez.

4. La fonction `loadBooks(..)` devrait appeler le `fakeAjax(..)` fourni, en utilisant `BOOK_API` comme URL et une expression de fonction en ligne comme callback.

5. Le callback se verra passer un tableau de noms de livres. Bouclez ce tableau, en passant chaque nom de livre à la méthode `addFavoriteBook(..)` de l'instance `Bookshelf` passée à `loadBooks(..)`. Ensuite, appelez la méthode `printFavoriteBooks()`.

6. Créez une instance de la classe `Bookshelf`, et passez-la en argument à `loadBooks(..)`.

	Astuce : instanciation de la classe : `new Whatever()`.
