// FORSIDE AF BH SIDEN
// vi laver en konstant til knappen som vi kan bruge i funktionen senere
const knap = document.getElementById("rundKnap");

// vi laver en konstant til teksterne på forsiden, så vi kan få dem til at forsvinde senere
const tekstOverskrift = document.getElementById("overskriftBhSide");
const tekstTryk = document.getElementById("trykPaaMigTekst");


// BH 'UNDERSIDERNE' (med hver bh)
// konstanter for pilene
const pile = document.getElementById("navigationsPile");

// konstanter for BH kasserne
const kasse1 = document.getElementById("bhKasse1");
const kasse2 = document.getElementById("bhKasse2");
const kasse3 = document.getElementById("bhKasse3");
const kasse4 = document.getElementById("bhKasse4");
const kasse5 = document.getElementById("bhKasse5");
const kasse6 = document.getElementById("bhKasse6");

// Vi samler alle BH kasserne i et array for at holde styr på rækkefølgen og for at kunne skifte mellem dem
const alleBhKasser = [kasse1, kasse2, kasse3, kasse4, kasse5, kasse6];
// vi starter med kasse 1, derfor er den skiftende variabel 0 til at starte med.
let nuvaerendeKasse = 0; 


// Vi laver eventlistener og funktion til at skjule forsiden

// funktionen skal få arrayet med BH'erne til at vises mens overskrift + tekst + rød knap skal skjules:
knap.addEventListener("click", function seBH() {
    // vi får teksterne og knappen til at forsvinde:
    tekstOverskrift.style.display = "none";
    tekstTryk.style.display = "none";
    knap.style.display = "none";

    // Vis den første BH kasse, vi tager fat i arrayet, og viser den nuvaerendeKasse
    alleBhKasser[nuvaerendeKasse].style.display = "flex";

    // vis pile
    pile.style.display = "flex";
});


// Nu laver vi pilene klikbare så man kan "scrolle" i arrayet
// konstanter for pilene
const pilOp = document.getElementById("pilOp");
const pilNed = document.getElementById("pilNed");


// funktion som skifter i arrayet, når man klikker på pil ned
pilNed.addEventListener("click", function scrollNaeste() {
    // Skjul den nuværende kasse
    alleBhKasser[nuvaerendeKasse].style.display = "none";
    // Opdater tilstand for nuværendeKasse, men kun hvis vi ikke er ved den sidste kasse
    if (nuvaerendeKasse < alleBhKasser.length - 1) {
        nuvaerendeKasse++; 
        //++ betyder at man husker den nuværende kasse, og gør så kassen én højere til næste gang
        // Kassen bliver vist
        alleBhKasser[nuvaerendeKasse].style.display = "flex";
    } else {
        // Hvis vi er ved den sidste kasse, vis forsiden igen
        tekstOverskrift.style.display = "block";
        tekstTryk.style.display = "block";
        knap.style.display = "block";
        pile.style.display = "none";
    }
});


// funktion som skifter i arrayet, når man klikker på pil op
pilOp.addEventListener("click", function scrollForrige() {
    // Skjul den nuværende kasse
    alleBhKasser[nuvaerendeKasse].style.display = "none";
    // Opdater tilstand for nuværendeKasse, men kun hvis vi ikke er ved den første kasse
    if (nuvaerendeKasse > 0) {
        nuvaerendeKasse--;
        //-- betyder at man husker den nuværende kasse, og gør så kassen én mindre til næste gang
        // Kassen bliver vist
        alleBhKasser[nuvaerendeKasse].style.display = "flex";
    } else {
        // Hvis vi er ved den første kasse, vis forsiden igen
        tekstOverskrift.style.display = "block";
        tekstTryk.style.display = "block";
        knap.style.display = "block";
        pile.style.display = "none";
    }
});
