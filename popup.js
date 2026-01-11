document.addEventListener('DOMContentLoaded', () => {
  const nameEl = document.getElementById('profile-name');
  const headlineEl = document.getElementById('profile-headline');

  // Fetch the data we saved in content.js
  chrome.storage.local.get('lastProfile', (result) => {
    if (result.lastProfile) {
      nameEl.innerText = result.lastProfile.name || "Unknown Name";
      headlineEl.innerText = result.lastProfile.headline || "No Headline Found";
    }
  });
});