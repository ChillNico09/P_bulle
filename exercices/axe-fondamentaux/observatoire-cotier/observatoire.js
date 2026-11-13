// @ts-check 16:15

/**
 * Retourne le type JavaScript de la donnée.
 */
export function dataType(value) {
  return typeof value;
}

/**
 * Indique si le comptage vaut undefined.
 */
export function isNotTransmitted(count) {
  return count === undefined;
}

/**
 * Indique si le comptage vaut null.
 */
export function isOffline(count) {
  return count === null;
}

/**
 * Indique si un comptage est disponible, c'est-à-dire
 * différent de undefined et de null.
 */
export function hasBirdCount(count) {
  return isOffline(count) == isNotTransmitted(count);
}

/**
 * Additionne les deux comptages.
 * Un comptage indisponible compte pour 0.
 */
export function totalBirds(northCount, southCount) {
  return northCount + southCount;
  // TODO
}

/**
 * Indique si la hauteur est de type number et n'est pas NaN.
 */
export function isValidWaveHeight(height) {
  // TODO
}
