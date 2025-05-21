// FADE EFFEKT

// Henter de forskellige knapper til undersiderne
const fedtvaev = document.getElementById('fedtvaev');
const brystvorte = document.getElementById('brystvorte');
const maelkekirtler = document.getElementById('maelkekirtler');
const maelkegange = document.getElementById('maelkegange');
const lymfesystem = document.getElementById('lymfesystem');

// Henter fade-elementet som skal få fade-out klassen ved klik:
const fadeElement = document.getElementById('fadeEffekt');

function fadeOutAndNavigate(event) {
  event.preventDefault(); // Forhindrer standard navigasjon
  fadeElement.classList.add('fade-out');
  const targetHref = this.getAttribute('href'); // 'this' refererer til det klikkede elementet
  setTimeout(() => {
    window.location.href = targetHref; // Naviger etter fade-out
  }, 500); // Samme varighet som CSS-overgangen
}

if (fedtvaev) {
  fedtvaev.onclick = fadeOutAndNavigate;
}

if (brystvorte) {
  brystvorte.onclick = fadeOutAndNavigate;
}

if (maelkekirtler) {
  maelkekirtler.onclick = fadeOutAndNavigate;
}

if (maelkegange) {
  maelkegange.onclick = fadeOutAndNavigate;
}

if (lymfesystem) {
  lymfesystem.onclick = fadeOutAndNavigate;
}

if (areola) {
  areola.onclick = fadeOutAndNavigate;
}