 // Enoncé 4:
 var i = 0;

 function blackJack(carte) {
     switch (carte) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
             i++;
             break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
             i--;
             break;
     }
     var x = 'Hold'
     if (i > 0) {
         x = 'Bet'
     }
     return i + " " + x;
 }
//  blackJack("J");
 console.log(blackJack(0));