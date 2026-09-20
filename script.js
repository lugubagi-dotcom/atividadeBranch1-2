const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Bug corrigido: o botão "Adicionar" não tinha nenhuma ação associada.
addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  taskList.appendChild(li);
  input.value = ""; // bug corrigido: campo não era limpo após adicionar
});
