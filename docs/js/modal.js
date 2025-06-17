// Abrir o modal
const openModal = document.getElementById("openModal");
const modal = document.getElementById("creditModal");
const closeModal = document.getElementById("closeModal");

// Mostrar o modal quando o botão for clicado
openModal.onclick = function () {
  modal.style.display = "block";
};

// Fechar o modal quando o "X" for clicado
closeModal.onclick = function () {
  modal.style.display = "none";
};

// Fechar o modal se clicar fora dele
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
