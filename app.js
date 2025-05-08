document.getElementById("mode-toggle").addEventListener("click", () => {
  const body = document.body;
  const dark = body.style.backgroundColor === "rgb(255, 255, 255)";
  body.style.backgroundColor = dark ? "#0a0a0a" : "#fff";
  body.style.color = dark ? "#fff" : "#000";
});

function ajouterProfil() {
  const email = document.getElementById("emailInput").value;
  if (!email) return;
  const profileList = document.getElementById("profile-list");
  const profile = document.createElement("div");
  profile.textContent = `Profil : ${email}`;
  profile.className = "profile-box";
  profileList.appendChild(profile);
  document.getElementById("emailInput").value = "";
}

function switchTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}