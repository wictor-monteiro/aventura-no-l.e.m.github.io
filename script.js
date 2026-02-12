const myButton = document.getElementById("myButton");
const myPopup = document.getElementById("myPopup");
const closePopup = document.getElementById("closePopup");

myButton.addEventListener("click", () => {
  myPopup.classList.add("show");
});

closePopup.addEventListener("click", () => {
  myPopup.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === myPopup) {
    myPopup.classList.remove("show");
  }
});

