import axios from "axios";
// import { player } from "../main";

export const setupHeaders = async () => {
  const { apiKey } = await new Promise((resolve) => {
    chrome.storage.local.get("apiKey", (data) => resolve(data));
  });

  console.log("MY KEY", apiKey);
  const config = {
    headers: {
      "Content-Type": "audio/mpeg",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  return config;
};

export const transcribeVoice = async (blob) => {
  const textarea =
    document.getElementById("prompt-textarea") ||
    document.querySelector("textarea");
  console.log(textarea);

  const payload = new FormData();
  payload.append("model", "whisper-1");
  payload.append("file", blob);

  const config = await setupHeaders();
  textarea.classList.add("loading");
  textarea.value = "Loading...";
  const transcription = await axios
    .post("https://api.openai.com/v1/audio/transcriptions", payload, config)
    .then((data) => data)
    .catch((e) => {
      alert(`Without api key you can not use the extention: ${e.message} `);
    });

  console.log(transcription);

  textarea.classList.remove("loading");
  textarea.value = transcription.data.text;

  textarea.focus();
  const inputEvent = new Event("input", {
    bubbles: true,
    cancelable: true,
  });

  textarea.dispatchEvent(inputEvent);
};
