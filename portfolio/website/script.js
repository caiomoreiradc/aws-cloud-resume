document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const carousel = document.querySelector('.carousel-inner');
    const projects = document.querySelectorAll('.project');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showProject(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        showProject(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projects.length;
        showProject(currentIndex);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

const counter = document.querySelector(".counter-number")
async function updateCounter()
{
    let response = await fetch("https://yoiyvsdma3piycmpyc5ekapaqy0pdibj.lambda-url.sa-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `${data} visitantes passaram por aqui.`;
}

updateCounter();