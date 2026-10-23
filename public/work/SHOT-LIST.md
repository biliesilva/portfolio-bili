# Shot list

Drop files here with exactly these names, then tell me and I'll wire up the
`src` fields. Until a file exists its slot renders as a labelled placeholder —
don't set `src` for a file you haven't added, or the image will 404.

**Format:** JPG for photographs and screenshots, PNG only when you need
transparency. Export at roughly 2× the display width — 2400px wide is plenty
for anything full-bleed. Keep each file under ~500 KB; Next.js re-encodes and
serves modern formats on top of whatever you provide.

---

## 1. Heroic Games Launcher — `public/work/heroic/`
Open source. Nothing here is restricted, so this is the set to do first:
it carries the visual weight of the whole site on its own.

| File | Ratio | What it shows |
| --- | --- | --- |
| `cover.jpg` | 16:10 | Library redesigned with the Heroic Theme |
| `tokens.jpg` | 16:9 | The same component rendered across several of the 15 themes, side by side — this is the proof the token layer works |
| `type-scale.jpg` | 4:3 | The type scale with its semantic token names |
| `modal.jpg` | 16:9 | Modal anatomy: the size and tone variants together |
| `game-page.jpg` | 16:10 | Game page as hero plus tabbed panel over the cover art |
| `theme.jpg` | 16:9 | Heroic Theme across library, game page and settings |

## 2. Starbreeze — Payday 2 — `public/work/starbreeze/`
You don't need the source files. The game shipped; capture the retail build
(Steam: F12). Confirm with Starbreeze if you're unsure about anything specific.

| File | Ratio | What it shows |
| --- | --- | --- |
| `centre-dot.jpg` | 16:9 | **The most important image on the site.** HUD with the centre dot enabled — your accessibility feature, working, in a shipped AAA game |
| `cover.jpg` | 16:10 | Main menu, or the inventory/mask screen |
| *(optional)* `icons.jpg` | 16:10 | Your 2D icons and items cropped into a grid on a neutral background. Art directors look closely at this kind of sheet |

## 3. HyperPlay — `public/work/hyperplay/`
Optional. The role format doesn't promise an image, so leave it empty if
you'd rather not. If the launcher UI is publicly released, `cover.jpg` at 16:10.

## 4. CoinFello — `public/work/coinfello/`
Optional, same reasoning. Under NDA, the honest answer is no image.

## 5. Playground — `public/playground/`
All 4:3. Only add the ones you actually want to show.

| File | What it shows |
| --- | --- |
| `heroic-modal.jpg` | Modal variants: default, destructive, error |
| `heroic-tokens.jpg` | One component across six themes |
| `flashflow.jpg` | FlashFlow deck management and a review session |
| `flashcard.jpg` | The flip-card interaction |
| `book-manager.jpg` | The responsive book management interface |
| `letmeask.jpg` | The live Q&A room |
| `happy.jpg` | Happy web and mobile screens |

## 6. Portrait — already done
`public/about/portrait.jpg` is in place and used on both the homepage and About.
