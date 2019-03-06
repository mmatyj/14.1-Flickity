// MUSTACHE
var carouselTemplate = document.getElementById('carousel-template').innerHTML;
Mustache.parse(carouselTemplate);
var carouselSlides = '';
for (var i = 0; i < slides.length; i++) {
    slides[i].id = i;
    carouselSlides += Mustache.render(carouselTemplate, slides[i]);
}

document.querySelector('.main-carousel').innerHTML = carouselSlides;

// FLICKITY

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    hash: true,
    pageDots: false
});

var resetButton = document.querySelector('.restart-button');
resetButton.addEventListener('click', function () {
    flkty.select(0);
});
var progressBar = document.querySelector('.progress-bar')

flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
});