# Simple-Stream-Chat
A lightweight desktop app to display Twitch and TikTok chat overlays side-by-side – ideal for multistreamers.

---

- [Simple-Stream-Chat](#simple-stream-chat)
  - [✨ Features](#-features)
  - [🚀 Getting Started](#-getting-started)
  - [🔧 Setup: Customize your Channels](#-setup-customize-your-channels)
  - [📦 Build Standalone App (optional)](#-build-standalone-app-optional)
  - [🧠 Notes](#-notes)
  - [💬 License](#-license)


---

## ✨ Features
- Display multiple Twitch chats simultaneously
- Show TikTok chat and gifts (via TikFinity)
- Easy customization for your own channels
- Electron-wrapped – works standalone on desktop
- Local Express server serving the chat frontend

---

## 🚀 Getting Started
1. Clone the repository
    ```bash
    git clone https://github.com/LNMedia/MultiChat.git
    cd MultiChat
2. Install dependencies
    ```bash
    npm install
3. Start the Electron app
    ```bash
    npm start
This will launch the Electron window and load your local chat interface.

---

## 🔧 Setup: Customize your Channels
In the HTML (interface.html), replace the placeholders

    <yourStreamusername> 
and 

    <yourTikfinityID>

with your actual stream/channel info:

    <iframe src="https://twitch.tv/embed/<yourStreamusername>/chat?parent=localhost"></iframe>

and 

    <iframe src="https://tikfinity.zerody.one/widget/chat?cid=<yourTikfinityID>"></iframe>
    <iframe src="https://tikfinity.zerody.one/widget/gifts?cid=<yourTikfinityID>" frameborder="0"></iframe>

You can duplicate or remove iframe blocks to fit your needs.

---

## 📦 Build Standalone App (optional)

You can package the app using *electron-builder*:
1. Install the tool (if not yet done)
    ```bash
    npm install --save-dev electron-builder
2. Add this to your package.json (should be done previously):
    ```
    "build": {
        "appId": "com.yourname.multichat",
        "productName": "MultiChat",
        "files": [
            "/*"
        ],
        "extraResources": [
            "resources/"
        ],
        "win": {
            "target": "nsis"
        }
    }
3. Run the build process:
    ```bash
    npm run build

This will generate a standalone Windows installer (or for your current platform) in the *dist/* folder.

---

## 🧠 Notes
- This app does not store or process any data. It simply embeds third-party chat widgets.
- You must update the usernames and IDs in the interface.html file before using it.
- For Twitch chat to load, you may need to configure the parent parameter in the iframe URLs (e.g., localhost, or your domain if deployed).
- TikFinity chat only works if you are currently live on TikTok and logged in on TikFinity.

---

## 💬 License
MIT – free to use, modify.

However, if you use or redistribute this software (in original or modified form), please give credit by mentioning the original author:

- Andreas R.
- [GitHub Profile](https://github.com/LNMedia) or [Domain](https://areimann.de)

A simple mention in your README, documentation, or about section is enough.
Commercial use is permitted, but proper attribution is expected and appreciated.

---

**Thanks for checking out MultiChat!**
If you find it useful or build something cool with it, I’d love to hear about it.
Feel free to contribute, share, or adapt it to your own needs — just don’t forget to credit. 😊