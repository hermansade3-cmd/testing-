// ===== SADE BOOKS — Vitabu Bure Loader =====
// Gradient colors zinazobadilika kwa kila kitabu
const GRADIENTS = ['bg-green', 'bg-blue', 'bg-purple', 'bg-gold', 'bg-rose', 'bg-teal'];

// Emoji za cover kulingana na kichwa cha kitabu
function getEmoji(title) {
    const t = title.toLowerCase();
    if (t.includes('lishe') || t.includes('chakula') || t.includes('afya')) return '🥗';
    if (t.includes('uzazi') || t.includes('mama')  || t.includes('mtoto')) return '👶';
    if (t.includes('biashara') || t.includes('fedha')) return '💼';
    if (t.includes('elimu')  || t.includes('soma'))  return '📚';
    if (t.includes('dini')   || t.includes('sala'))  return '🕌';
    if (t.includes('kilimo') || t.includes('shamba')) return '🌾';
    return '📘'; // default
}

// Jenga HTML ya card moja
function buildCard(book, index) {
    const grad  = GRADIENTS[index % GRADIENTS.length];
    const emoji = getEmoji(book.title);
    const delay = (index * 0.1).toFixed(1);

    // Jibu la bei
    const priceTag = book.price === 'BURE'
        ? '<span class="bure-tag green">🎁 Bure Kabisa</span>'
        : `<span class="bure-tag">💰 ${book.price}</span>`;

    // Link salama — ikiwa file path tayari ina PDFs/ usiiongeze tena
    const filePath = book.file.startsWith('PDFs/') ? book.file : `PDFs/${book.file}`;

    return `
    <div class="bure-card" style="animation-delay:${delay}s">
        <!-- Cover -->
        <div class="bure-cover ${grad}">
            <div class="bure-badge">BURE</div>
            <div class="bure-emoji">${emoji}</div>
            <div class="bure-line"></div>
            <div class="bure-cover-name">${book.title.replace(/_/g, ' ').replace('.pdf','')}</div>
            <div class="bure-author-name">Herman Sade</div>
        </div>

        <!-- Maelezo -->
        <div class="bure-body">
            <div>
                <div class="bure-cat">📖 Vitabu vya Bure</div>
                <div class="bure-title">${book.title.replace(/_/g, ' ').replace('.pdf','')}</div>
                <div class="bure-desc">${book.description}</div>
                <div class="bure-tags">
                    <span class="bure-tag">📄 PDF</span>
                    ${priceTag}
                </div>
            </div>

            <!-- Vitufe -->
            <div class="bure-actions">
                <a href="${filePath}" target="_blank" class="bure-btn-read">
                    👁 Soma Sasa
                </a>
                <a href="${filePath}" download="${book.file.split('/').pop()}" class="bure-btn-dl">
                    ⬇️ Pakua Bure
                </a>
            </div>
        </div>
    </div>`;
}

// ===== MAIN — Fetch na onyesha vitabu =====
(function loadBooks() {
    const container = document.getElementById('books-container');
    if (!container) return;

    fetch('books.json')
        .then(res => {
            if (!res.ok) throw new Error('Imeshindwa kupakua books.json');
            return res.json();
        })
        .then(data => {
            if (!data || data.length === 0) {
                container.innerHTML = '<div class="bure-error">📭 Hakuna vitabu bado. Rudi hivi karibuni!</div>';
                return;
            }

            // Chuja vitabu vya BURE tu (au onyesha vyote ikiwa hakuna BURE)
            const bure = data.filter(b => b.price === 'BURE');
            const vitabu = bure.length > 0 ? bure : data;

            container.innerHTML = vitabu.map((book, i) => buildCard(book, i)).join('');
        })
        .catch(err => {
            console.error('Kosa:', err);
            container.innerHTML = `
                <div class="bure-error">
                    ⚠️ Imeshindwa kupakia vitabu.<br>
                    <small style="opacity:0.6;">Hakikisha books.json ipo kwenye folder sahihi.</small>
                </div>`;
        });
})();
          
