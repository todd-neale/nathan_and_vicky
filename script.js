document.addEventListener('DOMContentLoaded', function() {
    // Card flip functionality
    const cardFlipper = document.getElementById('cardFlipper');
    const cardFront = document.querySelector('.card-front');
    const cardBack = document.querySelector('.card-back');
    const flipToBack = document.getElementById('flipToBack');
    const flipToFront = document.getElementById('flipToFront');
    const flipToFrontBottom = document.getElementById('flipToFrontBottom');

    function flipCard(showBack) {
        if (cardFlipper) {
            if (showBack) {
                cardFlipper.classList.add('flipped');
                // Set height to match back card
                if (cardBack) {
                    cardFlipper.style.minHeight = cardBack.offsetHeight + 'px';
                }
            } else {
                cardFlipper.classList.remove('flipped');
                // Reset height to match front card
                cardFlipper.style.minHeight = '';
            }
            // Scroll to top of card
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    if (flipToBack) {
        flipToBack.addEventListener('click', function(e) {
            e.preventDefault();
            flipCard(true);
        });
    }

    if (flipToFront) {
        flipToFront.addEventListener('click', function(e) {
            e.preventDefault();
            flipCard(false);
        });
    }

    if (flipToFrontBottom) {
        flipToFrontBottom.addEventListener('click', function(e) {
            e.preventDefault();
            flipCard(false);
        });
    }

    // Countdown functionality
    const countdownEl = document.getElementById('countdown');

    if (countdownEl) {
        const weddingDate = new Date('2026-08-22T14:00:00');

        function updateCountdown() {
            const now = new Date();
            const diff = weddingDate - now;

            if (diff <= 0) {
                countdownEl.textContent = "Today's the day!";
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

            countdownEl.textContent = `${days} days, ${hours} hours, ${minutes} minutes`;
        }

        updateCountdown();
        setInterval(updateCountdown, 60000);
    }
});
