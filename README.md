# The Sorrow - D&D 5e Campaign

This repository contains the structured data, logs, and rules for a solo Dungeons & Dragons 5th Edition (2014) campaign.

## Project Overview
*   **Campaign Setting:** Oakhaven and the surrounding North Cut.
*   **Tone:** Melancholic, psychological dread, classic weird fiction.
*   **Protagonist:** Wael, a Mountain Dwarf Forge Cleric (Level 2).

## Directory Structure & Standards (AI-Optimized)
*   **`engine/`**: The "Rules of the Game."
    *   `prompts/`: AI-role instructions (`dm.md`, `maintenance.md`).
    *   `rules/`: Core protocols, house rules, and progression standards.
    *   `scripts/`: Technical tools (`dice_roller.js`).
    *   `templates/`: Blueprints for world-building.
*   **`logs/`**: The "Source of Truth."
    *   Append-only audit trails for Wealth, XP, Time, Reputation, and Relationships.
*   **`state/`**: The "HUD."
    *   `character_state.md`: Unified view of the protagonist.
    *   `world_state.md`: Unified view of the environment.
    *   `entities/`: Discovery blocks for all non-player beings.
*   **`chronicles/`**: The "Narrative."
    *   Chronological records of session summaries and raw transcripts.
*   **`atlas/`**: The "Setting."
    *   Lore, artifacts, locations, and historical records.

## Operational Standards
All agents interacting with this repository must adhere to the **[[engine/rules/core_protocols.md]]**. This document defines the naming conventions, SSOT registry, and structural rules (including the **Unified Entity Protocol**) required for consistent campaign management.

---
*Last Technical Maintenance: 2026-04-21 (Consistency Audit & Registry Sync)*
