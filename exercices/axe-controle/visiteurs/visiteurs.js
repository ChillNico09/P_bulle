// @ts-check

export const UNIVERSITIES = [
  "Académie Babbage",
  "Institut Lovelace",
  "Université Hopper",
  "École Dijkstra",
  "Collège Von Neumann",
];

export const MASTER_REQUIRED = ["Institut Lovelace", "École Dijkstra"];

/**
 * Indique si une université est connue.
 * @param {string} university Le nom de l'université
 * @returns Si l'université se trouve dans UNIVERSITIES
 */
export function isKnownUniversity(university) {
  return university === UNIVERSITIES.find((element) => university === element);
}

/**
 * Convertit un titre en niveau numérique.
 * @param {string} title Le titre du niveau
 * @returns Le niveau du titre (0 si n'y figure pas)
 */
export function titleLevel(title) {
  switch(title){
    case 'Bachelor':
      return 1;
    case 'Master':
      return 2;
    default:
      return 0;
  }
}

/**
 * Indique si une université exige un Master.
 * @param {string} university Le nom de l'université
 * @returns Si l'université se trouve dans MASTER_REQUIRED
 */
export function requiresMaster(university) {
  return university === MASTER_REQUIRED.find((element) => university === element);
}

/**
 * Indique si un visiteur est considéré comme fiable.
 * @param {string} university Le nom de l'université
 * @param {string} title Le titre du niveau
 * @returns Retourne si son titre est reconnu (au moin un bachelor), que son université est reconnu, puis si son titre correspond au titre minimum de son université
 */
export function isTrusted(university, title) {
  return (isKnownUniversity(university) && titleLevel(title) > 0) ? (requiresMaster(university) && title == 'Master') || !requiresMaster(university)
  : false;
}

/**
 * Construit le message d'accueil selon l'université et le titre.
 * @param {string} university Le nom de l'université
 * @param {string} title Le titre du niveau
 * @returns Un message de bienvenue si il est accepté
 */
export function welcomeMessage(university, title) {
  return !isKnownUniversity(university) ? 'Université inconnue'
  : titleLevel(title) == 0 ? 'Titre inconnu'
  : requiresMaster(university) === true && title != 'Master' ? 'Master requis'
  : 'Bienvenue dans la Citadelle';
}

/**
 * Vérifie que tous les visiteurs sont fiables.
 * @param {string} universities La liste des université
 * @param {string} titles La liste des titres
 * @returns Si le groupe est accepté ou non
 */
export function allTrusted(universities, titles) {
  for (let index = 0; index < universities.length; index++) {
    if(!isTrusted(universities[index], titles[index])){
      return false
    }
  }
  return true
}
