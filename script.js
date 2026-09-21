const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Bug corrigido: o botão "Adicionar" não tinha nenhuma ação associada.
let processing = false;

addBtn.addEventListener("click", () => {
  if (processing) return; // bug corrigido: cliques rápidos duplicavam a tarefa
  if (input.value.trim() === "") return; // bug corrigido: adicionava tarefa em branco

  processing = true;
  setTimeout(() => (processing = false), 300);

  const li = document.createElement("li");
  li.textContent = input.value;
  taskList.appendChild(li);
  input.value = ""; // bug corrigido: campo não era limpo após adicionar
});
