# The Sorrow of Berath - D&D 5e Campaign

This repository contains the structured data, logs, and rules for a solo Dungeons & Dragons 5th Edition (2014) campaign.

## Project Overview
*   **Campaign Setting:** Forgotten Realms (Frontier town of Oakhaven).
*   **Tone:** Sad, bleak, gritty, brutal, horror-focused.
*   **Protagonist:** Berath, a Mountain Dwarf Knowledge Cleric (Hermit).
*   **Core Mystery:** The Reliquary and the Black Shard.

## Directory Structure
*   **`campaign/`**: Real-time tracking of state, inventory, crafting, and clues.
*   **`characters/`**: Detailed sheets for the PC (Berath), NPCs, and XP tracking.
*   **`rules/`**: The "Sacred Text" of house rules and Session 0 templates.
*   **`sessions/`**: Transcripts, chronological logs, and the full "Black Box" record.
*   **`stats/`**: Technical tracking for combat encounters and monster data.
*   **`world/`**: Descriptions of locations, factions, and history.
*   **`dm_prompt.md`**: The core operational instructions for the AI Dungeon Master.

## Operational Protocol
1.  **For the DM (AI):** Always read `dm_prompt.md` first. Use the local files as "external memory" to maintain 100% consistency. Update files immediately after any significant event.
2.  **For the Player:** Use Git to commit after every session. This allows for "save points" and ensures the narrative can be branched or rewound if necessary.
4.  **Sacred Dice Protocol:** All dice rolls are performed using the cryptographically secure `scripts/dice_roller.js` script via Node.js. This ensures absolute fairness, prevents AI hallucination of results, and provides a full audit trail of each die rolled. Details on the script's usage and logic can be found in `scripts/README.md`.
