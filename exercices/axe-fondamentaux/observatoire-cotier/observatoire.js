// @ts-check 16:15

/**
 * Retourne le type JavaScript de la donnée.
 * @param {*} value Valeur à vérifier
 * @returns Le type JavaScript de value
 */
export function dataType(value) {
  return typeof value;
}

/**
 * Indique si le comptage vaut undefined.
 * @param {*} count Valeur à vérifier
 * @returns {boolean} Si count vaut undefined
 */
export function isNotTransmitted(count) {
  return count === undefined;
}

/**
 * Indique si le comptage vaut null.
 * @param {*} count Valeur à vérifier
 * @returns {boolean} Si count vaut null
 */
export function isOffline(count) {
  return count === null;
}

/**
 * Indique si un comptage est disponible, c'est-à-dire
 * différent de undefined et de null.
 * @param {*} count Valeur à vérifier
 * @returns {boolean} Si count est disponible
 */
export function hasBirdCount(count) {
  return isOffline(count) == isNotTransmitted(count);
}

/**
 * Additionne les deux comptages.
 * Un comptage indisponible compte pour 0.
 * @param {*} northCount La valeur nord
 * @param {*} southCount La valeur sud
 * @returns La valeur de l'addition des 2 valeurs
 */
export function totalBirds(northCount, southCount) {
  isNotTransmitted(northCount) ? northCount = 0 : false;
  isOffline(northCount) ? northCount = 0 : false;
  isNotTransmitted(southCount) ? southCount = 0 : false;
  isOffline(southCount) ? southCount = 0 : false;
  return northCount + southCount;
}

/**
 * Indique si la hauteur est de type number et n'est pas NaN.
 * @param {*} height Valeur à vérifier
 * @returns Si height est de type number et n'est pas NaN
 */
export function isValidWaveHeight(height) {
  return dataType(height) == 'number' && !isNaN(height) ? true : false;
}
