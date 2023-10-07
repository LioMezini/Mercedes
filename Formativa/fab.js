const images = [
    'acabamentoporta.webp',
    'fabricacao2.jpg',
    'fabricacao3.jpg',
    'producao1.jpg',
    'producao2.jpg',
    'producao3.jpg',
    // Adicione mais imagens conforme necessário
];

const gallery = document.querySelector('.gallery');

// Função para carregar imagens na galeria
function loadImages() {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${image}`; // Certifique-se de ter uma pasta chamada "images" com suas imagens
        imgElement.alt = 'Produto';
        gallery.appendChild(imgElement);
    });
}

// Carrega as imagens quando a página estiver totalmente carregada
window.addEventListener('load', loadImages);

