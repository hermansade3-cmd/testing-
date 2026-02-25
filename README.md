<!DOCTYPE html>
<html lang="sw">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>ZIMAMOTO PRO – Moduli 60</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<style>
  :root {
    --fire:#FF4500;--ember:#FF8C00;--gold:#FFD700;--smoke:#141414;--ash:#232323;
    --white:#f0ebe3;--green:#00ff88;--blue:#00bfff;--red:#ff2244;--purple:#bb44ff;--teal:#00ffcc;
  }
  *{margin:0;padding:0;box-sizing:border-box;}
  body{font-family:'Rajdhani',sans-serif;background:var(--smoke);color:var(--white);min-height:100vh;overflow-x:hidden;}

  .header{background:linear-gradient(135deg,#080808 0%,#1a0800 50%,#080808 100%);border-bottom:2px solid var(--fire);position:sticky;top:0;z-index:100;box-shadow:0 4px 30px rgba(255,69,0,0.45);}
  .header-inner{display:flex;align-items:center;justify-content:space-between;padding:10px 16px;}
  .logo{display:flex;align-items:center;gap:10px;}
  .logo-icon{width:42px;height:42px;background:var(--fire);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:22px;box-shadow:0 0 22px rgba(255,69,0,0.7);animation:pf 2s infinite;}
  @keyframes pf{0%,100%{box-shadow:0 0 22px rgba(255,69,0,0.7);}50%{box-shadow:0 0 38px rgba(255,140,0,1);}}
  .logo-title{font-family:'Bebas Neue',cursive;font-size:21px;color:var(--fire);letter-spacing:3px;}
  .logo-sub{font-family:'Share Tech Mono',monospace;font-size:9px;color:var(--ember);letter-spacing:2px;}
  .contact-badge{background:rgba(255,69,0,0.1);border:1px solid var(--fire);border-radius:6px;padding:5px 9px;font-family:'Share Tech Mono',monospace;font-size:8px;color:var(--ember);text-align:right;line-height:1.7;}
  .contact-badge b{color:var(--gold);}

  .stats-bar{display:flex;gap:8px;padding:8px 14px;background:#0a0a0a;border-bottom:1px solid #1e1e1e;overflow-x:auto;scrollbar-width:none;}
  .stats-bar::-webkit-scrollbar{display:none;}
  .stat-chip{flex-shrink:0;background:#1a1a1a;border:1px solid #2a2a2a;border-radius:20px;padding:3px 11px;font-family:'Share Tech Mono',monospace;font-size:10px;color:#888;display:flex;align-items:center;gap:5px;}
  .stat-chip span{color:var(--fire);font-weight:bold;}

  .search-bar{padding:8px 14px 10px;background:#0a0a0a;border-bottom:1px solid #1e1e1e;}
  .search-wrap{position:relative;}
  .search-wrap::before{content:'🔍';position:absolute;left:13px;top:50%;transform:translateY(-50%);font-size:15px;}
  .search-input{width:100%;background:#1c1c1c;border:1px solid #333;border-radius:8px;padding:9px 14px 9px 40px;color:var(--white);font-family:'Rajdhani',sans-serif;font-size:15px;outline:none;transition:border-color .3s;}
  .search-input:focus{border-color:var(--fire);box-shadow:0 0 10px rgba(255,69,0,.2);}
  .search-input::placeholder{color:#444;}

  .tabs{display:flex;background:#0c0c0c;border-bottom:1px solid #222;overflow-x:auto;scrollbar-width:none;}
  .tabs::-webkit-scrollbar{display:none;}
  .tab{flex-shrink:0;padding:9px 14px;font-family:'Share Tech Mono',monospace;font-size:10px;color:#555;cursor:pointer;border-bottom:2px solid transparent;transition:all .2s;white-space:nowrap;}
  .tab.active{color:var(--fire);border-bottom-color:var(--fire);background:rgba(255,69,0,.05);}
  .tab:hover{color:var(--ember);}

  .content{padding:12px;max-width:640px;margin:0 auto;}

  .module-card{background:var(--ash);border-radius:11px;margin-bottom:11px;overflow:hidden;border:1px solid #2e2e2e;transition:transform .2s,box-shadow .2s;cursor:pointer;}
  .module-card:hover{transform:translateY(-2px);box-shadow:0 8px 28px rgba(255,69,0,.18);}

  .card-header{display:flex;align-items:center;gap:12px;padding:14px;position:relative;overflow:hidden;}
  .card-header::before{content:'';position:absolute;right:-20px;top:-20px;width:90px;height:90px;border-radius:50%;opacity:.04;background:#fff;}
  .card-num{font-family:'Bebas Neue',cursive;font-size:32px;line-height:1;min-width:38px;color:rgba(255,255,255,.12);}
  .card-emoji{font-size:28px;flex-shrink:0;}
  .card-title-area{flex:1;}
  .card-title{font-family:'Bebas Neue',cursive;font-size:18px;letter-spacing:1.5px;line-height:1.1;}
  .card-subtitle{font-size:10px;color:#777;font-family:'Share Tech Mono',monospace;letter-spacing:1px;margin-top:2px;}
  .card-chev{font-size:17px;color:#444;transition:transform .3s;}
  .module-card.open .card-chev{transform:rotate(90deg);}

  /* color themes */
  .ch-fire{background:linear-gradient(135deg,#180600,#2a0e00);border-bottom:2px solid var(--fire);}
  .ch-fire .card-title{color:var(--fire);}
  .ch-ember{background:linear-gradient(135deg,#180d00,#2a1800);border-bottom:2px solid var(--ember);}
  .ch-ember .card-title{color:var(--ember);}
  .ch-gold{background:linear-gradient(135deg,#181300,#2a2000);border-bottom:2px solid var(--gold);}
  .ch-gold .card-title{color:var(--gold);}
  .ch-green{background:linear-gradient(135deg,#001809,#002a14);border-bottom:2px solid var(--green);}
  .ch-green .card-title{color:var(--green);}
  .ch-blue{background:linear-gradient(135deg,#000e18,#00182a);border-bottom:2px solid var(--blue);}
  .ch-blue .card-title{color:var(--blue);}
  .ch-red{background:linear-gradient(135deg,#180006,#2a000f);border-bottom:2px solid var(--red);}
  .ch-red .card-title{color:var(--red);}
  .ch-purple{background:linear-gradient(135deg,#0c0018,#180028);border-bottom:2px solid var(--purple);}
  .ch-purple .card-title{color:var(--purple);}
  .ch-teal{background:linear-gradient(135deg,#001816,#002a26);border-bottom:2px solid var(--teal);}
  .ch-teal .card-title{color:var(--teal);}

  .card-body{display:none;padding:0 14px 14px;animation:sd .3s ease;}
  .module-card.open .card-body{display:block;}
  @keyframes sd{from{opacity:0;transform:translateY(-8px);}to{opacity:1;transform:translateY(0);}}

  .sec{margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid #2a2a2a;}
  .sec:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0;}
  .sec-label{font-family:'Share Tech Mono',monospace;font-size:10px;letter-spacing:2px;color:#555;margin-bottom:7px;text-transform:uppercase;}
  .sec-text{font-size:14px;line-height:1.6;color:#bbb;}

  .tags{display:flex;flex-wrap:wrap;gap:5px;margin-top:5px;}
  .tag{padding:3px 9px;border-radius:4px;font-family:'Share Tech Mono',monospace;font-size:10px;border:1px solid;}
  .t-d{color:var(--red);border-color:rgba(255,34,68,.4);background:rgba(255,34,68,.07);}
  .t-i{color:var(--blue);border-color:rgba(0,191,255,.4);background:rgba(0,191,255,.07);}
  .t-s{color:var(--green);border-color:rgba(0,255,136,.4);background:rgba(0,255,136,.07);}
  .t-w{color:var(--gold);border-color:rgba(255,215,0,.4);background:rgba(255,215,0,.07);}
  .t-p{color:var(--purple);border-color:rgba(187,68,255,.4);background:rgba(187,68,255,.07);}

  .blist{list-style:none;}
  .blist li{padding:5px 0;font-size:14px;color:#bbb;display:flex;align-items:flex-start;gap:7px;}
  .blist li::before{content:'▸';color:var(--green);flex-shrink:0;margin-top:1px;}

  .alert-box{border-radius:6px;padding:9px 13px;margin-top:9px;font-size:12px;font-family:'Share Tech Mono',monospace;line-height:1.5;}
  .ab-c{background:rgba(255,34,68,.09);border-left:3px solid var(--red);color:#ff8899;}
  .ab-i{background:rgba(0,191,255,.09);border-left:3px solid var(--blue);color:#88ccff;}
  .ab-s{background:rgba(0,255,136,.09);border-left:3px solid var(--green);color:#88ffcc;}
  .ab-w{background:rgba(255,215,0,.09);border-left:3px solid var(--gold);color:#ffdd88;}

  table.dt{width:100%;border-collapse:collapse;margin-top:7px;}
  table.dt th{background:#111;padding:7px 9px;font-family:'Share Tech Mono',monospace;font-size:9px;color:#555;text-align:left;border-bottom:1px solid #2e2e2e;letter-spacing:1px;}
  table.dt td{padding:7px 9px;font-size:12px;border-bottom:1px solid #1e1e1e;color:#aaa;}
  table.dt tr:last-child td{border-bottom:none;}
  .db{display:inline-block;padding:2px 7px;border-radius:3px;font-family:'Bebas Neue',cursive;font-size:13px;letter-spacing:1px;}
  .da{background:#1a4a1a;color:#44ff88;}.db2{background:#1a1a4a;color:#4488ff;}
  .dc{background:#4a1a1a;color:#ff4444;}.dd{background:#3a2a0a;color:#ffaa22;}
  .dk{background:#2a1a3a;color:#cc88ff;}

  .contact-footer{background:linear-gradient(135deg,#0d0500,#1a0800);border:1px solid var(--fire);border-radius:12px;padding:18px;margin:20px 12px 14px;text-align:center;box-shadow:0 0 30px rgba(255,69,0,.15);}
  .contact-footer h3{font-family:'Bebas Neue',cursive;font-size:21px;color:var(--fire);letter-spacing:3px;margin-bottom:5px;}
  .contact-footer p{font-size:12px;color:#777;margin-bottom:13px;}
  .gmail-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px;}
  .gc{background:#1a1a1a;border:1px solid #2e2e2e;border-radius:8px;padding:11px 9px;cursor:pointer;transition:all .2s;text-decoration:none;display:block;}
  .gc:hover{border-color:var(--fire);background:rgba(255,69,0,.08);transform:scale(1.02);}
  .gc-icon{font-size:20px;margin-bottom:3px;}
  .gc-label{font-family:'Share Tech Mono',monospace;font-size:8px;color:#555;letter-spacing:1px;margin-bottom:3px;}
  .gc-email{font-family:'Share Tech Mono',monospace;font-size:8px;color:var(--gold);word-break:break-all;}

  .no-res{text-align:center;padding:40px 20px;color:#333;display:none;}
  .no-res.vis{display:block;}
  .scroll-top{position:fixed;bottom:18px;right:18px;width:42px;height:42px;background:var(--fire);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 20px rgba(255,69,0,.5);font-size:16px;transition:opacity .3s;opacity:0;pointer-events:none;}
  .scroll-top.vis{opacity:1;pointer-events:all;}

  @media(max-width:380px){.gmail-grid{grid-template-columns:1fr;}.card-title{font-size:16px;}}
</style>
</head>
<body>

<div class="header">
  <div class="header-inner">
    <div class="logo">
      <div class="logo-icon">🔥</div>
      <div>
        <div class="logo-title">ZIMAMOTO PRO</div>
        <div class="logo-sub">MWONGOZO WA DHARURA • MODULI 60</div>
      </div>
    </div>
    <div class="contact-badge">📧 MAWASILIANO<br><b>hermansade3@gmail.com</b></div>
  </div>
</div>

<div class="stats-bar">
  <div class="stat-chip">📚 Moduli <span>60</span></div>
  <div class="stat-chip">⚠️ Hatari <span>100+</span></div>
  <div class="stat-chip">✅ Mbinu <span>120+</span></div>
  <div class="stat-chip">🔥 Madaraja <span>5</span></div>
  <div class="stat-chip">🚒 ICS <span>Kamili</span></div>
  <div class="stat-chip">🌊 Majini <span>✓</span></div>
  <div class="stat-chip">☣️ HAZMAT <span>✓</span></div>
</div>

<div class="search-bar">
  <div class="search-wrap">
    <input class="search-input" id="srch" type="text" placeholder="Tafuta moduli yoyote kati ya 60..." oninput="filter()">
  </div>
</div>

<div class="tabs">
  <div class="tab active" onclick="tab('all',this)">🔥 ZOTE (60)</div>
  <div class="tab" onclick="tab('moto',this)">🔴 MOTO</div>
  <div class="tab" onclick="tab('uokoaji',this)">🟡 UOKOAJI</div>
  <div class="tab" onclick="tab('usalama',this)">🟢 USALAMA</div>
  <div class="tab" onclick="tab('matibabu',this)">🔵 MATIBABU</div>
  <div class="tab" onclick="tab('hazmat',this)">☣️ HAZMAT</div>
  <div class="tab" onclick="tab('amri',this)">📻 AMRI</div>
  <div class="tab" onclick="tab('elimu',this)">🎓 ELIMU</div>
</div>

<div class="content" id="list">

<!-- ═══════════════════════════════════════════════════════ -->
<!-- MODULI 1–12: ZILIZOPO AWALI (IMPROVED) -->
<!-- ═══════════════════════════════════════════════════════ -->

<div class="module-card" data-cat="moto" data-s="sayansi moto fire tetrahedron fuel heat oxygen flashover backdraft daraja">
  <div class="card-header ch-fire" onclick="tog(this)">
    <div class="card-num">01</div><div class="card-emoji">🔬</div>
    <div class="card-title-area"><div class="card-title">Misingi ya Sayansi ya Moto</div><div class="card-subtitle">FIRE SCIENCE • TETRAHEDRON</div></div>
    <div class="card-chev">›</div>
  </div>
  <div class="card-body">
    <div class="sec"><div class="sec-label">📖 MAELEZO</div><div class="sec-text">Moto hutokea pale vinapokutana: <b>Fuel</b> (kitu kinachowaka), <b>Heat</b> (joto), <b>Oxygen</b> (hewa), na <b>Chemical chain reaction</b>. Hii huitwa <em>Fire Tetrahedron</em>.</div></div>
    <div class="sec"><div class="sec-label">📊 MADARAJA</div>
      <table class="dt"><tr><th>DARAJA</th><th>AINA</th><th>MFANO</th></tr>
        <tr><td><span class="db da">A</span></td><td>Vitu vigumu</td><td>Mbao, nguo, karatasi</td></tr>
        <tr><td><span class="db db2">B</span></td><td>Vimiminika</td><td>Petroli, rangi, dizeli</td></tr>
        <tr><td><span class="db dc">C</span></td><td>Gesi zinazowaka</td><td>LPG, methane, propane</td></tr>
        <tr><td><span class="db dd">D</span></td><td>Metali zinazowaka</td><td>Magnesium, sodium</td></tr>
        <tr><td><span class="db dk">K/F</span></td><td>Mafuta ya kupikia</td><td>Mafuta ya jikoni</td></tr>
      </table>
    </div>
    <div class="sec"><div class="sec-label">⚠️ HATARI</div><div class="tags"><span class="tag t-d">💥 Flashover</span><span class="tag t-d">💨 Backdraft</span><span class="tag t-d">🔴 Mlipuko wa Gesi</span></div></div>
    <div class="sec"><div class="sec-label">✅ MBINU BORA</div><ul class="blist"><li>Soma tabia ya moshi kabla ya kuingia</li><li>Punguza joto na zuia oxygen au fuel</li></ul></div>
  </div>
</div>

<div class="module-card" data-cat="moto" data-s="mbinu kuzimia suppression direct indirect transitional foam attack">
  <div class="card-header ch-ember" onclick="tog(this)">
    <div class="card-num">02</div><div class="card-emoji">🚿</div>
    <div class="card-title-area"><div class="card-title">Mbinu za Kuzimia Moto</div><div class="card-subtitle">FIRE SUPPRESSION • TACTICS</div></div>
    <div class="card-chev">›</div>
  </div>
  <div class="card-body">
    <div class="sec"><div class="sec-label">📖 MAELEZO</div><div class="tags"><span class="tag t-i">Direct Attack</span><span class="tag t-i">Indirect Attack</span><span class="tag t-i">Transitional Attack</span><span class="tag t-w">Foam</span></div></div>
    <div class="sec"><div class="sec-label">🔍 UCHAMBUZI</div><div class="sec-text">Mkakati hutegemea: ukubwa wa moto, muundo wa jengo, na hatari ya kuanguka.</div></div>
    <div class="sec"><div class="sec-label">⚠️ HATARI</div><div class="tags"><span class="tag t-d">🏚️ Kuanguka kwa Jengo</span><span class="tag t-d">🌫️ Steam Burns</span><span class="tag t-d">💥 Mlipuko</span></div></div>
    <div class="sec"><div class="sec-label">✅ MBINU BORA</div><ul class="blist"><li>Fanya <b>size-up</b> kabla ya kuingia</li><li>Dumisha teamwork daima</li></ul></div>
  </div>
</div>

<div class="module-card" data-cat="usalama" data-s="usalama askari zimamoto ppe scba mayday accountability rule air">
  <div class="card-header ch-green" onclick="tog(this)">
    <div class="card-num">03</div><div class="card-emoji">🛡️</div>
    <div class="card-title-area"><div class="card-title">Usalama wa Askari wa Zimamoto</div><div class="card-subtitle">FIREFIGHTER SAFETY • PPE</div></div>
    <div class="card-chev">›</div>
  </div>
  <div class="card-body">
    <div class="sec"><div class="sec-label">📖 MAELEZO</div><div class="tags"><span class="tag t-s">🦺 PPE Kamili</span><span class="tag t-s">😷 SCBA</span><span class="tag t-w">📻 Mayday Procedure</span></div></div>
    <div class="sec"><div class="sec-label">🔍 UCHAMBUZI</div><div class="sec-text">Vifo vingi husababishwa na kuvuta moshi na kupotea ndani ya jengo. Usijaribu uokoaji peke yako.</div></div>
    <div class="sec"><div class="sec-label">⚠️ HATARI</div><div class="tags"><span class="tag t-d">💨 Kukosa Hewa</span><span class="tag t-d">😵 Disorientation</span><span class="tag t-d">🏚️ Structural Collapse</span></div></div>
    <div class="sec"><div class="sec-label">✅ MBINU BORA</div><ul class="blist"><li>Rule of Air Management – rudi na 33% ya hewa iliyobaki</li><li>Tumia Accountability system wakati wote</li></ul></div>
  </div>
</div>

<div class="module-card" data-cat="uokoaji" data-s="uokoaji majengo structural rescue search ventilation thermal primary secondary">
  <div class="card-header ch-gold" onclick="tog(this)">
    <div class="card-num">04</div><div class="card-emoji">🏗️</div>
    <div class="card-title-area"><div class="card-title">Uokoaji wa Majengo</div><div class="card-subtitle">STRUCTURAL RESCUE • SEARCH</div></div>
    <div class="card-chev">›</div>
  </div>
  <div class="card-body">
    <div class="sec"><div class="sec-label">📖 MAELEZO</div><div class="tags"><span class="tag t-w">🔍 Primary Search</span><span class="tag t-w">🔍 Secondary Search</span><span class="tag t-i">🌬️ Ventilation</span></div></div>
    <div class="sec"><div class="sec-label">🔍 UCHAMBUZI</div><div class="sec-text">Ventilation isiyodhibitiwa huongeza kasi ya moto. Tumia TIC kugundua maisha haraka.</div></div>
    <div class="sec"><div class="sec-label">⚠️ HATARI</div><div class="tags"><span class="tag t-d">⬇️ Sakafu Kudidimia</span><span class="tag t-d">🌑 Zero Visibility</span></div></div>
    <div class="sec"><div class="sec-label">✅ MBINU BORA</div><ul class="blist"><li>Oriented Search – shikilia kamba ya mwelekeo</li><li>Thermal Imaging Camera (TIC) kupata maisha</li></ul></div>
  </div>
</div>

<div class="module-card" data-cat="uokoaji" data-s="ajali barabarani vehicle rescue extrication stabilization cribbing betri airbag">
  <div class="card-header ch-red" onclick="tog(this)">
    <div class="card-num">05</div><div class="card-emoji">🚗</div>
    <div class="card-title-area"><div class="card-title">Uokoaji wa Ajali za Barabarani</div><div class="card-subtitle">VEHICLE RESCUE • EXTRICATION</div></div>
    <div class="card-chev">›</div>
  </div>
  <div class="card-body">
    <div class="sec"><div class="sec-label">📖 MAELEZO</div><div class="tags"><span class="tag t-i">🛡️ Scene Safety</span><span class="tag t-w">🔧 Stabilization</span><span class="tag t-s">🦾 Extrication Tools</span></div></div>
    <div class="sec"><div class="sec-label">🔍 UCHAMBUZI</div><div class="sec-text">Ajali huhitaji uratibu wa Fire, Polisi, na EMS. Gari la hybrid lina hatari ya ziada kutoka betri kubwa.</div></div>
    <div class="sec"><div class="sec-label">⚠️ HATARI</div><div class="tags"><span class="tag t-d">⛽ Mafuta Kuvuja</span><span class="tag t-d">💥 Airbag Ghafla</span><span class="tag t-d">⚡ Betri ya Hybrid</span></div></div>
    <div class="sec"><div class="sec-label">✅ MBINU BORA</div><ul class="blist"><li>Zima betri ya gari mara moja</li><li>Tumia Cribbing kutuliza gari</li></ul></div>
  </div>
</div>

<div class="module-card" data-cat="uokoaji" data-s="uokoaji majini maji water rescue hypothermia reach throw row go swift">
  <div class="card-header ch-blue" onclick="tog(this)">
    <div class="card-num">06</div><div class="card-emoji">🌊</div>
    <div class="card-title-area"><div class="card-title">Uokoaji wa Majini</div><div class="card-subtitle">WATER RESCUE • SWIFT WATER</div></div>
    <div class="card-chev">›</div>
  </div>
  <div class="card-body">
    <div class="sec"><div class="sec-label">📖 KANUNI</div><div class="alert-box ab-i">🔵 REACH → THROW → ROW → GO – Fuata mpangilio huu daima</div></div>
    <div class="sec"><div class="sec-label">🔍 UCHAMBUZI</div><div class="sec-text">Mwokoaji asigeuke mwathirika. Hatua moja ya haraka isiyopangwa inaweza kusababisha maisha mawili kupotea.</div></div>
    <div class="sec"><div class="sec-label">⚠️ HATARI</div><div class="tags"><span class="tag t-d">🥶 Hypothermia</span><span class="tag t-d">🌀 Mikondo Mikali</span><span class="tag t-d">🌑 Usiku</span></div></div>
    <div class="sec"><div class="sec-label">✅ MBINU BORA</div><ul class="blist"><li>Kuwa na Backup Team daima</li><li>Tathmini kina na mwendo wa maji kwanza</li></ul></div>
  </div>
</div>

<div class="module-card" data-cat="uokoaji" data-s="high angle confined space rope rescue tri
