import axios from "axios";
// import { player } from "../main";
const config = {
  headers: {
    "Content-Type": "audio/mpeg",
    Authorization: `Bearer ${APIkey}`,
  },
};

export const transcribeVoice = async (blob) => {
  const payload = new FormData();
  payload.append("model", "whisper-1");
  payload.append("file", blob);

  const transcription = await axios
    .post("https://api.openai.com/v1/audio/transcriptions", payload, config)
    .then((data) => data);

  console.log(transcription);

  const textarea = document.getElementById("prompt-textarea");
  // textarea.innerHTML = transcription.data.text;
  textarea.value = transcription.data.text;

  textarea.focus();
  const inputEvent = new Event("input", {
    bubbles: true,
    cancelable: true,
  });

  textarea.dispatchEvent(inputEvent);

  // player.classList.add("hide");
};
