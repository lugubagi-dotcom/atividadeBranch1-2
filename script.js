const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

// Bug corrigido: o botão "Adicionar" não tinha nenhuma ação associada.
let total = 0;

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  taskList.appendChild(li);
  input.value = ""; // bug corrigido: campo não era limpo após adicionar

  total++;
  taskCount.textContent = `${total} tarefa${total === 1 ? "" : "s"}`;
});
