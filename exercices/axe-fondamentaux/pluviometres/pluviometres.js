// @ts-check

/**
 * Convertit un relevé en nombre.
 */
export function readRainfall(value) {
  return parseFloat(value);
}

/**
 * Additionne deux relevés après les avoir convertis en nombres.
 */
export function totalRainfall(morning, evening) {
  return parseFloat(morning) + parseFloat(evening);
}

/**
 * Indique si l'heure correspond à un relevé automatique (toutes les 3 heures).
 */
export function isScheduledHour(hour) {
  return (hour % 3 == 0);
}

/**
 * Indique si la conversion du relevé produit NaN.
 */
export function isFaultyReading(value) {
  return isNaN(value);
}

/**
 * Compare strictement deux relevés après conversion en nombres.
 */
export function isConfirmedReading(manual, automatic) {
  return parseFloat(manual) == parseFloat(automatic);
}
