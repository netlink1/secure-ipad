const numbers = document.querySelectorAll(".num");
const dots = document.querySelectorAll("#dots span");
const deleteBtn = document.getElementById("delete");

let passcode = [];

// Fill dots when numbers are clicked
numbers.forEach(num => {
  num.addEventListener("click", () => {
    if (passcode.length < 6) {
      passcode.push(num.textContent);
      updateDots();
    }
  });
});

// Delete last number
deleteBtn.addEventListener("click", () => {
  passcode.pop();
  updateDots();
});

// Update dot UI
function updateDots() {
  dots.forEach((dot, index) => {
    dot.style.background =
      index < passcode.length ? "#fff" : "#3a3a3c";
  });

  // OPTIONAL: Check if full
  if (passcode.length === 6) {
    setTimeout(() => {
      alert("Passcode entered (demo)");
      passcode = [];
      updateDots();
    }, 300);
  }
}
