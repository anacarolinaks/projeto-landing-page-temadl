const toggleButton = document.getElementById("toggleButton");
const body = document.body;

// Função para alternar entre os modos de cores
function toggleColorMode() {
  body.classList.toggle("dark-mode");
  updateButton();
}

// Função para atualizar o estilo do botão
function updateButton() {
  const isDarkMode = body.classList.contains("dark-mode");
  toggleButton.style.backgroundColor = isDarkMode ? "#f7f7f7" : "#000000";
  toggleButton.style.color = isDarkMode ? "#000000" : "#ffffff";
  toggleButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
}

// Adicionar um ouvinte de evento de clique ao botão
toggleButton.addEventListener("click", toggleColorMode);

// Inicializar o estilo do botão com base no estado atual
updateButton();
