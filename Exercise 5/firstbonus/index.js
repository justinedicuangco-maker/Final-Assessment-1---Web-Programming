const buttons = document.querySelectorAll(".sound");

// Add click event to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {

    // Gets audio file name from button
    const soundFile = button.getAttribute("data-sound");

    // Plays audio from the folder
    const audio = new Audio("audio/" + soundFile);

    audio.play();
  });
});