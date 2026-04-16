# The Sorrow - D&D 5e Campaign

This repository contains the structured data, logs, and rules for a solo Dungeons & Dragons 5th Edition (2014) campaign.

## Project Overview
*   **Campaign Setting:** Frontier path toward Oakhaven.
*   **Tone:** Melancholic, psychological dread, classic weird fiction.
*   **Protagonist:** Wael, a Mountain Dwarf Forge Cleric (Hermit).

## Directory Structure & Standards
*   **`campaign/`**: Real-time state (`state.md`), inventory, quests, and reputation.
    *   `inventory.md`: Item tracking with weights/encumbrance.
    *   `quest_log.md`: Active and completed objectives.
    *   `reputation.md`: Faction standings and NPC relationships.
    *   `bestiary.md`: Encountered creature stat blocks.
*   **`characters/`**: PC sheet (`player_character.md`), NPCs, and the `xp_log.md` (SSOT for XP).
*   **`prompts/`**: Role-specific instructions for the AI (`dm.md` and `maintenance.md`).
*   **`rules/`**: House rules and the **Core Protocols** (`rules/core_protocols.md`).
*   **`scripts/`**: Technical tools like the `dice_roller.js`.
*   **`sessions/`**: Chronological records (`session_###.md`) and raw transcripts.
*   **`templates/`**: Blueprints for NPCs, locations, and sessions.

## Operational Standards
All agents interacting with this repository must adhere to the **[[rules/core_protocols.md]]**. This document centralizes the rules for XP, Logging, Dice, and File Integrity.
The DM agent must also respect bracketed prompts `[...]` as direct meta-instructions.

---
*Last Technical Maintenance: 2026-04-16 (Post-Session 003)*
