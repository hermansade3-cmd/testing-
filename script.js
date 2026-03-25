// ===== SADE BOOKS — Vitabu Bure Loader =====

// Emoji za cover kulingana na kichwa cha kitabu
function getEmoji(title) {
const t = title.toLowerCase();
if (t.includes('lishe') || t.includes('chakula') || t.includes('afya')) return '🥗';
if (t.includes('uzazi') || t.includes('mama') || t.includes('mtoto')) return '👶';
if (t.includes('biashara') || t.includes('fedha')) return '💼'; 
if (t.includes('financial') || t.includes('fedha')) return '💰';
if (t.includes('elimu') || t.includes('soma')) return '📚';
if (t.includes('dini') || t.includes('sala')) return '🕌';
if (t.includes('kilimo') || t.includes('shamba')) return '🌾';
if (t.includes('tiktok')) return '🎬';
return '📘';
}

// Jenga card
function buildCard(book, index) {

const emoji = getEmoji(book.title);
const delay = (index * 0.1).toFixed(1);

const filePath = book.file.startsWith('PDFs/') ? book.file : `PDFs/${book.file}`;

return `
<div style="display:flex;border-radius:18px;overflow:hidden;background:#0b3d91;color:white;box-shadow:0 6px 25px rgba(0,0,0,0.35);animation-delay:${delay}s">

<div style="width:110px;background:#1e5bff;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:14px;color:white">
<div style="font-size:32px">${emoji}</div>
<div style="font-size:10px;margin-top:6px;text-align:center">Herman Sade</div>
</div>

<div style="flex:1;padding:16px">

<div style="font-size:12px;opacity:0.8">📖 Vitabu vya Bure</div>

<div style="font-size:18px;font-weight:bold;margin:6px 0">
${book.title.replace(/_/g,' ').replace('.pdf','')}
</div>

<div style="font-size:14px;opacity:0.9;margin-bottom:10px">
${book.description}
</div>

<div style="display:flex;gap:10px">

<a href="${filePath}" target="_blank"
style="background:white;color:#0b3d91;padding:8px 14px;border-radius:20px;text-decoration:none;font-size:13px;font-weight:bold">
👁 Soma
</a>

<a href="${filePath}" download
style="border:2px solid white;color:white;padding:8px 14px;border-radius:20px;text-decoration:none;font-size:13px">
⬇ Pakua
</a>

</div>

</div>

</div>`;
}

// ===== LOAD BOOKS =====
(function loadBooks(){

const container = document.getElementById("books-container");

if(!container) return;

// COLUMN 1
container.style.display = "grid";
container.style.gridTemplateColumns = "1fr";
container.style.gap = "20px";
container.style.padding = "10px";

fetch("books.json")
.then(res => res.json())
.then(data => {

container.innerHTML = data.map((book,i)=>buildCard(book,i)).join("");

})
.catch(()=>{
container.innerHTML = "⚠️ Imeshindwa kupakia vitabu.";
});

})();
