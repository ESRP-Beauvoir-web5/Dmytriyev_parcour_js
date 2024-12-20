/* === Exo7 ===
 *
 * Dans la fonction ci-dessous, le paramètre str est une chaîne de caractères.
 * Retourner l'extension de fichier contenue dans cette String.
 *
 * Par exemple :
 * - index.html : 'html'
 * - app.min.js : 'js'
 * - .eslintrc : 'eslintrc'
 * - truc : false
 */

function getExtension(str) {
    if (typeof str!=='string' || str.indexOf('.') === -1) {
        return false;
    }
    return str.split('.').pop();
}
getExtension();

// Stop ! Tests, on ne touche pas :P
check.exo7(getExtension);