export function ListenForTest() {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message.action === "test") {
            console.log("request to test recieved");
        }
    });
}