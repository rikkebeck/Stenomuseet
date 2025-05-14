// En konstant til knappen, så vi kan lave en funktion der "trykker" på knappen og går videre til hjem-side
const knap = document.getElementById("knapSkipVideo");


// Funktionen som "klikker" på knappen og automatisk spoler videre til hjem-siden
function skipVideo() {
    knap.click();  
}

// en timer så funktionen først kører når videoen er slut. Videoen varer 6 sek.
setTimeout(skipVideo, 7000);
