// ── Round data ──────────────────────────────────────────────────────────────

const ROUNDS = [
  {
    word: "TEXT",
    hint: "4 letters — add words to your design",
    decoys: ["Q", "X", "Z"],
    pics: [
      { label: "writing", svg: `<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` },
      { label: "letters", svg: `<svg viewBox="0 0 24 24"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>` },
      { label: "words", svg: `<svg viewBox="0 0 24 24"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>` },
      { label: "characters", svg: `<svg viewBox="0 0 24 24"><path d="M3 7V5h8v2"/><path d="M7 5v14"/><path d="M13 13v-2h6v2"/><path d="M16 11v10"/></svg>` }
    ]
  },
  {
    word: "IMAGE",
    hint: "5 letters — a photo or graphic in Canva",
    decoys: ["T", "X", "Z"],
    pics: [
      { label: "picture", svg: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>` },
      { label: "capture", svg: `<svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>` },
      { label: "photo file", svg: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><rect x="8" y="13" width="8" height="6" rx="1"/></svg>` },
      { label: "scenery", svg: `<svg viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/><path d="M3 15l5-5 4 4 3-3 6 6"/><circle cx="8" cy="8" r="1.5"/></svg>` }
    ]
  },
  {
    word: "CROP",
    hint: "4 letters — trim your image in Canva",
    decoys: ["X", "Z", "B"],
    pics: [
      { label: "trim edges", svg: `<svg viewBox="0 0 24 24"><polyline points="6.13 1 6 16a2 2 0 0 0 2 2h15"/><polyline points="1 6.13 16 6a2 2 0 0 1 2 2v15"/></svg>` },
      { label: "cut it", svg: `<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>` },
      { label: "resize", svg: `<svg viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>` },
      { label: "border", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2"/><rect x="7" y="7" width="10" height="10" rx="1"/></svg>` }
    ]
  },
  {
    word: "DESIGN",
    hint: "6 letters — what you create in Canva",
    decoys: ["T", "X", "Q"],
    pics: [
      { label: "creative work", svg: `<svg viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="10.5" r="2.5"/><circle cx="8.5" cy="7.5" r="2.5"/><circle cx="6.5" cy="12.5" r="2.5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125C12.92 19.838 12.772 19.475 12.772 19A1.64 1.64 0 0 1 14.44 17.332h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>` },
      { label: "art", svg: `<svg viewBox="0 0 24 24"><path d="M7 16.17A5 5 0 0 1 2 11V5l5-2 5 2v6a5 5 0 0 1-5 5.17z"/><path d="M12 5l5-2 5 2v6a5 5 0 0 1-5 5.17"/><path d="M12 12v9"/></svg>` },
      { label: "craft", svg: `<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` },
      { label: "canvas work", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>` }
    ]
  },
  {
    word: "SHAPE",
    hint: "5 letters — circle, square, triangle in Canva",
    decoys: ["T", "X", "Z"],
    pics: [
      { label: "round form", svg: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>` },
      { label: "box", svg: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>` },
      { label: "polygon", svg: `<svg viewBox="0 0 24 24"><polygon points="12 2 22 20 2 20"/></svg>` },
      { label: "geometry", svg: `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>` }
    ]
  },
  {
    word: "ICON",
    hint: "4 letters — small graphic symbol in Canva",
    decoys: ["X", "Z", "B"],
    pics: [
      { label: "small symbol", svg: `<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>` },
      { label: "graphic mark", svg: `<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>` },
      { label: "visual cue", svg: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>` },
      { label: "tiny image", svg: `<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>` }
    ]
  },
  {
    word: "THEME",
    hint: "5 letters — overall look of your Canva design",
    decoys: ["S", "X", "Q"],
    pics: [
      { label: "style", svg: `<svg viewBox="0 0 24 24"><path d="M11 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="11 2 11 9 18 9"/></svg>` },
      { label: "vibe", svg: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>` },
      { label: "visual feel", svg: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>` },
      { label: "aesthetic", svg: `<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9M12 3v9l4-4"/></svg>` }
    ]
  },
  {
    word: "PAGE",
    hint: "4 letters — one slide in your Canva project",
    decoys: ["X", "Z", "Q"],
    pics: [
      { label: "single sheet", svg: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>` },
      { label: "one slide", svg: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>` },
      { label: "document", svg: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>` },
      { label: "canvas view", svg: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>` }
    ]
  },
  {
    word: "COPY",
    hint: "4 letters — duplicate something in Canva",
    decoys: ["X", "Z", "B"],
    pics: [
      { label: "duplicate", svg: `<svg viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>` },
      { label: "clone", svg: `<svg viewBox="0 0 24 24"><path d="M8 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/><rect x="11" y="11" width="10" height="10" rx="2"/></svg>` },
      { label: "paste", svg: `<svg viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>` },
      { label: "repeat", svg: `<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>` }
    ]
  },
  {
    word: "RESIZE",
    hint: "6 letters — change canvas dimensions in Canva",
    decoys: ["T", "Q", "X"],
    pics: [
      { label: "make bigger", svg: `<svg viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>` },
      { label: "dimensions", svg: `<svg viewBox="0 0 24 24"><path d="M21 3H3v18h18V3z"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>` },
      { label: "measurements", svg: `<svg viewBox="0 0 24 24"><line x1="19" y1="5" x2="5" y2="19"/><line x1="5" y1="5" x2="19" y2="19"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>` },
      { label: "scale", svg: `<svg viewBox="0 0 24 24"><path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>` }
    ]
  }
];

// ── State ────────────────────────────────────────────────────────────────────

let cur = 0, score = 0, guessed = [], tiles = [], msg = "", msgType = "", done = false, order = [];

// ── Helpers ──────────────────────────────────────────────────────────────────

const shuffle = a => [...a].sort(() => Math.random() - 0.5);

function buildTiles() {
  const r = ROUNDS[order[cur]];
  const wordTiles  = r.word.split("").map(l => ({ l, used: false, decoy: false }));
  const decoyTiles = r.decoys.map(l => ({ l, used: false, decoy: true }));
  return shuffle([...wordTiles, ...decoyTiles]);
}

// ── Setup ────────────────────────────────────────────────────────────────────

function initGame() {
  order = shuffle(ROUNDS.map((_, i) => i));
  cur = 0; score = 0; done = false;
  setupRound();
}

function setupRound() {
  guessed = Array(ROUNDS[order[cur]].word.length).fill(null);
  tiles   = buildTiles();
  msg     = ""; msgType = "";
}

// ── Render ───────────────────────────────────────────────────────────────────

function draw() {
  const app = document.getElementById("app");

  if (done) {
    const total   = score;
    const max     = ROUNDS.length;
    const emoji   = total === max ? "🏆" : total >= max * 0.7 ? "🎉" : "👏";
    const caption = total === max
      ? "Perfect! You really know your Canva!"
      : total >= max * 0.7
      ? "Great job! Nice Canva knowledge!"
      : "Good effort! Keep exploring Canva!";

    app.innerHTML = `
      <div class="end">
        <div class="trophy">${emoji}</div>
        <div class="final-score">${total}/${max}</div>
        <div class="final-sub">${caption}</div>
        <button class="btn-restart" onclick="restart()">🔄 Play Again</button>
      </div>`;
    return;
  }

  const r    = ROUNDS[order[cur]];
  const pips = ROUNDS.map((_, i) => {
    const cls = i < cur ? "pip done" : i === cur ? "pip active" : "pip";
    return `<div class="${cls}"></div>`;
  }).join("");

  const boxes = guessed.map((g, i) => {
    const state = g
      ? (msgType === "ok" ? " correct" : msgType === "no" ? " wrong" : " filled")
      : "";
    return `<div class="box${state}" onclick="rem(${i})">${g || ""}</div>`;
  }).join("");

  const tileHTML = tiles.map((t, i) =>
    `<div class="tile${t.used ? " used" : ""}${t.decoy ? " decoy" : ""}" onclick="pick(${i})">${t.l}</div>`
  ).join("");

  app.innerHTML = `
    <div class="game-card">
      <div class="topbar">
        <div class="round-lbl">Round ${cur + 1} / ${ROUNDS.length}</div>
        <div class="score-chip"><span class="star">★</span> ${score} pts</div>
      </div>
      <div class="pip-row">${pips}</div>
      <div class="pics">
        ${r.pics.map(p => `
          <div class="pic">
            ${p.svg}
            <div class="pic-lbl">${p.label}</div>
          </div>`).join("")}
      </div>
      <div class="hint">💡 ${r.hint}</div>
      <div class="decoy-warn">⚠️ 3 decoy letters included — not all are needed!</div>
      <div class="answer-row">${boxes}</div>
      <div class="tiles-lbl">Tap a letter to fill in your answer</div>
      <div class="tiles">${tileHTML}</div>
      <div class="btns">
        <button class="btn" onclick="clr()">🗑 Clear</button>
        <button class="btn btn-reveal" onclick="reveal()">💡 Reveal</button>
      </div>
      <div class="msg ${msgType === "ok" ? "ok" : msgType === "no" ? "no" : "info"}">${msg}</div>
    </div>`;
}

// ── Actions ──────────────────────────────────────────────────────────────────

function pick(i) {
  if (tiles[i].used) return;
  const slot = guessed.indexOf(null);
  if (slot === -1) return;
  guessed[slot] = tiles[i].l;
  tiles[i].used = true;
  msg = ""; msgType = "";
  draw();
  if (!guessed.includes(null)) setTimeout(check, 180);
}

function rem(i) {
  if (!guessed[i]) return;
  const l = guessed[i];
  guessed[i] = null;
  const ti = tiles.findIndex(t => t.l === l && t.used);
  if (ti !== -1) tiles[ti].used = false;
  msg = ""; msgType = "";
  draw();
}

function clr() {
  guessed.forEach(g => {
    if (g) {
      const ti = tiles.findIndex(t => t.l === g && t.used);
      if (ti !== -1) tiles[ti].used = false;
    }
  });
  guessed  = Array(ROUNDS[order[cur]].word.length).fill(null);
  msg      = ""; msgType = "";
  draw();
}

function check() {
  if (guessed.join("") === ROUNDS[order[cur]].word) {
    score++;
    msg = "🎉 Correct!"; msgType = "ok";
    draw();
    spawnConfetti();
    setTimeout(next, 1300);
  } else {
    msg = "❌ Try again!"; msgType = "no";
    draw();
    setTimeout(() => { msg = ""; msgType = ""; draw(); }, 900);
  }
}

function reveal() {
  msg = "✨ Answer: " + ROUNDS[order[cur]].word;
  msgType = "info";
  draw();
  setTimeout(next, 1800);
}

function next() {
  if (cur >= ROUNDS.length - 1) {
    done = true;
  } else {
    cur++;
    setupRound();
  }
  draw();
}

function restart() {
  initGame();
  draw();
}

// ── Confetti ─────────────────────────────────────────────────────────────────

function spawnConfetti() {
  const colors = ["#7C3AED", "#0891B2", "#EC4899", "#059669", "#F59E0B", "#fff"];
  const wrap   = document.createElement("div");
  wrap.className = "confetti-wrap";
  document.body.appendChild(wrap);

  for (let i = 0; i < 50; i++) {
    const p   = document.createElement("div");
    const sz  = 6 + Math.random() * 8;
    p.className = "cp";
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top: -12px;
      width: ${sz}px;
      height: ${sz}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation: fall ${1.2 + Math.random() * 0.8}s linear ${Math.random() * 0.5}s forwards;
    `;
    wrap.appendChild(p);
  }

  setTimeout(() => wrap.remove(), 2800);
}

// ── Boot ─────────────────────────────────────────────────────────────────────
initGame();
draw();
