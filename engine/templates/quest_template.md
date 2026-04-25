# [Q###] [Quest Name]
**Status:** [ACTIVE | ON-HOLD | COMPLETED | FAILED]
**Scale:** [MINOR | MODERATE | MAJOR | EPIC]
**Related Stratum:** [STRATUM: X]

## 1. The Directive (Narrative Goal)
[Brief summary of the ultimate objective and stakes.]

## 2. Intelligence & Leads
*Notes, rumors, and NPC advice directly related to achieving this quest.*
*   **Lead:** [Detail]. *Source: [NPC/Location/Item]*

## 3. Execution (Sandbox Objectives)
*Actionable objectives using explicit dependency tags. Do not force the player to follow these in order.*
*   **Phase 1:** [Name]
    *   **Objective A:** [OPEN] [Description of an available path or task].
    *   **Objective B:** [REQUIRES: Specific Item/NPC/Gold] [Description of step].
    *   **Objective C:** [IN-PROGRESS] [Description of step currently underway].
    *   **Objective D:** [COMPLETED] [Description of step].
    *   **Objective E:** [BYPASSED] [Step rendered obsolete by player choices].

## 4. Resolution (If Applicable)
*If the quest is completed (or failed) via alternative narrative means, summarize how it actually ended here.*
*   **Outcome:** [Summary of what actually happened].

## 5. Rewards & Integration
*To prevent duplicate logging, update the status to [LOGGED] ONLY when the reward has been successfully added to the Master Logs.*
*   **XP Awarded:** [UNLOGGED] [Amount] -> `experience_log.md`
*   **Loot/Currency:** [UNLOGGED] [Details] -> `inventory_log.md` / `currency_log.md`
*   **Standing/SP:** [UNLOGGED] [Details] -> `relationship_log.md` / `reputation_log.md`

---

## Archiving Checklist (DM Use Only)
- [ ] **Rewards Logged:** All XP, loot, and SP rewards have been successfully added to their respective Master Logs.
- [ ] **State Synced:** All state files (character, world, entities) mirror the final quest results.
- [ ] **Ledger Entry:** A completion record has been appended to `logs/quest_log.md`.
- [ ] **File Archived:** The quest file is moved to the appropriate sub-folder in `state/archive/quests/`.
- [ ] **HUD Update:** The quest reference has been removed from `state/quest_state.md`.
