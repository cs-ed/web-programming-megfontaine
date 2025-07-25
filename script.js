const verbs = ["skankin", "rankin", "vibin", "jumpin", "leapin", "rockin", "sleepin", "boppin", "slippin", "barkin", 
           "fightin", "yellin", "smellin", "skippin", "screechin"];
const nouns = ["pickle", "weasel", "zebras", "muskrats", "walruses", "puppies", "kittens", "lions", "tigers", "parrots",
           "giblets", "skunks", "bunnies", "gummies", "dolphins", "grannies", "lads", "lassies", "lizards", "sharks"];
prev_names = [];

function skaBandPlease() {
  let randIndex1 = Math.floor(Math.random() * verbs.length);
  let randIndex2 = Math.floor(Math.random() * nouns.length);
  let name = verbs[randIndex1] + " " + nouns[randIndex2];
  while (prev_names.includes(name)) {
           randIndex1 = Math.floor(Math.random() * verbs.length);
           randIndex2 = Math.floor(Math.random() * nouns.length);
           name = verbs[randIndex1] + " " + nouns[randIndex2];
  }
  prev_names.push(name);        
  document.getElementById("band_name").innerHTML = name;
};

function horiscope() {
           let user_sign = document.getElementById("sign").value.toLowerCase();
           let horiscope;
           if (user_sign === "capricorn") { horiscope = "You're stubborn as a goat";}
           else if (user_sign === "aquarius") { horiscope = "Just go with the flow, bro";}
           else if (user_sign === "pisces") { horiscope = "Something's fishy...";}
           else if (user_sign === "aries") { horiscope = "Don't act all sheepish";}
           else if (user_sign === "tarus") { horiscope = "No bull";}
           else if (user_sign === "gemini") { horiscope = "Twinning!";}
           else if (user_sign === "cancer") { horiscope = "Why so crabby?";}
           else if (user_sign === "leo") { horiscope = "You ain't gotta lion to kick it";}
           else if (user_sign === "virgo") { horiscope = "Heck of a gal";}
           else if (user_sign === "libra") { horiscope = "Keep it level";}
           else if (user_sign === "scorpio") { horiscope = "Always check your boots before you put 'em on";}
           else if (user_sign === "saggitarius") { horiscope = "Bullseye";}
           else { horiscope = "Whatever you say...";}
           document.getElementById("your_horiscope").innerHTML = horiscope;
};

window.onload = function() {
  //What should we do when the page first loads?
  skaBandPlease();
};

document.getElementById("I need a 90s SKA Band Name!").addEventListener("click", skaBandPlease);

document.getElementById("enter_sign").addEventListener("click", horiscope);


