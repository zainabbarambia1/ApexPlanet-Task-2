// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    this.reset();
  }
});

// To-Do List
function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(removeBtn);
  document.getElementById("todoList").appendChild(li);

  input.value = "";
}