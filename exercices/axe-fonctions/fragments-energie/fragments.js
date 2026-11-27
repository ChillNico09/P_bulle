// @ts-check

/**
 * Additionne un nombre variable de fragments d'énergie.
 * @param  {...number} fragments La liste des fragments
 * @returns La valeur du fragment au complet
 */
export function sumFragments(...fragments) {
  let totalFragment = 0;
  for (const element of fragments) {
    totalFragment += element;
  }
  return totalFragment;
}

/**
 * Compte le nombre de fragments reçus.
 * @param  {...number} fragments La liste des fragments
 * @returns Le nombre de fragment
 */
export function countFragments(...fragments) {
  return fragments.length;
}

/**
 * Calcule la moyenne des fragments reçus.
 * @param  {...number} fragments La liste des fragments
 * @returns la moyebbe des fragments
 */
export function averageFragments(...fragments) {
  return sumFragments(...fragments) /  countFragments(...fragments);
}

/**
 * Ajoute la somme des fragments à une valeur de base.
 * @param {number} base La valeur de base
 * @param  {...number} fragments La liste des fragments
 * @returns La somme de l'additions de la base et des fragments
 */
export function totalWithBase(base, ...fragments) {
  return base + sumFragments(...fragments);
}

/**
 * Construit un libellé indiquant le nombre de valeurs.
 * @param {string} name Le nom
 * @param  {...number} values La liste des fragments
 * @returns Un libellé indiquant le nombre de valeurs
 */
export function formulaLabel(name, ...values) {
  return `${name} : ${countFragments(...values)} valeurs`;
}

/**
 * Prépare un résumé contenant la somme des valeurs.
 * @param {string} name Le nom
 * @param  {...number} values La liste des fragments
 * @returns Le résumé de la somme des valeurs
 */
export function prepareMixture(name, ...values) {
  return `${name} = ${sumFragments(...values)}`;
}
