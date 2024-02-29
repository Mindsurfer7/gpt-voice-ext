// console.log("init");
// const textarea = document.getElementById("prompt-textarea");

// const cssLink = document.createElement("link");
// cssLink.rel = "stylesheet";
// cssLink.href = "microphone.css";

// const flex = textarea.parentNode;
// flex.style.position = "relative";

// const microBtn = document.createElement("button");
// microBtn.innerHTML = "voice";
// microBtn.id = "rec";
// microBtn.classList.add("microphone");

// flex.appendChild(microBtn);

// const musicWrapper = document.createElement("div");
// musicWrapper.classList.add("player");
// musicWrapper.innerHTML = '<audio id="sound" controls class="player"></audio>';

// const music = document.createElement("AUDIO");
// music.id = "sound";
// music.controls = true;
// flex.appendChild(music);

// let isRecording = false;
// let canRecord = false;
// let recorder = null;

// let chunks = [];

// const mic = microBtn; //document.getElementById("rec");

// const onRecClick = (stream) => {
//   console.log("record");

//   if (!canRecord) {
//     return;
//   }
//   isRecording = !isRecording;

//   if (isRecording) {
//     recorder.start();
//     mic.classList.add("animate");
//   } else {
//     recorder.stop();
//     mic.classList.remove("animate");
//   }
// };

// mic.addEventListener("click", onRecClick);

// const record = (stream) => {
//   recorder = new MediaRecorder(stream);
//   console.log(recorder);

//   recorder.ondataavailable = (e) => {
//     chunks.push(e.data);
//   };

//   recorder.onstop = (e) => {
//     const blob = new Blob(chunks, { type: "audio/mpeg" });
//     chunks = [];

//     const audioURL = window.URL.createObjectURL(blob);
//     music.src = audioURL;

//     transcribeVoice(blob);
//   };

//   canRecord = true;
// };

// const setupMediaRecord = () => {
//   if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
//     navigator.mediaDevices
//       .getUserMedia({
//         audio: true,
//       })
//       .then(record)
//       .catch((e) => {
//         console.log(e.message);
//       });
//   }
// };

// setupMediaRecord();

// ////////////////////////////////////////////////////////

// // const img = document.createElement("img");
// // img.href = "icons/mic.png";

// // img.addEventListener("error", function () {
// //   console.error("Ошибка при загрузке изображения!");
// // });

// // img.addEventListener("load", function () {
// //   console.log("Изображение загружено успешно!");
// // });
// // flex.appendChild(img);
