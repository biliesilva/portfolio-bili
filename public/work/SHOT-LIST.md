# Shot list

Everything is in except the Payday 2 images.

## Payday 2 — `public/work/starbreeze/`

I could not fetch these. Steam's community pages and SteamDB are both
unreachable from the machine this was built on, and the public Steam API
returns only internal achievement names — 1,342 of them for this game, with no
titles, no dates and no icon URLs. So there is no way for me to work out which
ones were added between 2021 and 2022, or to download them.

They have to come from you:

| File | Ratio | What it shows |
| --- | --- | --- |
| `icons.jpg` | 16:10 | The achievement icons you made, cropped out and arranged on a plain dark background |
| `centre-dot.jpg` | 16:9 | HUD with the centre dot enabled — the accessibility fix, working, in a shipped game |
| `cover.jpg` | 16:10 | Main menu or the inventory screen |

**How to capture the icons.** Open
`https://steamdb.info/app/218620/stats/` or the Steam achievements page, find
the ones you made, screenshot them, and crop them into a grid. Twelve to twenty
is plenty — a wall of 200 icons reads as a dump, a curated grid reads as a
portfolio.

**Credit them.** Caption them as work made at Starbreeze for Payday 2. Showing
work you made for an employer is normal; the credit line is what keeps it
clearly normal.

## Format
JPG, around 2400px wide, under ~500 KB. Next.js re-encodes and serves modern
formats on top of whatever you provide.

Do not set the `src` field for a file that does not exist yet — the image will
break. Add the file, then tell me and I will wire it up.
