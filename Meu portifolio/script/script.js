// Seleciona os elementos do carrossel
const carousel = document.querySelector('.carousel');
const projects = document.querySelectorAll('.projeto');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

// Função para mostrar o slide atual
function showCurrentSlide() {
    projects.forEach((project, index) => {
        project.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
    });
}

// Função para avançar para o próximo slide
function nextSlide() {
    currentIndex++;
    if (currentIndex >= projects.length) {
        currentIndex = 0;
    }
    showCurrentSlide();
}

// Função para voltar para o slide anterior
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = projects.length - 1;
    }
    showCurrentSlide();
}

// Adiciona eventos aos botões de navegação
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Mostra o primeiro slide ao carregar a página
showCurrentSlide();