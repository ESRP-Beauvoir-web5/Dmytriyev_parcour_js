/* === Exo9 ===
 *
 * Dans la fonction ci-dessous, le paramètre arr est un tableau.
 * Retourner la somme des nombres contenus dans cet Array.
 *
 * Par exemple :
 * - [1, 2, 3] : 6
 * - ['un', 2, 'trois', 4, 'cinq'] : 6
 * - [] : 0
 * - [1, [2, 3, [4, 5], 6], 7, [8, 9]] : 45
 */

function sum(arr) {
    if(!Array.isArray(arr)){
        return 0;
    }
    let total = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            total += sum(arr[i]);
        } else if(typeof arr[i] === "number"){
            total += arr[i];
        }
    }
    return total;
}
sum();
// Stop ! Tests, on ne touche pas :P
check.exo9(sum);
