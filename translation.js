// Fonction pour changer la langue
function setLanguage(language) {
  // Utilisez le tableau de traduction correspondant à la langue
  terms = translations[language];

  const source = document.getElementById("container").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(terms);
  document.getElementById("container").innerHTML = html;
}

let terms = [];

const translations = {
  fr: {
    firstname: "prénom",
    name: "nom",
    surname: "surnom",
    metatypes: "métatypes",
    attributes: "attributs",
    attributesTitle: "Attributs",
    adjustement: "ajustement",
    skills: "compétences",
    skillsTitle: "Compétences",
    magicOrResonance: "Magie ou Résonance",
    resources: "ressources",
    body: "constitution",
    agility: "agilité",
    reaction: "réaction",
    strength: "force",
    willpower: "volonté",
    logic: "logique",
    intuition: "intuition",
    charisma: "charisme",
    edge: "atout",
    magic: "magie",
    resonance: "résonance",
    identity: "Identité",
    priorityTable: "Table des priorités",
    metatypeChoice: "Choix du métatype",
    specialAttributeChoice: "Choix de l'attribut spécial",
    colons: " :",
    firearms: "armes à feu",
    exoticWeapons: "armes exotiques",
    astral: "astral",
    athletics: "athlétisme",
    biotech: "biotech",
    closeCombat: "combat rapproché",
    conjuring: "invocation",
    electronics: "électronique",
    stealthing: "furtivité",
    influence: "influence",
    enchanting: "enchantement",
    con: "escroquerie",
    engineering: "ingénierie",
    peception: "perception",
    pilot: "pilotage",
    cracking: "piratage",
    outdoors: "plein air",
    sorcery: "sorcellerie",
    tasking: "technomancie",
    fullMagician: "magicien pur",
    mysticAdept: "adepte mystique",
    adept: "adepte",
    aspectedMagicien: "magicien spécialisé",
    technomancer: "technomancien",
    dwarf: "nain",
    ork: "ork",
    elf: "elfe",
    human: "humain",
    troll: "troll",
    duende: "duende",
    gnome: "gnome",
    hanuman: "hanuman",
    koborokuru: "koborokuru",
    menehune: "menehune",
    hobgobelin: "hobgobelin",
    ogre: "ogre",
    oni: "oni",
    satyre: "satyre",
    cyclope: "cyclope",
    fomori: "fomori",
    giant: "géant",
    minotaur: "minotaure",
    dalakitnon: "dalakitnon",
    dryade: "dryade",
    nocturna: "nocturna",
    wakyambi: "wakyambi",
    xapiri_thepe: "xapiri thëpë",
    valkyrie: "valkyrie",
    nartaki: "nartaki",
    centaure: "centaure",
    naga: "naga",
    pixie: "pixie",
    sasquatch: "sasquatch",
    triton: "triton",
    dwarf: "nain",
    ork: "ork",
    elf: "elfe",
    human: "humain",
    troll: "troll",
    duende: "duende",
    gnome: "gnome",
    hanuman: "hanuman",
    koborokuru: "koborokuru",
    menehune: "menehune",
    hobgobelin: "hobgobelin",
    ogre: "ogre",
    oni: "oni",
    satyre: "satyre",
    cyclope: "cyclope",
    fomori: "fomori",
    giant_bio: "plop",
    minotaur: "minotaure",
    dalakitnon: "dalakitnon",
    dryade: "dryade",
    nocturna: "nocturna",
    wakyambi: "wakyambi",
    xapiri_thepe: "xapiri thëpë",
    valkyrie: "valkyrie",
    nartaki: "nartaki",
    centaure: "centaure",
    naga: "naga",
    pixie: "pixie",
    sasquatch: "sasquatch",
    triton: "triton",
  },
  en: {
    firstname: "Firstname",
    name: "Name",
    surname: "Surname",
    metatypes: "Metatypes",
    attributes: "attributes",
    attributesTitle: "Attributes",
    skills: "skills",
    skillsTitle: "Skills",
    magicOrResonance: "Magic or Resonance",
    resources: "Resources",
    body: "Body",
    agility: "Agility",
    reaction: "Reaction",
    strength: "Strength",
    willpower: "Willpower",
    logic: "Logic",
    intuition: "Intuition",
    charisma: "Charisma",
    edge: "Edge",
    magic: "Magic",
    resonance: "Resonance",
    identity: "Identity",
    priorityTable: "Priority Table",
    metatypeChoice: "Metatype Choice",
    specialAttributeChoice: "Special Attribute Choice",
    colons: ":",
    firearms: "firearms",
    exoticWeapons: "exotic weapons",
    astral: "astral",
    athletics: "athletics",
    biotech: "biotech",
    closeCombat: "close combat",
    conjuring: "conjuring",
    electronics: "electronics",
    stealthing: "stealthing",
    influence: "influence",
    enchanting: "enchanting",
    con: "con",
    engineering: "engineering",
    peception: "perception",
    pilot: "pilot",
    cracking: "cracking",
    outdoors: "outdoors",
    sorcery: "sorcery",
    tasking: "tasking",
    fullMagician: "full Magician",
    mysticAdept: "mystic Adept",
    adept: "adept",
    aspectedMagicien: "aspected Magicien",
    technomancer: "technomancer",
    dwarf: "dwarf",
    ork: "ork",
    elf: "elf",
    human: "human",
    troll: "troll",
    duende: "duende",
    gnome: "gnome",
    hanuman: "hanuman",
    koborokuru: "koborokuru",
    menehune: "menehune",
    hobgobelin: "hobgobelin",
    ogre: "ogre",
    oni: "oni",
    satyre: "satyre",
    cyclope: "cyclope",
    fomori: "fomori",
    giant: "géant",
    minotaur: "minotaure",
    dalakitnon: "dalakitnon",
    driad: "dryade",
    nocturna: "nocturna",
    wakyambi: "wakyambi",
    xapiri_thepe: "Xapiri thëpë",
    valkyrie: "valkyrie",
    nartaki: "nartaki",
    centaure: "centaure",
    naga: "naga",
    pixie: "pixie",
    sasquatch: "sasquatch",
    triton: "triton",
  },
};