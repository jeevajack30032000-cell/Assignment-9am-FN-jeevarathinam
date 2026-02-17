// ✅ DARK MODE TOGGLE
document.getElementById("darkBtn").addEventListener("click", function () {
  document.body.classList.toggle("darkMode");
});


// ✅ LIVE INPUT TEXT UPDATE
let input = document.getElementById("liveInput");
let liveText = document.getElementById("liveText");

input.addEventListener("input", function () {
  liveText.textContent = input.value;
});


// ✅ MULTIPLE COLOR BUTTONS
let colorButtons = document.querySelectorAll(".colorBtn");

colorButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.body.style.backgroundColor = btn.dataset.color;
  });
});


// ✅ innerHTML FORMATTED TEXT
document.getElementById("formatBtn").addEventListener("click", function () {
  document.getElementById("formatText").innerHTML =
    "Hello! This is <b>Bold</b> and this is <i>Italic</i> 😊";
});


// ✅ TO-DO LIST USING appendChild() + removeChild()
let todoForm = document.getElementById("todoForm");
let todoInput = document.getElementById("todoInput");
let todoList = document.getElementById("todoList");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Create LI element
  let li = document.createElement("li");
  li.textContent = todoInput.value;

  // Create Remove Button
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";

  // Remove task using removeChild()
  removeBtn.addEventListener("click", function () {
    todoList.removeChild(li);
  });

  // Append button inside li
  li.appendChild(removeBtn);

  // Append li inside ul
  todoList.appendChild(li);

  todoInput.value = "";
});


// ✅ MODIFY TITLE DYNAMICALLY
document.getElementById("mainTitle").addEventListener("mouseover", function () {
  this.textContent = "👋 Welcome Jeeva's Portfolio!";
});


// ✅ ADD PROJECT SECTION DYNAMICALLY USING appendChild()
document.getElementById("addProjectBtn").addEventListener("click", function () {
  let newProject = document.createElement("div");
  newProject.className = "projectCard";

  newProject.textContent = "New Project Added Dynamically 🚀";

  document.getElementById("projectSection").appendChild(newProject);
});
