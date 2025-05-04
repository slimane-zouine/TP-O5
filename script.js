
const form = document.getElementById("guestForm");
const messagesList = document.getElementById("messagesList");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && message) {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${name}</strong> : ${message}`;
    messagesList.prepend(li);

    // Réinitialise les champs
    form.reset();
  }
});
