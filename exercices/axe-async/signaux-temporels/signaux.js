// @ts-check

/**
 * Exécute un callback après un délai.
 */
export function runLater(callback, delay) {
  setTimeout(callback, delay);
}

/**
 * Transmet un message à un callback après un délai.
 */
export function sendSignal(message, delay, callback) {
  runLater(callback, delay);
  callback(message);
}

/**
 * Double une valeur puis la transmet à un callback après un délai.
 */
export function doubleLater(value, delay, callback) {
  runLater(callback, delay);
  value *= 2;
  callback(value);
}

/**
 * Construit un statut puis le transmet après un délai.
 */
export function delayedStatus(name, delay, callback) {
  runLater(callback, delay);
  callback(`${name} prêt`);
}
