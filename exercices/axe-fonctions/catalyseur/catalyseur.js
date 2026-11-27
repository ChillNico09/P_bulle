// @ts-check

/**
 * Double une charge.
 * @param {number} charge La valeur de la charge
 * @returns Le double de charge
 */
export function doubleCharge(charge) {
  return charge*2;
}

/**
 * Calcule une puissance à partir d'une base et d'un multiplicateur.
 * @param {number} base La valeur de base
 * @param {number} multiplier De combien on doit multiplier
 * @returns La puissance (base * multiplier)
 */
export function forgePower(base, multiplier) {
  return base * multiplier;
}

/**
 * Stabilise une énergie avec un facteur, égal à 2 par défaut.
 * @param {number} energy La valeur de l'energie
 * @param {number} factor De combien on doit multiplier
 * @returns La multiplication de energy avec factor
 */
export function stabilizeEnergy(energy, factor = 2) {
  return energy * factor;
}

/**
 * Construit un message de la Forge.
 * @param {string} element Le nom de l'élement
 * @param {string} prefix Le nom du prefix
 * @returns Le message construit avec element et prefix (ex: "prefix : element")
 */
export function forgeMessage(element, prefix = 'Forge') {
  return `${prefix} : ${element}`;
}

/**
 * Calcule l'énergie restante après une perte.
 * @param {number} energy La valeur de l'énergie
 * @param {number} loss La valeur de la perte
 * @returns La soustraction de energie avec loss
 */
export function calculateOutput(energy, loss) {
  return energy - loss;
}

/**
 * Calcule puis amplifie l'énergie restante.
 * @param {number} energy La valeur de l'energie
 * @param {number} loss La valeur de la perte
 * @param {number} factor De combien on doit multiplier
 * @returns La valeur stabiliser d'une perte d'énergie
 */
export function boostedOutput(energy, loss, factor = 2) {
  return stabilizeEnergy(calculateOutput(energy, loss), factor);
}
