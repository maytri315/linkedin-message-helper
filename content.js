// content.js
let profileData = {};

// Function to scrape data safely
function scrapeProfile() {
  const nameEl = document.querySelector('h1');
  const headlineEl = document.querySelector('.text-body-medium');

  const name = nameEl?.innerText.trim() || "";
  const headline = headlineEl?.innerText.trim() || "";

  if (name && name !== profileData.name) {
    profileData = { name, headline };
    chrome.storage.local.set({ lastProfile: profileData });
    console.log("Mahaul Helper: Captured profile for", name);
  }
}

// Generate a local suggestion message
function getLocalSuggestion(profile) {
  const name = profile?.name?.trim() || "there";
  const headline = profile?.headline?.trim() || "";

  let suggestion = `Hi ${name}, I came across your profile and wanted to connect.`;

  if (headline) {
    suggestion += ` I really liked your headline: "${headline}".`;
  }

  suggestion += " Looking forward to staying in touch!";
  return suggestion;
}

// Unified UI rendering function
function renderHelperUI(profile) {
  const suggestion = getLocalSuggestion(profile);

  // Avoid duplicate UI
  let div = document.getElementById('local-helper-ui');
  if (!div) {
    div = document.createElement('div');
    div.id = 'local-helper-ui';
    div.style.cssText = `
      position: fixed; bottom: 20px; right: 20px; width: 320px;
      background: #ffffff; border: 2px solid #0a66c2; border-radius: 12px;
      padding: 15px; z-index: 999999; box-shadow: 0 8px 24px rgba(0,0,0,0.2);
      font-family: system-ui, sans-serif; font-size: 14px; line-height: 1.4;
    `;
    if (document.body) {
      document.body.appendChild(div);
    } else {
      console.warn("Document body not available to append UI");
      return;
    }
  }

  // Render content
  div.innerHTML = `
    <div style="font-weight:bold; color:#0a66c2; margin-bottom:10px;">Local AI Draft</div>
    <div style="font-size:13px; color:#333; margin-bottom:12px; background:#f3f6f8; padding:8px; border-radius:6px;">${suggestion}</div>
    <button id="copy-helper-btn" style="width:100%; background:#0a66c2; color:white; border:none; padding:8px; border-radius:20px; cursor:pointer; font-weight:bold;">Copy Text</button>
    <button id="close-helper-btn" style="margin-top:8px; width:100%; background:#ccc; color:#333; border:none; padding:8px; border-radius:20px; cursor:pointer; font-weight:bold;">Close</button>
  `;

  // Attach listeners safely
  const copyBtn = document.getElementById('copy-helper-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(suggestion)
        .then(() => copyBtn.innerText = "Copied! ✅")
        .catch(err => console.error("Clipboard error:", err));
    });
  }

  const closeBtn = document.getElementById('close-helper-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      div.style.display = 'none';
    });
  }
}

// Example usage: scrape and render
scrapeProfile();
renderHelperUI(profileData);
