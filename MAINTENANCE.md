# Campaign Maintenance Guide

## Updated Tools & Templates

### Dice Roller (`scripts/dice_roller.js`)
The dice roller now supports **Advantage (h1)** and **Disadvantage (l1)** directly.
*   **Example Advantage:** `node scripts/dice_roller.js 2d20h1+5`
*   **Example Disadvantage:** `node scripts/dice_roller.js 2d20l1+2`
*   The output is now concise: `Result: 17 ([12, 5] + 5)`

### NPC Creation (`templates/npc_template.md`)
When creating new NPCs, ensure you fill out the **Combat Style & Mechanics** section. This includes:
*   **Tactics:** How they move and target.
*   **Sensory Cues:** The unique smells, sounds, or visual flares associated with their power (e.g., the ozone/silt of the Pale-Eyed Figure).

### Character Sheets (`characters/player_character.md`)
The sheet now includes a **Resource Tracker**. Use this to keep a live count of spell slots and hit dice during the session to avoid searching through the full file.

## 3. Starting a New Campaign
When you are ready for a new character:
1.  Reset `campaign/state.md` (HP, XP, Location).
2.  Clear the active encounter in `stats/encounters.md`.
3.  Create a new character in `characters/player_character.md` (or overwrite the deceased Berath).
