const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const textoContainer = document.getElementById('texto-container');

// Configurando o contador
let counter = 0; // Alterado para começar do zero
const size = carouselImages[0].clientWidth;

// Definindo os textos correspondentes às imagens
const textos = [
    "Protótipo 1 - Drone com câmera",
    "Protótipo 2 - Drone com sensores",
    "Protótipo 3 - Drone com câmera e sensores em funcionamento"
];

// Movendo as imagens
function moveSlide() {
    carouselSlide.style.transition = 'transform 0.5s ease';
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Avançar o carrossel
function nextSlide() {
    if (counter >= carouselImages.length - 1) return;
    counter++;
    moveSlide();
    updateTexto();
}

// Voltar o carrossel
function prevSlide() {
    if (counter <= 0) return;
    counter--;
    moveSlide();
    updateTexto();
}

// Atualizar o texto abaixo do carrossel
function updateTexto() {
    textoContainer.textContent = textos[counter]; // Corrigido para usar o índice atual
}

// Event listeners para botões de navegação
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Clones das imagens para efeito de carrossel contínuo
// Adiciona os clones no começo e no final do slide
function addCloneImages() {
    const firstClone = carouselImages[0].cloneNode(true);
    const lastClone = carouselImages[carouselImages.length - 1].cloneNode(true);
    carouselSlide.appendChild(firstClone);
    carouselSlide.prepend(lastClone);
}

// Chamada da função para adicionar os clones
addCloneImages();

// Event listener para transição de carrossel contínuo
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

// Inicializando o texto na primeira imagem
updateTexto();
