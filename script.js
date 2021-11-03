/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
const LEFT_ARROW = 37
const RIGHT_ARROW = 39
const UP_ARROW = 38
const DOWN_ARROW = 40
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 625; // x-positie van speler
var spelerY = 400; // y-positie van speler
var vijandX = 625;
var vijandY = 50;
var hp = 51; 

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
 vijandY = vijandY + 20;
  // kogel

  // speler

  if (keyIsDown(LEFT_ARROW)) {
    spelerX -= 10;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    spelerX += 10;
  }

  if (keyIsDown(UP_ARROW)) {
    spelerY -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    spelerY += 10;
  }
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  if (spelerX > 1280) {
    spelerX = 1280;
  }
  if (spelerY > 720) {
    spelerY = 720;
  }
  if (spelerX < 0) {
    spelerX = 0;
  }
  if (spelerY < 0) {
    spelerY = 0;
  }
  if (vijandY > 720){
    vijandY = 0;
  }



  // botsing speler tegen vijand
  if (vijandX - spelerX < 50 && 
      vijandX - spelerX > -50) {
    (vijandY - spelerY < 50 && 
    vijandY - spelerY > -50) 
        console.log("geraakt")
    }
  
  

  
  // botsing kogel tegen vijand

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill(42, 212, 198);
  rect(0, 0, 1280, 720);
  // vijand
fill("red")
ellipse(vijandX - 25,vijandY - 25, 50, 50);
  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health
textSize(64);
text(hp, 30, 60);
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(255, 0, 0);
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
