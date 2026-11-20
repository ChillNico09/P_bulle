// @ts-check

/**
 * Exécute un callback après un délai.
 * @param {*} callback Le callback
 * @param {*} delay Le délai en millisecondes
 */
export function runLater(callback, delay) {
  setTimeout(callback, delay);
}

/**
 * Transmet un message à un callback après un délai.
 * @param {*} message Le message
 * @param {*} delay Le délai en millisecondes
 * @param {*} callback Le callback
 */
export function sendSignal(message, delay, callback) {
  setTimeout(callback, delay, message)
}

/**
 * Double une valeur puis la transmet à un callback après un délai.
 * @param {*} value La valeur à multiplier
 * @param {*} delay Le délai en millisecondes
 * @param {*} callback Le callback
 */
export function doubleLater(value, delay, callback) {
  value*=2;
  setTimeout(callback, delay, value);
}

/**
 * Construit un statut puis le transmet après un délai.
 * @param {*} name Le nom du statut à transmettre
 * @param {*} delay Le délai en millisecondes
 * @param {*} callback Le callback
 */
export function delayedStatus(name, delay, callback) {
  name += " prêt"
  setTimeout(callback, delay, name)
}
