// @ts-check 15:12 à 15:26 ||| 16h00 à (20.11.2026)

/**
 * Crée une promesse immédiatement résolue avec un message.
 * @param {*} message Le message à résoudre
 * @returns Le message
 */
export function createSignal(message) {
  return new Promise((resolve) => {
    resolve(message)
  })
}

/**
 * Retourne une valeur après un délai.
 * @param {*} value La valeur à retourner
 * @param {*} delay Le délai en millisecondes
 * @returns value après un délai (delay)
 */
export function delayValue(value, delay) {
  return new Promise((resolve) =>{
    setTimeout(delayValue, delay) ? resolve(value) : false;
  })
}

/**
 * Vérifie un code temporel.
 * @param {*} code Le code
 * @returns Si le code est accepté ou non
 */
export function checkTemporalCode(code) {
  return new Promise((resolve, rejects) => {
    return code === "NYX" ? resolve("Code accepté") : rejects(new Error("Code refusé"));
  })
}

/**
 * Prépare un message à partir d'un signal asynchrone.
 * @param {*} message Le message
 * @returns Retourne "Signal : <message>"
 */
export function prepareMessage(message) {
  return new Promise((resolve) => {
    createSignal(message).then(() => {
      resolve(`Signal : ${message}`)
    })
  })
}

/**
 * Vérifie un code et transforme un rejet en message de refus.
 * @param {*} code Le code
 * @returns Retourne "Code accepté" ou "Code refusé"
 */
export function safeTemporalCode(code) {
  return checkTemporalCode(code).catch(()=>"Code refusé");
}
