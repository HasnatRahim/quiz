const answers = {
  q1: "Time Pass",
  q2: "Hasnat",
  q3: "Men",
  q4: "Support Chatroligue",
};

const resultDiv = document.querySelector(".res-div");
const container = document.querySelector(".container");

document.getElementById("btn").addEventListener("click", function () {
  const q1Selected = document.querySelector('input[name="q1_option"]:checked');
  const q2Selected = document.querySelector('input[name="q2_option"]:checked');
  const q3Selected = document.querySelector('input[name="q3_option"]:checked');
  const q4Selected = document.querySelector('input[name="q4_option"]:checked');

  let score = 0;

  if (q1Selected.nextSibling.textContent.trim() === answers.q1) {
    score++;
  }

  if (q2Selected.nextSibling.textContent.trim() === answers.q2) {
    score++;
  }

  if (q3Selected.nextSibling.textContent.trim() === answers.q3) {
    score++;
  }

  if (q4Selected.nextSibling.textContent.trim() === answers.q4) {
    score++;
  }

  resultDiv.innerText = "You scored " + score + " out of 4!";
  resultDiv.style.display = "block"; // Show the result div
  container.style.display = "none";
});
