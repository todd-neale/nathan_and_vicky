// Card flip functionality
document.addEventListener('DOMContentLoaded', function() {
    const cardFlipper = document.getElementById('cardFlipper');
    const flipToBack = document.getElementById('flipToBack');
    const flipToFront = document.getElementById('flipToFront');
    const backArrow = document.getElementById('backArrow');

    if (flipToBack) {
        flipToBack.addEventListener('click', function(e) {
            e.preventDefault();
            cardFlipper.classList.add('flipped');
        });
    }

    if (flipToFront) {
        flipToFront.addEventListener('click', function(e) {
            e.preventDefault();
            cardFlipper.classList.remove('flipped');
        });
    }

    if (backArrow) {
        backArrow.addEventListener('click', function(e) {
            e.preventDefault();
            cardFlipper.classList.remove('flipped');
        });
    }
});
