let ul = document.querySelector('nav .ul');

function openMenu() {
    ul.classList.add('open');
}

function closeMenu() {
    ul.classList.remove('open');
}

// Pega os elementos da página
var modal = document.getElementById("modal");
var modalImg = document.getElementById("imagem-ampliada");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("fechar")[0];

// Pega todas as imagens com a classe 'imagem-clicavel'
var imagens = document.querySelectorAll(".imagem-clicavel");

// Para cada imagem, adiciona um evento de clique
imagens.forEach(function(img) {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Quando o usuário clicar no botão "fechar", o modal é fechado
span.onclick = function() { 
    modal.style.display = "none";
}

// Fecha o modal se clicar fora da imagem
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}