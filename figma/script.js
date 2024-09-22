document.querySelectorAll(".dropdown-toggle").forEach(function (button) {
  button.addEventListener("click", function () {
    const dropdown = this.parentElement;
    dropdown.classList.toggle("open");
  });
});
function toggleImage(button) {
  const img = button.querySelector(".button-icon");
  if (img.src.endsWith("/Vector.png")) {
    img.src = "/Vector2.png"; // Замените на путь ко второму изображению
  } else {
    img.src = "/Vector.png"; // Замените на путь к первому изображению
  }
}
function nextStep() {
  document.getElementById("form-container-1").style.display = "none";
  document.getElementById("form-container-2").style.display = "block";
}
function back() {
  document.getElementById("form-container-1").style.display = "block";
  document.getElementById("form-container-2").style.display = "none";
}
function getQuote() {
  document.getElementById("form-container-1").style.display = "none";
  document.getElementById("form-container-3").style.display = "block";
}
function back2() {
  document.getElementById("form-container-1").style.display = "block";
  document.getElementById("form-container-3").style.display = "none";
}
function nextStep2() {
  document.getElementById("form-container-4").style.display = "block";

  document.getElementById("form-container-3").style.display = "none";
}
function back3() {
  document.getElementById("form-container-4").style.display = "none";
  document.getElementById("form-container-3").style.display = "block";
}
function quicknote_next() {
  document.getElementById("quicknote-1").style.display = "none";
  document.getElementById("quicknote-2").style.display = "block";
}
function quicknote_back() {
  document.getElementById("quicknote-1").style.display = "block";
  document.getElementById("quicknote-2").style.display = "none";
}
