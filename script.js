let today = new Date();
let hour = today.getHours();
// change greetings according to your need
const g1 = 'Καλημέρα!';
const g2 = 'Welcome back';
const g3 = 'Τι θα κάνουμε σήμερα;';
const g4 = 'Μήπως είναι ώρα για ύπνο?';
// change conditions based on your preferences
if(hour>=6 && hour<12) {
    document.getElementById('greetings').innerText=g1;
}
else if (hour>=12 && hour<17) {
    document.getElementById('greetings').innerText=g3;
}
else if (hour>=17 && hour<23) {
    document.getElementById('greetings').innerText=g2;
}
else {
    document.getElementById('greetings').innerText=g4;
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    var rand = Math.floor((Math.random() * slides.length));
    slides[rand].style.display = "block"; 
    setTimeout(showSlides, 1000 * 60 * 60); // Change image every 1 hour
}