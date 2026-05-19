const sounds = [
  { name: "Ah-ha", file: "audio1.mp3" },
  { name: "Back of the net", file: "audio2.mp3" },
  { name: "Dan", file: "audio3.mp3" },
  { name: "Bang out of order", file: "audio4.mp3" },
  { name: "Email of the evening", file: "audio5.mp3" },
  { name: "Hello partridge", file: "audio6.mp3" },
  { name: "Scotch egg", file: "audio7.mp3" },
  { name: "Confused", file: "audio8.mp3" },
  { name: "Dog barking", file: "audio9.mp3" },
  { name: "Extra 1(Cartoon Slide)", file: "audio10.mp3" },
  { name: "Extra 2(Beep)", file: "audio11.mp3" },
  { name: "Extra 3(Laughs)", file: "audio12.mp3" }
];

const grid = document.getElementById("grid");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let page = 0;
const perPage = 9;

function loadSounds() {
  grid.innerHTML = "";

  let start = page * perPage;
  let end = start + perPage;
  let pageSounds = sounds.slice(start, end);

  pageSounds.forEach(sound => {

    let btn = document.createElement("button");
    btn.className = "sound";
    btn.innerHTML = `${sound.name}<br><small>Loading...</small>`;

    let audio = new Audio(sound.file);

    // get duration
    audio.addEventListener("loadedmetadata", () => {
      btn.innerHTML = `${sound.name}<br><small>${audio.duration.toFixed(1)}s</small>`;
    });

    btn.addEventListener("click", () => {
      audio.currentTime = 0;
      audio.play();
    });

    grid.appendChild(btn);
  });

  updateArrows();
}

function updateArrows() {
  prev.style.display = page === 0 ? "none" : "inline-block";
  next.style.display = (page + 1) * perPage >= sounds.length ? "none" : "inline-block";
}

prev.onclick = () => {
  page--;
  loadSounds();
};

next.onclick = () => {
  page++;
  loadSounds();
};

loadSounds();


// ✅ TEXT TO SPEECH
const speakBtn = document.getElementById("speak");
const textInput = document.getElementById("ttsText");

speakBtn.addEventListener("click", () => {
  const text = textInput.value;

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";

  speechSynthesis.speak(speech);
});