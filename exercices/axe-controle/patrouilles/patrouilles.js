// @ts-check
/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
 * @param {number} numberOfRounds Le nombre de ronde
 * @returns La somme des numéros de ronde
 */
export function sumRounds(numberOfRounds) {
  let total = 0;
  for (let index = 0; index <= numberOfRounds; index++) {
    total += index;
  }
  return total;
}

/**
 * Compte le nombre de caractères d'un code.
 * @param {string} code Le code à compter ses caractères
 * @returns Le nombre de caractères du code
 */
export function countSymbols(code) {
  let totalCharacters = 0;
  for(let letter of code){
    totalCharacters++;
  }
  return totalCharacters;
}

/**
 * Compte le nombre de caractères `X` dans un code.
 * @param {string} code Le code à compter ses 'X'
 * @returns Le nombre de 'X' dans le code
 */
export function countX(code) {
  let totalX = 0;
  for(let letter of code){
    (letter == 'X')? totalX++ : false
  }
  return totalX;
}

/**
 * Calcule le nombre de tours complets possibles avant épuisement de l'énergie.
 * @param {number} energy L'énergie disponible
 * @param {number} consumption La consomation par tour
 * @returns Le nombre de tour possible
 */
export function turnsBeforeEmpty(energy, consumption) {
  let numberTurned = 0;
  while (energy - consumption >= 0) {
    energy -= consumption;
    numberTurned++;
  }
  return numberTurned;
}

/**
 * Retourne la première ronde pour laquelle le total dépasse une limite.
 * @param {number} limit La limite à vérifier
 * @returns Le numéro de la première ronde laquelle le total dépasse la limite.
 */
export function firstRoundAbove(limit) {
  let roundIndex = 0;
  while(sumRounds(roundIndex) < limit){
    roundIndex++;
  }
  let roundNumber = roundIndex + 1;
  return roundNumber;
}
