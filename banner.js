

const banner = document.querySelector('.banner');
const logos = document.querySelector('.banner-logos');

if (!logos.dataset.duplicated) {
    logos.innerHTML += logos.innerHTML;
    logos.dataset.duplicated = 'true';
}

let scrollAmount = 0;
let speed = 0.5; // 
let maxScroll = logos.scrollWidth / 2;

function animateBanner() {
    scrollAmount += speed;
    if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
    }
    logos.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(animateBanner);
}

window.addEventListener('resize', () => {
    maxScroll = logos.scrollWidth / 2;
});

animateBanner();
