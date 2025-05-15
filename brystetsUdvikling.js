// POP UP BESKED, FØRER TILBAGE TIL FORSIDE

// Henter begge pop-up elementer 
const popUpTop = document.getElementById("popUpPlaceringTop");
const popUpBund = document.getElementById("popUpPlaceringBund");

function afspilPopUp() {
  // Viser pop-ups ved at sætte display til block
  if (popUpTop) {
    popUpTop.style.display = "block";
  }

  if (popUpBund) {
    popUpBund.style.display = "block";
  }
}

// Kalder funktionen hver 3. sekund
setInterval(afspilPopUp, 3000);
