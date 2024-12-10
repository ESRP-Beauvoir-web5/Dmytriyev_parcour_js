/* === Exo4 ===
 *
 * 1. Dans #container, afficher l'heure à la seconde près.
 *    Format d'affichage : 11h 12m 06s
 * 2. À chaque seconde, l'heure doit être actualisée.
 *
 * Astuce : on peut avoir un objet de date en faisant : var now = new Date();
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date
 */

function dateTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    if (minutes<10){minutes = "0" + minutes;}
    let secondes = time.getSeconds();
    if (secondes<10){secondes = "0" + secondes;}
    let affiche = document.getElementById("container");

    affiche.textContent = "Heure actuelle:\n"  + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() ;
}

dateTime();
setInterval(dateTime, 1000);