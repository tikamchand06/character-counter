const { contextMenus, tabs, runtime } = chrome || browser;

contextMenus.create({
  id: "count-characters",
  contexts: ["selection"],
  title: runtime.getManifest().name,
  targetUrlPatterns: ["https://*/*", "http://*/*"],
  documentUrlPatterns: ["https://*/*", "http://*/*"],
});

contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "count-characters") {
    const selectedText = info?.selectionText || "";
    if (!selectedText) {
      tabs.sendMessage(tab.id, { type: "error", action: "showNotification", message: `No text selected.` });
      return;
    }

    // Calculate the number of characters, spaces, sentences, paragraphs, and words
    const characters = selectedText?.length || 0; // Chars
    const spaces = selectedText?.split(" ").length - 1 || 0; // Spaces
    const sentences = selectedText?.split(".").length || 0; // Sentences
    const paragraphs = selectedText?.split(/\r\n|\r|\n/).length || 0; // Paragraphs
    const words = selectedText?.trim().split(/\s+/).length || 0; // Words

    // Send a message to the content script to show a custom notification
    tabs.sendMessage(tab.id, {
      type: "success",
      action: "showNotification",
      message: `Selected text has ${characters} characters, ${spaces} spaces, ${sentences} sentences, ${paragraphs} paragraphs, and ${words} words.`,
    });
  }
});
