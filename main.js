import { onRecClick, setupMediaRecord } from "./src/recorder";

//import the css
const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "microphone.css";

//find input wrapper
const textarea = document.getElementById("prompt-textarea");
const flex = textarea.parentNode;
flex.style.position = "relative";

//creating button
export const microBtn = document.createElement("button");
microBtn.innerHTML = "voice";
microBtn.id = "rec";
microBtn.classList.add("microphone");

flex.appendChild(microBtn);

//creating player
// const playerWrapper = document.createElement("div");
// playerWrapper.classList.add("player");
// playerWrapper.innerHTML = '<audio id="sound" controls class="player"></audio>';

// export const player = document.createElement("AUDIO");
// player.id = "sound";
// player.controls = true;
// flex.appendChild(player);

////////////////////////////////////////////////////////

microBtn.addEventListener("click", onRecClick);

setupMediaRecord();
