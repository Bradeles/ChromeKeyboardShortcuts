const keydownEvent = "keydown";

function isDuplicateTabHotkeyPressed(event) {
    return event.ctrlKey && event.shiftKey && isKeyPressed(event, "k");
}

function isShowPasswordHotkeyPressed(event) {
    return event.ctrlKey && event.altKey && isKeyPressed(event, "p");
}

document.addEventListener(keydownEvent, function(event) {

    if (isShowPasswordHotkeyPressed(event)) {
        chrome.runtime.sendMessage({ action: "toggleInputFields" });
    }

    if (isDuplicateTabHotkeyPressed(event)) {
        // By default, in Chrome, this hotkey is mapped to another function. We want to override the show bookmark default behaviour.
        event.preventDefault();
        chrome.runtime.sendMessage({ action: "duplicateTab" });
    };
});

function isKeyPressed(event, key) {
    return event.key.toUpperCase() == key.toUpperCase();
}