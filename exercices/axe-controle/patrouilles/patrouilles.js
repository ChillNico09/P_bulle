// @ts-check
/**
 * Additionne les numéros de ronde de 1 au nombre indiqué.
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
 */
export function firstRoundAbove(limit) {
  let roundIndex = 0;
  while(sumRounds(roundIndex) < limit){
    roundIndex++;
  }
  let roundNumber = roundIndex + 1;
  return roundNumber;
}
