/* === Exo3 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input.
 * 2. Chaque fois qu'on tape au clavier dans l'un des deux inputs,
 *      et si les deux inputs sont remplis,
 *      on additionne les deux nombres.
 * 3. On affiche le résultat dans #result
 */

let numberOne = document.getElementById("input1");
let numberTwo = document.getElementById("input2");
let form = document.querySelector("form");

form.addEventListener("click", addition);

function addition(event) {
    event.preventDefault();
    let nb1 = parseFloat(numberOne.value);
    let nb2 = parseFloat(numberTwo.value);
    let result = nb1 + nb2;

document.getElementById("result").textContent = "Le resultat est: " + result;
}
