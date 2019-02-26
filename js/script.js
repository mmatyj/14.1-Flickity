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