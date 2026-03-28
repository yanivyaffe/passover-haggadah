# Passover Haggadah — Family Seder Website

An interactive digital Haggadah for the family Passover seder, styled as a **Windows 95 desktop**. Every section of the seder opens as a draggable, resizable window on a teal desktop. The whole night — readings, songs, wine tracking, games — lives inside this one page.

---

## What It Does

### The Desktop
The app looks and feels like a 90s PC. The desktop has two groups of program icons:

- **Utils** (left column): special interactive tools
- **Seder** (right area): the 14 seder steps in order, numbered `01_Kadesh` through `14_Nirtzah`

Double-click any icon to open its window. Windows can be dragged, resized, minimized to the taskbar, and stacked on top of each other. A clock and Start button sit in the taskbar at the bottom.

### The Four Special Programs

| Program | What it does |
|---|---|
| `Registration.exe` | Everyone at the table enters their name and picks a Passover avatar icon. Once an icon is claimed, it's greyed out for others. |
| `WineCounter.exe` | Tracks the four cups of wine. Click a cup to fill it purple. A character next to the cups gets progressively drunker as cups are filled. |
| `SederPlate.exe` | An illustrated seder plate. Click any of the six items (maror, charoset, karpas, zeroah, beitzah, chazeret) to get a popup explaining what it represents. |
| `Games.exe` | A 7-question Passover trivia game with a fun fact after each answer. |

### The 14 Seder Steps
Each step opens as a window with the full reading, Hebrew text, transliterations, and instructions. The steps in order:

1. Kadesh — Kiddush & first cup of wine
2. Urchatz — Handwashing (no blessing)
3. Karpas — Dip the greens
4. Yachatz — Break the middle matzah
5. Maggid — Tell the Exodus story (longest step; includes the Four Questions, Ten Plagues, Dayenu)
6. Rachtzah — Handwashing with blessing
7. Motzi-Matzah — Eat the matzah
8. Maror — Eat the bitter herbs
9. Korech — The Hillel sandwich
10. Shulchan Orech — Dinner!
11. Tzafun — Find and eat the afikomen
12. Barech — Grace after meals, Elijah's cup, third cup of wine
13. Hallel — Songs of praise (Dayenu, Chad Gadya, Echad Mi Yodea via YouTube)
14. Nirtzah — Conclusion, L'Shanah Haba'ah!

### Reader Assignment
After everyone registers in `Registration.exe`, every reading section throughout the seder automatically shows who is responsible for reading it. Assignments follow a consistent round-robin loop through the registered participants — slot 0 → person 1, slot 1 → person 2, and so on, cycling back to the start. There are 33 reading slots spread across the 14 steps.

### Session Persistence
All state — who registered, wine count, which windows are open and where — is saved to `localStorage` automatically. If the laptop sleeps or the browser closes mid-seder, reopening the page restores everything exactly as it was.

---

## How to Run

**Prerequisites:** [Node.js](https://nodejs.org) v18 or higher.

```bash
git clone https://github.com/yanivyaffe/passover-haggadah.git
cd passover-haggadah
npm install
npm run dev
```

Open `http://localhost:5173` on the laptop at the seder table.

---

## How to Use at the Seder

1. **Start with `Registration.exe`** — pass the laptop around and have each person type their name and click their avatar. Icons can't be shared.
2. **Work through the seder steps in order** — double-click each numbered icon on the desktop.
3. **Look for your avatar** in the yellow reader badge at the top of each section — that's your cue to read.
4. **Fill the wine cups** in `WineCounter.exe` at the appropriate steps (Kadesh, Maggid, Barech, Hallel).
5. **Explore `SederPlate.exe`** any time to explain what's on the plate.
6. **Play `Games.exe`** during dinner or between steps.

---

## Participant Icons

There are 10 avatar options. All images are in `public/icons/`:

| Icon ID | File | Label |
|---|---|---|
| matzah | matzah.png | Matzah |
| cup | wine-glasses.png | Kiddush Cup |
| lamb | zeroa.png | Shank Bone |
| herbs | freedom.png | Freedom |
| scroll | torah.png | Torah |
| moses | moses_10292688.png | Moses |
| sheep | lamb.png | Lamb |
| frog | frog_6256351.png | Frog |
| locust | locust.png | Locust |
| pharaoh | pharaoh_5156289.png | Pharaoh |

To swap in a different image, replace the file in `public/icons/` and update the `src` path in `src/config/sederConfig.js`.

---

## Editing Content

Everything content-related lives in **`src/config/sederConfig.js`**:

- `PARTICIPANT_ICONS` — the 10 avatar options (id, label, image path)
- `SEDER_STEPS` — names and icons for the desktop step programs
- `HALLEL_SONGS` — YouTube video IDs for the three songs in the Hallel module
- `SEDER_PLATE_ITEMS` — the six plate items, their positions, and description text
- `WINE_OCCASIONS` — labels for the four cups

Individual readings are in `src/modules/` — one file per seder step.

---

## Deploy to Vercel

```bash
npm run build
npx vercel --prod
```

Or connect the repo to a Vercel project via the dashboard for automatic deploys.

---

**Chag Sameach! חַג שָׂמֵחַ**
