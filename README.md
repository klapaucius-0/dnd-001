# The Sorrow - D&D 5e Campaign

This repository contains the structured data, logs, and rules for a solo Dungeons & Dragons 5th Edition (2014) campaign.

## Project Overview
*   **Campaign Setting:** Frontier path toward Oakhaven.
*   **Tone:** Melancholic, psychological dread, classic weird fiction.
*   **Protagonist:** Wael, a Mountain Dwarf Forge Cleric (Hermit).

## Directory Structure & Standards (AI-Optimized)
*   **`campaign/`**: Real-time state (`state.md`), inventory, quests, and lore.
    *   **`entities/`**: Unified discovery blocks for all non-player beings.
        *   `companions.md`: Full mechanical and social status for allies.
        *   `bestiary.md`: Tactical stats and behavior for monsters.
        *   `unique.md`: Named entities, major story NPCs, and legacy figures.
        *   `social.md`: Minor NPCs and recurring groups.
    *   `artifacts.md`: SSOT for physical/sensory data of significant items.
    *   `inventory.md`: SSOT for item tracking and weight.
    *   `quest_log.md`: SSOT for active and completed objectives.
    *   `time_log.md`: SSOT for passage of time and Labor Hours.
    *   `encounter_log.md`: Historical record of challenges and outcomes.
    *   `lore.md`: Consolidated repository of clues and rumors.
*   **`characters/`**: PC sheet (`player_character.md`) and `xp_log.md` (SSOT for XP).
    *   `archive/`: Storage for deceased characters and legacy data.
*   **`prompts/`**: Role-specific instructions for the AI (`dm.md` and `maintenance.md`).
*   **`rules/`**: House rules, crafting mechanics, progression standards, and the **Core Protocols**.
*   **`scripts/`**: Technical tools like the multi-part `dice_roller.js`.
*   **`sessions/`**: Chronological records and raw transcripts.
*   **`templates/`**: Blueprints for NPCs, locations, sessions, and character creation.

## Operational Standards
All agents interacting with this repository must adhere to the **[[rules/core_protocols.md]]**. This document defines the naming conventions, SSOT registry, and structural rules (including the **Unified Entity Protocol**) required for consistent campaign management.

---
*Last Technical Maintenance: 2026-04-18 (Consistency Audit, Session 005 Sync & Layered Narrative Strata Implementation)*
