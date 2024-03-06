import { onRecClick, setupMediaRecord } from "./src/recorder";
console.log("init");

//import the css
const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "microphone.css";

//find input wrapper

const microBtn = document.createElement("button");
let eventHandlerAdded = false;

function checkForTextarea() {
  const textarea =
    document.getElementById("prompt-textarea") ||
    document.querySelector("textarea");

  if (textarea) {
    const flex = textarea.parentNode;
    flex.style.position = "relative";

    //creating button
    microBtn.innerHTML = "voice";
    microBtn.id = "rec";
    microBtn.type = "button";
    microBtn.classList.add("microphone");

    flex.appendChild(microBtn);

    if (!eventHandlerAdded) {
      microBtn.addEventListener("click", onRecClick);
      eventHandlerAdded = true;
    }

    microBtn.addEventListener("click", onRecClick);
  }
}
const intervalId = setInterval(checkForTextarea, 100);
setTimeout(() => {
  clearInterval(intervalId);
}, 4000);

export { microBtn };

setupMediaRecord();
