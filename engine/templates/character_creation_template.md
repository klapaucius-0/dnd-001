# Session 0: Character Creation Template (v2.0 - 2014 Ruleset Strict)
<!-- SOURCE: character_creation_template -->

*This file contains the mandatory step-by-step logic for generating a protagonist in "The Sorrow." This process is designed for absolute adherence to the 2014 D&D 5th Edition ruleset.*

## Phase 1: Ruleset Alignment
The DM MUST confirm that all choices are made using only the following 2014 sourcebooks:
*   **Core:** Player's Handbook (2014), Dungeon Master's Guide (2014), Monster Manual (2014).
*   **Supplements:** Xanathar's Guide to Everything (XGE), Tasha's Cauldron of Everything (TCOE), Sword Coast Adventurer's Guide (SCAG).
*   **PROHIBITED:** Any 2024 revisions, playtest materials (UA), or third-party homebrew.

### Active House Rules (HUD)
1.  **Encumbrance:** Variant weight tracking is ENABLED (15x STR).
2.  **Feats/Multiclassing:** Enabled from standard 2014 sourcebooks.
3.  **Tasha's Origin Rules:** Enabled (Ability Score Increases and Proficiencies can be swapped).
4.  **Toll of the Void:** Lingering injury system for falling to 0 HP is ACTIVE.

## Phase 2: Sequential Creation
*The DM guides the player through these steps one at a time. No step can be skipped.*

1.  **Concept & Narrative Role:** Define the character's core motivation and how they fit into the "Sorrow" setting.
2.  **Race/Subrace Selection:** Provide full mechanical details from allowed books.
3.  **Class & Archetype:** (Level 1 Start). Detail all Level 1 features, including Hit Dice, Proficiencies, and Spellcasting (if applicable).
4.  **Ability Score Generation:**
    *   **Method:** Choose Point Buy, Standard Array, or Rolling.
    *   **Rolling Protocol:** Use `node engine/scripts/dice_roller.js "4d6dl1"` (run 6 times).
5.  **Background Selection:** Choose a 2014 background. List all skills, tool proficiencies, and languages.
6.  **Starting Equipment:** Choice between Class/Background kit or Starting Gold.
    *   **Note:** If choosing gold, use the PHB p. 143 table and roll via `dice_roller.js`.

## Phase 3: Technical Initialization
1.  **Character HUD:** DM populates `state/character_state.md`.
2.  **Log Setup:** Initialize `logs/experience_log.md` (0 XP) and `logs/currency_log.md`.
3.  **Backstory Anchor:** Document the character's origin and initial mission in `atlas/lore.md`.
