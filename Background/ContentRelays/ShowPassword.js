export function RelayShowPassword() {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "toggleInputFields") {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                if (tabs.length > 0) {
                    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleInputFields" });
                }
            });
    
            sendResponse({ status: "Message dispatched!" });
        }
    
        return true; // Ensures async operations don't close the response channel prematurely
    });
}
