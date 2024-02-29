const connectBtn = document.getElementById("connect");
const inputKey = document.getElementById("inputKey");
const msg = document.getElementById("msg");
const current = document.getElementById("current");
const resetBtn = document.getElementById("reset");

const { apiKey } = new Promise((resolve) => {
  chrome.storage.local.get("apiKey", (data) => resolve(data));
});

const resetKey = () => {
  inputKey.focus();
  connectBtn.innerHTML = "connect";
  connectBtn.disabled = false;
  chrome.runtime.sendMessage({ apiKey }, (response) => {
    if (response.success) {
      msg.innerHTML = "Click connect to set the key";
    } else {
      alert("Failed to set API Key");
    }
  });
};

resetBtn.addEventListener("click", resetKey);

connectBtn.addEventListener("click", () => {
  const apiKey = inputKey.value;

  chrome.runtime.sendMessage({ apiKey }, (response) => {
    if (response.success) {
      msg.innerHTML = "API Key has been set";
      connectBtn.innerHTML = "connected";
      connectBtn.disabled = true;
      current.innerHTML = `Current key: ${apiKey}`;
    } else {
      alert("Failed to set API Key");
    }
  });
});
