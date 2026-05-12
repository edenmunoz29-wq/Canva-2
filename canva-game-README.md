# 🎨 4 Pics 1 Word — Canva Edition

An interactive browser-based guessing game themed around Canva design terms. Perfect for brownbag sessions, team icebreakers, and Canva training workshops!

## 🎮 How to Play

1. Look at the **4 picture clues**
2. Tap the **letter tiles** to spell your answer
3. Watch out for **3 decoy letters** — not all tiles are needed!
4. Use **Reveal** if you're stuck
5. Score points for every correct answer across all 10 rounds

## 📝 Word List (New Set)

| # | Word | Hint |
|---|------|------|
| 1 | TEXT | Add words to your design |
| 2 | IMAGE | A photo or graphic in Canva |
| 3 | CROP | Trim your image in Canva |
| 4 | DESIGN | What you create in Canva |
| 5 | SHAPE | Circle, square, triangle in Canva |
| 6 | ICON | Small graphic symbol in Canva |
| 7 | THEME | Overall look of your Canva design |
| 8 | PAGE | One slide in your Canva project |
| 9 | COPY | Duplicate something in Canva |
| 10 | RESIZE | Change canvas dimensions |

## 🚀 Running on GitHub Pages

1. **Fork or upload** this repo to your GitHub account
2. Go to **Settings → Pages**
3. Under *Source*, select **Deploy from a branch → main → / (root)**
4. Click **Save**
5. Your game will be live at:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME
   ```

## 📁 File Structure

```
canva-4pics1word/
├── index.html   ← Main HTML file
├── style.css    ← All styles & animations
├── game.js      ← Game logic & word data
└── README.md    ← This file
```

## 🛠 Customizing

To add or change words, edit the `ROUNDS` array in `game.js`:

```js
{
  word: "LAYER",
  hint: "5 letters — stack elements in Canva",
  decoys: ["X", "Q", "Z"],   // exactly 3 decoy letters
  pics: [
    { label: "stacked", svg: `<svg>...</svg>` },
    { label: "overlap", svg: `<svg>...</svg>` },
    { label: "order",   svg: `<svg>...</svg>` },
    { label: "depth",   svg: `<svg>...</svg>` }
  ]
}
```

## 💡 Tips for Presenters

- Open the game URL in your browser and **share your screen**
- You control the tiles — let the group shout out answers
- Use **Reveal** to move the pace along if a round takes too long
- Rounds are **shuffled** each play-through so it stays fresh

---

Made with ❤️ for Canva brownbag sessions
