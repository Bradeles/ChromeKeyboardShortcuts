Documentation about the nuances of chrome extensions.

Background Servies:
- Run in the background and handle events.
- Background workers do not have access to the DOM. They are concerned with the wider context of your browser rather than the particular page you are on.
- In manifest V3, only one service worker may be registered in the manifest. However, V3 supports imports if you define "type": "module". This helps for seperating concerns.

Content Scripts:
- Many content scripts may be registered.
- Run inside web pages and can manipulate the DOM.
- Seperating files that need access to the DOM is challenging. Content scripts cannot talk to eachother directly using chrome.runtime. A common pattern to seperate content files is to send a message to a relay, registered as a background service. That worker can then query the active tab, and send a message back to another content file to be recieved by a listener using chrome.tabs. ShowPassword is a working example of this.