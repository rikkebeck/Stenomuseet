let startSide = "beige"; //startsiden starter med at være beige


// FØRSTE GRUPPE BRYSTER

function gruppe1BrysterKommerInd() {
    if (startSide === "beige") { // funktionen tjekker om startside er beige

        // funktionen får nu bryst gruppe 1 til at komme ind
        document.getElementById("gruppe1").style.display = "block";

        // Skifter skærmens tilstand - så den ved at bryst gruppe 1 er inde
        startSide = "tilstandErGruppe1";

        // Kald den næste funktion efter 1 sekund
        setTimeout(gruppe2BrysterKommerInd, 1000);
    }
}

// ANDEN GRUPPE BRYSTER

function gruppe2BrysterKommerInd() {
    if (startSide === "tilstandErGruppe1") { // funktionen tjekker om bryst gruppe 1 er kommet ind

        // funktionen får nu bryst gruppe 2 til at komme ind
        document.getElementById("gruppe2").style.display = "block";

        // Skifter skærmens tilstand - så den ved at bryst gruppe 2 er inde
        startSide = "tilstandErGruppe2";

        // Kald den næste funktion efter 1 sekund
        setTimeout(gruppe3BrysterKommerInd, 1000);
    }
}

// TREDJE GRUPPE BRYSTER

function gruppe3BrysterKommerInd() {
    if (startSide === "tilstandErGruppe2") { // funktionen tjekker om bryst gruppe 2 er kommet ind

        // funktionen får nu bryst gruppe 3 til at komme ind
        document.getElementById("gruppe3").style.display = "block";

        // Skifter skærmens tilstand - så den ved at bryst gruppe 3 er inde
        startSide = "tilstandErGruppe3";

        // Kald den næste funktion efter 1 sekund
        setTimeout(gruppe3BrysterForsvinder, 1000);
    }
}



// nu forsvinder brysterne igen!!


// TREDJE GRUPPE BRYSTER FORSVINDER

function gruppe3BrysterForsvinder() {
    if (startSide === "tilstandErGruppe3") { // funktionen tjekker om bryst gruppe 3 stadig er inde

        // funktionen får nu bryst gruppe 3 til at forsvinde
        document.getElementById("gruppe3").style.display = "none";

        // Skifter skærmens tilstand - så den ved at bryst gruppe 3 er forsvundet
        startSide = "tilstandErGruppe2";

        // Kald den næste funktion efter 1 sekund
        setTimeout(gruppe2BrysterForsvinder, 1000);
    }
}

// ANDEN GRUPPE BRYSTER FORSVINDER

function gruppe2BrysterForsvinder() {
    if (startSide === "tilstandErGruppe2") { // funktionen tjekker om bryst gruppe 2 stadig er inde

        // funktionen får nu bryst gruppe 2 til at forsvinde
        document.getElementById("gruppe2").style.display = "none";

         // Skifter skærmens tilstand - så den ved at bryst gruppe 2 er forsvundet
        startSide = "tilstandErGruppe1";

        // Kald den næste funktion efter 1 sekund
        setTimeout(gruppe1BrysterForsvinder, 1000); 
    }
}

// FØRSTE GRUPPE BRYSTER FORSVINDER

function gruppe1BrysterForsvinder() {
    if (startSide === "tilstandErGruppe1") { // funktionen tjekker om bryst gruppe 1 stadig er inde

        // funktionen får nu bryst gruppe 1 til at forsvinde
        document.getElementById("gruppe1").style.display = "none";

        // Skifter skærmens tilstand til start siden beige
        startSide = "beige";

        // Kalder nu den første funktion for at starte loopen forfra efter 1 sekund
        setTimeout(gruppe1BrysterKommerInd, 1000);
    }
}

// Start animationen ved at kalde den første funktion efter 1 sekund
setTimeout(gruppe1BrysterKommerInd, 1000);