// SPEAKER
const ikon = document.getElementById("speakerIkon");
const lyd = document.getElementById("speakerLyd");


ikon.addEventListener("click", function () {
    ikon.classList.toggle("clicked"); // Tilføjer/fjerner CSS-klassen

    if (!lyd.paused) {
        lyd.pause();
        lyd.currentTime = 0; // Spol tilbage til start
    } else {
        lyd.play().catch(err => console.log("Lydfejl:", err));  // Afspil lyd, håndter evt. fejl
    }
});
