let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('progress-bar');
const currentTime = document.getElementById('current-time');
const currentDate = document.getElementById('current-date');
const fullscreenIcon = document.getElementById('fullscreen-icon');

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    updateProgressBar();
}

function updateProgressBar() {
    const progress = ((currentSlide + 1) / slides.length) * 100;
    progressBar.style.height = progress + '%';
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        showSlide(currentSlide + 1);
    } else if (event.key === 'ArrowLeft') {
        showSlide(currentSlide - 1);
    }
});

function updateDateTime() {
    const now = new Date();
    currentTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    currentDate.textContent = now.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
}

setInterval(updateDateTime, 1000);

fullscreenIcon.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});



// Initialize with the first slide
showSlide(currentSlide);
