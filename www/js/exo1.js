/* === Exo1 ===
 *
 * 1. Demander à l'utilisateur de rentrer un premier nombre dans une boîte de dialogue.
 * 2. Demander à l'utilisateur de rentrer un 2e nombre dans une boîte de dialogue.
 * 3. Additionner les deux nombres.
 * 4. Afficher le résultat dans #result.
 */
let premierNumbre = prompt("entres premier nobre:\n");
let deuxiemeNumbre = prompt("entres deuxieme nombre:\n");
let resultat = parseFloat(premierNumbre) + parseFloat(deuxiemeNumbre);
document.getElementById("result").textContent = "Le resultat est: " + resultat;


