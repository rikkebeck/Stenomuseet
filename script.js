let startSide = "beige"; //startsiden starter med at være beige


// FØRSTE GRUPPE BRYSTER

function gruppe1BrysterKommerInd() {
    if (startSide === "beige") { // funktionen tjekker om startside er beige

        // funktionen får nu bryst gruppe 1 til at komme ind
        document.getElementById("gruppe1").style.display = "block";

        // Skifter skærmens tilstand til at bryst gruppe 1 er inde
        startSide = "tilstandErGruppe1";

    }
}

// Vent 1 sekund (1000 ms), og kør funktionen
setTimeout(gruppe1BrysterKommerInd, 1000);



// ANDEN GRUPPE BRYSTER

function gruppe2BrysterKommerInd() {
    if (startSide === "tilstandErGruppe1") { // funktionen tjekker om bryst gruppe 1 er kommet ind

        // funktionen får nu bryst gruppe 2 til at komme ind
        document.getElementById("gruppe2").style.display = "block";

        // Skifter skærmens tilstand til at bryst gruppe 2 er inde
        startSide = "tilstandErGruppe2";

    }
}

// Vent 2 sekund (2000 ms), og kør funktionen
setTimeout(gruppe2BrysterKommerInd, 2000);




// TREDJE GRUPPE BRYSTER

function gruppe3BrysterKommerInd() {
    if (startSide === "tilstandErGruppe2") { // funktionen tjekker om bryst gruppe 2 er kommet ind

        // funktionen får nu bryst gruppe 2 til at komme ind
        document.getElementById("gruppe3").style.display = "block";

        // Skifter skærmens tilstand til at bryst gruppe 3 er inde
        startSide = "tilstandErGruppe3";

    }
}

// Vent 3 sekund (2000 ms), og kør funktionen
setTimeout(gruppe3BrysterKommerInd, 3000);



