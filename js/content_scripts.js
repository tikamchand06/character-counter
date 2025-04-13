const notyf = new Notyf({
  duration: 5000,
  dismissible: true,
  position: { x: "right", y: "top" },
  types: [
    {
      duration: 12000,
      type: "success",
      background: "#ffffff",
      icon: `<img src="${chrome.runtime.getURL("icons/icon.png")}" alt="success" />`,
    },
    {
      type: "error",
      background: "#ffffff",
      icon: `<img src="${chrome.runtime.getURL("icons/icon.png")}" alt="error" />`,
    },
  ],
});

// Add event listener for context menu click
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "showNotification") notyf[request.type](request.message);
});
