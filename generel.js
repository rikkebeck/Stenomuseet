// SPEAKER
const ikon = document.getElementById("speakerIkon");
const lyd = document.getElementById("speakerLyd");


ikon.addEventListener("click", function () {
    ikon.classList.toggle("clicked"); // Tilføjer/fjerner CSS-klassen

    if (!lyd.paused) {
        lyd.pause();
        lyd.currentTime = 0; // Spol tilbage til start
    } else {
        lyd.play(); // Afspil lyd, håndter evt. fejl
    }
});

// Pop up overlay
// konstant
const overlay = document.getElementById("overlay");

// Variabel til at tjekke om der er blevet klikket. Starter med false fordi der ikke er blevet klikket endnu
let clicked = false;

// Funktion som tilføjer overlayet
function tilfoejOverlay() {
    //vis overlay
    overlay.style.display = "block";

    // Hvis ikke der klikkes på overlayet efter 1 minut, føres man tilbage til forsiden 
    setTimeout(function lukOverlay() {
        if (!clicked) {
            window.location.href = "index.html";
        }
    }, 60000);
}

// Overlayet kommer frem efter 1 minut
setTimeout(tilfoejOverlay, 60000);

// Vi tilføjer en eventListener som registrerer om der klikkes på overlayet
overlay.addEventListener("click", function lukOverlay() {
    clicked = true;
    overlay.style.display = "none";
});