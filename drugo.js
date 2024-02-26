
function info(element, tekst) {
    const slika = document.getElementById(element);
    const informacija = document.getElementById(tekst);
  
    if (slika.style.display === 'block') {
        slika.classList.add('fade-out');
        informacija.classList.remove('fade-out');
        informacija.classList.add('fade-in');
    } else {
        slika.classList.remove('fade-out');
        informacija.classList.remove('fade-in');
        informacija.classList.add('fade-out');
    }
  
    setTimeout(function() {
        if (slika.style.display === 'block') {
            slika.style.display = 'none';
            informacija.style.display = 'block';
        } else {
            slika.style.display = 'block';
            informacija.style.display = 'none';
        }
      
        slika.classList.remove('fade-out');
        slika.classList.remove('fade-in');
        informacija.classList.remove('fade-out');
        informacija.classList.remove('fade-in');
    }, 200); // Pričekajte 1 sekundu prije nego što završite tranziciju
}
