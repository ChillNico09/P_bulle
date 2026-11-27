// @ts-check

/**
 * @param {any} value Valeur qu'on veut typer
 * @returns Retourne le type JavaScript de la valeur.
 */
export function valueType(value) {
  return typeof value;
}

/**
 * @param {any} value Valeur à vérifier
 * @returns {boolean} Indique si la valeur est undefined.
 */
export function isUndefined(value) {
  return value === undefined;
}

/**
 * @param {any} value Valeur à vérifier
 * @returns {boolean} Indique si la valeur est null.
 */
export function isNull(value) {
  return value === null;
}

/**
 * @param {any} value Valeur à vérifier
 * @returns {boolean} Indique si une valeur est connue, c'est-à-dire différente de undefined et de null.
 */
export function hasKnownValue(value) {
  return isUndefined(value) == isNull(value);
}

/**
 * @param {number} energy Énergie à comparer avec le minmum
 * @param {number} minimumEnergy Énergie minimum à comparer avec l'énergie
 * @returns Compare l'énergie disponible à l'énergie minimale. Les deux valeurs sont converties en nombres.
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  return Number(energy) >= Number(minimumEnergy);
}

/**
 * @param {string} zone Nom de la zone
 * @param {string} expectedZone Nom de la zone attendue
 * @returns {boolean} Compare strictement le nom de la zone attendue.
 */
export function isCorrectZone(zone, expectedZone) {
  return zone === expectedZone;
}
