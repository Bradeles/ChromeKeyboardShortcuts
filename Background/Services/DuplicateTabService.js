export function ListenForDuplicateTab() {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "duplicateTab") {
            console.log("request to dupe recieved");
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                if (tabs && tabs.length > 0) {
                    const currentTab = tabs[0];
                    chrome.tabs.create({ url: currentTab.url });
                }
            });
        }
    });
}