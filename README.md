# LinkedIn Message Helper 🚀

A lightweight Chrome Extension designed to streamline professional networking. It automatically captures LinkedIn profile data and suggests personalized ice-breakers for your messaging threads.

## ✨ Features
- **Profile Scraper**: Automatically saves the Name, Headline, and About section of profiles you visit.
- **Message Generator**: Creates custom connection requests or follow-up messages based on the user's role.
- **Floating UI**: A sleek, non-intrusive suggestion box appears when you open a LinkedIn message thread.
- **Local Storage**: All data stays on your machine—no external servers or API costs.

## 🛠️ Installation
1. Clone this repository or download the ZIP.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the extension folder.

## 📁 Project Structure
- `manifest.json`: Extension configuration and permissions.
- `content.js`: The "brain" that scrapes profiles and injects the UI.
- `popup.html/js`: The dashboard you see when clicking the extension icon.
- `icons/`: Essential brand assets (16x16, 48x48, 128x128).

## 🚀 How to use
1. Visit any LinkedIn profile.
2. Look for the "Profile captured" log in your console.
3. Go to your Messaging tab or click "Message" on a profile.
4. Use the suggested text to start your conversation!

## 📜 License
MIT