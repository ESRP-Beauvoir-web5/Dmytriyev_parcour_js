/* === Exo8 ===
 *
 * Dans la fonction ci-dessous, le paramètre arr est un tableau.
 * Retourner la chaîne de caractères la plus longue de l'Array.
 *
 * Par exemple :
 * - ['coucou', 'hello', 'bonjour'] : 'bonjour'
 * - ['css', 'html', 'js', 'php'] : 'html'
 * - ['un', 2, 'trois', 4, 'cinq'] : 'trois'
 * - [] : false
 */

function getLongestString(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return false;
    }

    let longestString = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] ==='string' && arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }

    return longestString;
}
getLongestString();





// Stop ! Tests, on ne touche pas :P
check.exo8(getLongestString);
