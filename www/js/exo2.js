/* === Exo2 ===
 *
 * 1. L'utilisateur tape un nombre dans chaque input, puis clique sur OK.
 * 2. À la soumission du formulaire, on additionne les deux nombres,
 * 3. On affiche le résultat dans #result.
 */
let numberOne = document.getElementById("input1");
let numberTwo = document.getElementById("input2");
let form = document.querySelector("form");

form.addEventListener("submit", addition);

function addition(event) {
    event.preventDefault();
    let nb1 = parseFloat(numberOne.value);
    let nb2 = parseFloat(numberTwo.value);
    let result = nb1 + nb2;

document.getElementById("result").textContent = "Le resultat est: " + result;
}
