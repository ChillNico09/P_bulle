// @ts-check

/**
 * Valide une quantité d'énergie.
 * @param {number} energy Valeur à vérifier
 * @returns La valeur de energy
 */
export function validateEnergy(energy) {
  try{
    if(energy < 0) throw energy;
    return energy;
  }
  catch(err){
    throw new Error('Énergie invalide');
  }
}

/**
 * Vérifie une énergie sans propager l'exception.
 * @param {number} energy Valeur à vérifier
 * @returns Si l'énergie est valide ou non
 */
export function safeEnergyCheck(energy) {
  try{
    validateEnergy(energy);
    return "Énergie valide";
  }
  catch{
    return "Énergie invalide";
  }
}

/**
 * Valide un code de porte autorisé.
 * @param {string} code Valeur à vérifier
 * @returns Le code Ex: "ALPHA"
 */
export function validateGateCode(code) {
  switch(code){
    case "ALPHA":
        return code;
      case "BETA":
        return code;
      case "OMEGA":
        return code;
      default:
        throw new Error("Code inconnu");
  }
}

/**
 * Vérifie un code de porte sans propager l'exception.
 * @param {string} code Valeur à vérifier
 * @returns Si le code est accepté ou refusé
 */
export function safeGateCheck(code) {
  try{
    validateGateCode(code);
    return "Code accepté";
  }
  catch{
    return "Code refusé";
  }
}

/**
 * Compte les tentatives valides représentées par `A` ou `B`.
 * @param {string} text Valeur à vérifier
 * @returns La somme de 'A' et de 'B' dans text
 */
export function countValidAttempts(text) {
  let validCount = 0;
  for (const letter of text) {
      try{
        if(letter === 'A' || letter === 'B') validCount++;
      }
      catch{}
  }
  return validCount;
}

/**
 * Compte les tentatives effectuées jusqu'au troisième `X` ou à la fin.
 * @param {string} sequence Valeur à vérifier
 * @returns La somme des lettres valides + le nombre d'erreur avant que ça soit verrouiller.
 */
export function attemptsBeforeLock(sequence) {
  let numberLetterValid = 0;
  let numberErrors = 0;
  for (const letter of sequence) {
    try{
      if(numberErrors >= 3) throw "Plus d'essais"
      if(letter === 'X') numberErrors++;
      if(letter === 'V') numberLetterValid++;
    }
    catch{
      
    }
  }
  return numberErrors + numberLetterValid;
}
