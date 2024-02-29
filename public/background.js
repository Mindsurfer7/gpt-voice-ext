chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("background start");

  if (message.apiKey) {
    // Сохранить ключ API в chrome.storage
    chrome.storage.local.set({ apiKey: message.apiKey }, () => {
      if (chrome.runtime.lastError) {
        sendResponse({ success: false });
      } else {
        sendResponse({ success: true });
        console.log("background success");
      }
    });

    return true; // Возвращаем true, чтобы сохранить соединение для асинхронного ответа
  }
});
