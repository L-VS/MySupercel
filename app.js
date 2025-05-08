window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');

    // Question pré-écrite pour Perplexity
    const question = encodeURIComponent("Quelles sont les dernières news et cadeaux de Supercell ?");
    document.getElementById('news-frame').src = `https://www.perplexity.ai/search?q=${question}`;
  }, 2000);
});

function openTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.classList.add('hidden'));
  document.getElementById(tabId).classList.remove('hidden');
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
