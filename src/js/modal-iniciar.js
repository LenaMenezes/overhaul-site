// Selecionando elementos
const modal = document.getElementById("modalLogin");
const btn = document.getElementById("abrirModal");
const fecharBtn = document.querySelector(".conteudo-modal .fechar");

// Mostrar o modal ao clicar em "Iniciar Sessão"
btn.onclick = function() {
  modal.style.display = "block";
}

// Fechar o modal ao clicar no "X"
fecharBtn.onclick = function() {
  modal.style.display = "none";
}

// Fechar o modal ao clicar fora do conteúdo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}