window.onload = function() {
  //What should we do when the page first loads?
  let verbs = ["skankin", "rankin", "vibin", "jumpin", "leapin", "rockin", "sleepin", "boppin", "slippin", "barkin", 
           "fightin", "yellin", "smellin", "skippin", "screechin"];
  let nouns = ["pickle", "weasel", "zebras", "muskrats", "walruses", "puppies", "kittens", "lions", "tigers", "parrots",
           "giblets", "skunks", "bunnies", "gummies", "dolphins", "grannies", "lads", "lassies", "lizards"];
  let name = "";

  let randIndex1 = Math.floor((Math.random() * verbs.length));
  let randIndex2 = Math.floor((Math.random() * nouns.length));


  
  document.getElementById("I need a 90s SKA Band Name!").addEventListener("click", function() {
    console.log("Requesting new band name...");});

};
