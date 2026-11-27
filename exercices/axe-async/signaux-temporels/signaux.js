// @ts-check

/**
 * Exécute un callback après un délai.
 * @param {Function} callback Le callback
 * @param {number} delay Le délai en millisecondes
 */
export function runLater(callback, delay) {
  setTimeout(callback, delay);
}

/**
 * Transmet un message à un callback après un délai.
 * @param {string} message Le message
 * @param {number} delay Le délai en millisecondes
 * @param {Function} callback Le callback
 */
export function sendSignal(message, delay, callback) {
  setTimeout(callback, delay, message)
}

/**
 * Double une valeur puis la transmet à un callback après un délai.
 * @param {number} value La valeur à multiplier
 * @param {number} delay Le délai en millisecondes
 * @param {Function} callback Le callback
 */
export function doubleLater(value, delay, callback) {
  value*=2;
  setTimeout(callback, delay, value);
}

/**
 * Construit un statut puis le transmet après un délai.
 * @param {string} name Le nom du statut à transmettre
 * @param {number} delay Le délai en millisecondes
 * @param {Function} callback Le callback
 */
export function delayedStatus(name, delay, callback) {
  name += " prêt"
  setTimeout(callback, delay, name)
}
