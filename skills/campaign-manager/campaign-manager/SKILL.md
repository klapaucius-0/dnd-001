---
name: campaign-manager
description: Automates D&D 5e campaign management for 'The Sorrow of Berath.' Use when starting/resuming sessions, updating character/campaign state, or logging session history.
---

# Campaign Manager Skill

This skill provides specialized workflows for the 'The Sorrow of Berath' D&D campaign, ensuring consistency in state management and narrative logging.

## Core Workflows

### 1. Sacred Boot Sequence
When a user chooses to **Start/Resume Campaign**, follow this exact sequence:
1.  Read `campaign/state.md`, `characters/player_character.md`, `campaign/inventory.md`, and `rules/house_rules.md`.
2.  Read `characters/npcs.md`, `world/locations.md`, and `campaign/clues_and_rumors.md`.
3.  Check `campaign/state.md` for the current HP, location, and XP.
4.  Provide the atmospheric summary based on these files.

### 2. Live Updates (Automatic)
After any significant event (combat, discovery, movement), update the relevant files immediately:
-   **HP/XP/Location:** Update `campaign/state.md`.
-   **Combat:** If combat starts, initialize `stats/encounters.md`.
-   **Discovery:** Update `campaign/clues_and_rumors.md` or `campaign/inventory.md`.
-   **NPCs:** Update `characters/npcs.md` for new encounters.

### 3. Session Logging (End of Session)
When the user signals the end of a session:
1.  Determine the session number (e.g., `sessions/session_02.md`).
2.  Use `scripts/log_session.cjs` to generate the session summary and update the transcript log.
3.  Confirm all changes are saved.

### 4. Combat Mode Sub-routine
When combat is initiated:
1.  Ask for Initiative rolls (or use the batch dice roller).
2.  Maintain the `stats/encounters.md` file for every turn.
3.  Automatically apply damage/effects to tracked HP in `stats/encounters.md`.

## Bundled Resources

- **scripts/log_session.cjs**: A script to automate the formatting of session summaries.
- **references/workflow_guide.md**: Detailed instructions for complex campaign transitions.
