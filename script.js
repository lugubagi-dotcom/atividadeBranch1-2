const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Bug corrigido: o botão "Adicionar" não tinha nenhuma ação associada.
addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return; // bug corrigido: adicionava tarefa em branco

  const li = document.createElement("li");
  li.textContent = input.value;
  li.addEventListener("click", () => li.classList.toggle("completed"));
  taskList.appendChild(li);
  input.value = ""; // bug corrigido: campo não era limpo após adicionar
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    document.querySelectorAll("#task-list li").forEach((li) => {
      const isCompleted = li.classList.contains("completed");
      if (filter === "all") li.style.display = "";
      else if (filter === "pending") li.style.display = isCompleted ? "none" : "";
      else if (filter === "completed") li.style.display = isCompleted ? "" : "none";
    });
  });
});
