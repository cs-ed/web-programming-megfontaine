const verbs = ["skankin", "rankin", "vibin", "jumpin", "leapin", "rockin", "sleepin", "boppin", "slippin", "barkin", 
           "fightin", "yellin", "smellin", "skippin", "screechin"];
const nouns = ["pickle", "weasel", "zebras", "muskrats", "walruses", "puppies", "kittens", "lions", "tigers", "parrots",
           "giblets", "skunks", "bunnies", "gummies", "dolphins", "grannies", "lads", "lassies", "lizards"];

function skaBandPlease() {
  let randIndex1 = Math.floor(Math.random() * verbs.length);
  let randIndex2 = Math.floor(Math.random() * nouns.length);
  let name = verbs[randIndex1] + " " + nouns[randIndex2];
  document.getElementById("band_name").innerHTML = name;
};

window.onload = function() {
  //What should we do when the page first loads?
  skaBandPlease();
};

document.getElementById("I need a 90s SKA Band Name!").addEventListener("click", skaBandPlease);


