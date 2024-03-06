import axios from "axios";

export const setupHeaders = async () => {
  const { apiKey } = await new Promise((resolve) => {
    chrome.storage.local.get("apiKey", (data) => resolve(data));
  });

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

  const loader = document.createElement("div");
  loader.classList.add("loader");
  textarea.parentNode.appendChild(loader);

  if (textarea.value.trim() !== "") {
    textarea.value += " ";
  }

  const transcription = await axios
    .post("https://api.openai.com/v1/audio/transcriptions", payload, config)
    .then((data) => data)
    .catch((e) => {
      alert(`Without api key you can not use the extention: ${e.message} `);
    });
  textarea.parentNode.removeChild(loader);
  console.log(transcription);

  if (textarea.value.trim() !== "") {
    textarea.value += transcription.data.text;
  } else {
    textarea.value = transcription.data.text;
  }

  textarea.focus();
  const inputEvent = new Event("input", {
    bubbles: true,
    cancelable: true,
  });

  textarea.dispatchEvent(inputEvent);
};
