console.log("hello mansion");

// Selecteer de knoppen en het muntjes element
const startButton = document.querySelector("#begin");
const bankButton = document.querySelector("#bank");
const tafelButton = document.querySelector("#tafel");
const vloerButton = document.querySelector("#vloer");
const behangButton = document.querySelector("#behang");
const werkButton = document.querySelector("#work");
const audio = new Audio("audio/271141__strange_dragoon__building-placing.mp3");
const restartButton = document.querySelector("#opnieuw");

const geldMunt = document.querySelector("#muntjes");
const bericht = document.querySelector("#tekstje");

//bankrekening
let muntjes = 255;

function veranderBericht() {
  //Over of onder een bepaalde waarde van de muntjes pas ik een tekstje aan
  if (muntjes >= 500) {
    bericht.textContent = "Je hebt 500 muntjes aan salaris verdiend!";
    bericht.style.color = "#109010";
  } else if (muntjes <= 0) {
    bericht.textContent =
      "Oh nee! Je geld is op. Ga werken om bij te verdienen";
    bericht.style.color = "red";
  } else {
    bericht.textContent = "Knap je huis op!";
    bericht.style.color = "black";
  }
}

// Functie om de afbeelding en het geldbedrag te veranderen
function veranderAfbeelding(afbeelding, kosten) {
  //bron chatgpt prompt: hoe kan ik parameters gebruiken om dit efficient te maken?
  let basisImage = document.querySelector("#imageMansion"); //basis afbeelding aangeroepen van html
  basisImage.src = afbeelding; // Verander de bron van de afbeelding
  muntjes = muntjes - kosten; //kosten van bankrekening aftrekken
  geldMunt.textContent = muntjes; // Veranderd de tekst van het muntjes element

  //Speelt audio per klik van een knop
  audio.play(); //Bron: MDN en chatbot prompt: hoe kan ik audio toevoegen in mijn javascript? 
  veranderBericht(); //Past het bericht aan op basis van nieuwe waarde muntjes
}

function nieuwGeld() {
  muntjes = muntjes + 500; // Verhoog de huidige muntjes met 500
  geldMunt.textContent = muntjes; // Update de tekst van het muntjes element
  veranderBericht(); //Past het bericht aan op basis van nieuwe waarde muntjes
  restartButton.style.display = "inline";
}

function verbergKnoppen() {
  //Pien heeft me tips gegeven voor de displays van de button
  //Deze functie verbergt de knoppen bij het starten van de pagina
  bankButton.style.display = "none";
  tafelButton.style.display = "none";
  vloerButton.style.display = "none";
  behangButton.style.display = "none";
  werkButton.style.display = "none";
  startButton.style.display = "inline";
  restartButton.style.display = "none";
}

verbergKnoppen();

function toonEersteKnoppen() {
  bankButton.style.display = "inline";
  werkButton.style.display = "inline";
  startButton.style.display = "none";

  bericht.textContent = "Knap je huis op!";
  bericht.style.color = "black";
  
  let basisImage = document.querySelector("#imageMansion");
  basisImage.src = "images/mansion.jpg";
}

restartButton.addEventListener("click", verbergKnoppen);
startButton.addEventListener("click", toonEersteKnoppen);
werkButton.addEventListener("click", nieuwGeld);

// Voeg event listeners toe aan de knoppen en roep de functie aan met specifieke argumenten
bankButton.addEventListener("click", function () {
  veranderAfbeelding("images/mansion_newcouch.png", 60); 
  //hulp van een bron: chatgpt, prompt: hoe kan ik parameters gebruiken om dit efficient te maken?
  bankButton.style.display = "none";
  tafelButton.style.display = "inline";
});

tafelButton.addEventListener("click", function () {
  veranderAfbeelding("images/newtable.png", 100);
  tafelButton.style.display = "none";
  vloerButton.style.display = "inline";
});

vloerButton.addEventListener("click", function () {
  veranderAfbeelding("images/new_floor.png", 15);
  vloerButton.style.display = "none";
  behangButton.style.display = "inline";
});

behangButton.addEventListener("click", function () {
  veranderAfbeelding("images/new_wallpaper.png", 80);
  behangButton.style.display = "none";
});

geldMunt.textContent = muntjes;
//geldMunt.textContent = muntjes.toString(); --> Walter neergezet
