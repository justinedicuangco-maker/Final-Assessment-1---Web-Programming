let lives = 3;
let score = 0;
let correctColor;

const rgbValue = document.getElementById("rgbValue");
const options = document.getElementById("options");
const message = document.getElementById("message");
const livesText = document.getElementById("lives");
const gameOver = document.getElementById("gameOver");
const finalScore = document.getElementById("finalScore");
const restartBtn = document.getElementById("restartBtn");

/* ===== GENERATE RANDOM RGB COLOUR ===== */
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

/* ===== SETUP NEW ROUND ===== */
function newRound() {

    options.innerHTML = "";
    message.textContent = "";

    // Generate correct answer
    correctColor = randomRGB();
    rgbValue.textContent = correctColor.toUpperCase();

    // Create 3 options (1 correct + 2 random)
    const colors = [correctColor];

    while (colors.length < 3) {
        let newColor = randomRGB();
        if (!colors.includes(newColor)) {
            colors.push(newColor);
        }
    }

    // Shuffle options
    colors.sort(() => Math.random() - 0.5);

    // Create clickable boxes
    colors.forEach(color => {

        const div = document.createElement("div");
        div.classList.add("color-box");
        div.style.backgroundColor = color;

        div.addEventListener("click", () => checkAnswer(color));

        options.appendChild(div);
    });
}

/* ===== CHECK ANSWER ===== */
// ===== CHECK ANSWER (FIXED WITH FEEDBACK DELAY) =====
function checkAnswer(selectedColor) {

    if (selectedColor === correctColor) {

        // increase score
        score++;

        // show feedback FIRST
        message.textContent = "✅ Correct!";
        message.style.color = "lightgreen";

        updateUI();

        // delay next round so user can see message
        setTimeout(() => {
            newRound();
        }, 800);

    } else {

        // wrong answer reduces life immediately
        lives--;

        message.textContent = "❌ Wrong!";
        message.style.color = "red";

        updateUI();
    }
}

/* ===== UPDATE UI ===== */
function updateUI() {
    livesText.textContent = `Lives: ${lives}`;

    // Game over condition
    if (lives <= 0) {
        endGame();
    }
}

/* ===== END GAME ===== */
function endGame() {
    options.innerHTML = "";
    rgbValue.textContent = "Game Over";

    gameOver.classList.remove("hidden");
    finalScore.textContent = `Your Score: ${score}`;
}

/* ===== RESTART GAME ===== */
restartBtn.addEventListener("click", () => {
    lives = 3;
    score = 0;

    gameOver.classList.add("hidden");
    updateUI();
    newRound();
});

/* ===== START GAME ===== */
newRound();