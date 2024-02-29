import { microBtn, player } from "../main";
import { transcribeVoice } from "./transcribe";

let recorder = null;
let canRecord = false;
let isRecording = false;

let chunks = [];

const record = (stream) => {
  recorder = new MediaRecorder(stream);
  console.log(recorder);

  recorder.ondataavailable = (e) => {
    chunks.push(e.data);
  };

  recorder.onstop = (e) => {
    const blob = new Blob(chunks, { type: "audio/mpeg" });
    chunks = [];

    const audioURL = window.URL.createObjectURL(blob);
    // player.src = audioURL;

    transcribeVoice(blob);
  };

  canRecord = true;
};

export const onRecClick = () => {
  console.log("record");

  if (!canRecord) {
    return;
  }
  isRecording = !isRecording;

  if (isRecording) {
    recorder.start();
    microBtn.classList.add("animate");
  } else {
    recorder.stop();
    microBtn.classList.remove("animate");
  }
};

export const setupMediaRecord = () => {
  console.log("setupMediaRecord");

  if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then(record)
      .catch((e) => {
        console.log(e.message);
      });
  }
};
