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