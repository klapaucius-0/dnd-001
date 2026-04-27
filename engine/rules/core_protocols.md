# Core Campaign Protocols

## 1. File Responsibility Matrix
To ensure campaign integrity and AI optimization, every file type has a strictly defined role.

| File Type | Primary Role | Responsibility | Protocol |
| :--- | :--- | :--- | :--- |
| **Transcripts** | **Evidence** | Chronological record of every action, roll, and line of dialogue. | Raw & Unfiltered. |
| **Logs (`*_log.md`)** | **Authority** | The **SSOT Master Logs**. Append-only audit trail of all numeric and state changes. | Log-First Update. |
| **States (`*_state.md`)**| **Interface** | The **AI HUDs**. A snapshot of current values for quick reference. | Mirror of the Log. |
| **Encounter Gen** | **Transparency** | `engine/templates/encounter_generation_template.md`. | Mandated for all Random Encounters. |
| **Summaries** | **Synthesis** | Narrative summary of events, themes, and "vibe." | Narrative-First. |

## 2. The Log-First, State-Second Protocol
Whenever a dynamic value (Wealth, XP, Time, Reputation, etc.) changes:
1.  **Update the Log:** Append a new entry to the appropriate `*_log.md` file in `logs/`. 
    *   **Routine Gameplay Mandate:** To optimize performance, the AI MUST NOT read or rewrite the entire log file to add a single entry during play. It MUST use a shell command (e.g., `echo "| Day | Time | ..." >> logs/filename.md`) to append the new row.
    *   **Data Retrieval & Auditing:** The AI is encouraged to read active or archived logs (`read_file`, `grep_search`) to answer player questions, verify history, or perform maintenance.
    *   **Archiving Exception:** The "Strict Append-Only" rule is suspended during **Log Rotation** (Section 8.B). In this phase, the AI MUST read the active log to extract historical data for the archive and then rewrite the active log to remove those entries.
2.  **Update the State:** Only after the log is updated, refresh the corresponding `*_state.md` file in `state/` to mirror the new total.
3.  **Active Modifier Registry (HUD) Protocol:** If a state change introduces a persistent bonus, penalty, advantage, or disadvantage (e.g., equipping an item, gaining a condition like Exhaustion, or casting a long-term buff), the **Active Modifier Registry (HUD)** section in `state/character_state.md` MUST be updated in the same turn. The DM must reference this HUD before every roll.
4.  **Source Tags:** States MUST use Source Tags (e.g., `<!-- SOURCE: currency_log -->`) to identify their master log.
5.  **Quest & Progression Review (Mandatory):** At the start of every session, or after a Long Rest, the DM MUST:
    *   **Level-Up Audit:** Compare current XP in `state/character_state.md` against the 2014 leveling thresholds. If a level-up has occurred, the DM MUST guide the player through the update using the relevant `engine/rules/class_reference/` file.
    *   **Feature Audit:** Review the class reference file to ensure all active features (including Optional Class Features from TCoE) are correctly represented in the character sheet.
    *   **Quest Tracker:** Read `state/quest_state.md` and check the `[OPEN]` or `[REQUIRES: X]` tags of the currently active quests to ensure narrative tracking is maintained.

## 3. SSOT Registry (The Five Pillars)
| Category | Master History Log (SSOT) | Reference Snapshot (State) | Source Tag |
| :--- | :--- | :--- | :--- |
| **Wealth** | `logs/currency_log.md` | `state/character_state.md` | `<!-- SOURCE: currency_log -->` |
| **Experience** | `logs/experience_log.md` | `state/character_state.md` | `<!-- SOURCE: experience_log -->` |
| **Time** | `logs/time_log.md` | `state/world_state.md` | `<!-- SOURCE: time_log -->` |
| **Inventory** | `logs/inventory_log.md` | `state/character_state.md` | `<!-- SOURCE: inventory_log -->` |
| **Reputation** | `logs/reputation_log.md` | `state/world_state.md` | `<!-- SOURCE: reputation_log -->` |
| **Relationships** | `logs/relationship_log.md` | `state/world_state.md` | `<!-- SOURCE: relationship_log -->` |
| **Quests** | `logs/quest_log.md` | `state/quest_state.md` | `<!-- SOURCE: quest_log -->` |
| **Economy** | `engine/rules/economy.md` | N/A (Algorithmic) | `[VALUE: ]` |

## 4. Chronological Logging Protocol
*   **Summaries:** `chronicles/session_###_summary.md` (e.g., `session_001_summary.md`).
*   **Transcripts:** `chronicles/session_###_transcript.md` (e.g., `session_001_transcript.md`).
*   **Audit Rule:** Every log entry in `logs/` must reference a specific session or transcript for evidence.

## 5. Sacred Dice Protocol
*   **Tool:** `engine/scripts/dice_roller.js`.
*   **Rule:** Every roll MUST be performed via the script. Hallucinating or "inventing" rolls is a protocol violation.
*   **Sequential Resolution:** Resolve only one roll per response. You must wait for the outcome of a roll and update the relevant state before initiating a subsequent roll.
*   **DC Transparency:** The DM MUST explicitly state the Difficulty Class (DC) or target Armor Class (AC) in the text immediately before any roll is performed. This is a foundational mandate for transparency and player agency.

## 6. Player Agency & Narrative Pacing (Strict Agency Lock)
*   **Zero-Movement Policy:** The DM MUST NOT move the player character or companions to a new location without an explicit command from the player.
*   **Narrative Hard-Stop:** Every DM response MUST end exactly at the point of the player's last action.
*   **Wait for Input:** After presenting a choice or a question, the DM MUST stop and wait for the player's response.

## 7. Unified Entity Protocol (UEP)
All non-player beings follow a discovery-based state model in `state/entities/`.
1.  **Revealed Facts:** Data observed or discovered by the current protagonist.
2.  **Unrevealed Facts:** Data hidden from the current player, marked with the **`[NOT_REVEALED]`** tag.
3.  **Historical Connection:** Relevant interactions or shared history with deceased or departed PC characters. The name of the former PC character (e.g., **Wael**, **Berath**) MUST be explicitly stated to ensure clarity and avoid confusion with the active protagonist.
4.  **Social Connection:** Documented relationships or significant interactions between NPCs.
5.  **Historical Contributions:** Specific physical, structural, or significant narrative impacts made by a previous PC on the NPC or their environment (e.g., restoring a forge, saving their life). These MUST be explicitly attributed to the former character by name.
6.  **Discovery Triggers:** Facts tagged as `[NOT_REVEALED]` are unmasked through checks, observation, or narrative events.
7.  **Transition Rule:** When preparing for a new protagonist, existing NPC details MUST NOT be deleted. Instead:
    *   Interactions with previous PCs are moved to the **Historical Connection** section.
    *   Actions or impacts from previous PCs MUST be explicitly added to a **Historical Contributions** section.
    *   Any revealed facts that the new character would not logically know are re-tagged as **`[NOT_REVEALED]`**.
    *   All **Standing** values are reset to Level 0 (0/20 SP) [Stranger].
    *   All **Last Interaction** fields are reset to `---` or Day 0.
8.  **Post-Encounter Audit (MANDATORY):** Immediately following the conclusion of any combat or significant interaction with a creature or NPC, the DM MUST:
    *   **Update the Bestiary:** Ensure the creature's state block in `state/entities/bestiary.md` reflects all discovered traits, actions, and narrative details. If it is a new creature, create a new entry using the UEP standards.
    *   **Update the Master Logs:** Append all XP, currency, inventory, and relationship changes to their respective logs in `logs/`.
    *   **Synchronize State:** Update the corresponding snapshot files in `state/` to reflect the new totals.

## 8. Archiving & Lifecycle Management
To keep the active workspace lean and optimized for AI agents, the following archiving protocols are mandatory:

### A. Narrative Archiving (`chronicles/archive/`)
*   **Active Continuity:** Keep only the last **3 sessions** (summaries and transcripts) in the root of `chronicles/`.
*   **Archiving:** Move older sessions to `chronicles/archive/` at the start of each Maintenance Cycle.

### B. Mechanical Log Rotation (`logs/archive/`)
*   **Rotation Threshold:** When a log file in `logs/` exceeds **100 entries**, it must be rotated.
*   **Single-File Archive Convention:** Unlike episodic chronicles, mechanical logs for a specific campaign are consolidated into single, master archive files.
*   **Naming Format:** `C{campaign_number}_{character_name}_{type}_log.md` (e.g., `C3_skaen_inventory_log.md`).
*   **Process:**
    1.  **Identify Campaign:** Read `state/world_state.md` to identify the current Campaign Number and Protagonist Name.
    2.  **Append to Archive:** Append the oldest rows (e.g., the first 50-80 entries) from the active log in `logs/` to the corresponding campaign archive file in `logs/archive/`.
    3.  **Clean Active Log:** Remove the archived rows from the active log file, ensuring the header and most recent ~20-50 entries remain.
    4.  **No Versioning:** Do not create `v1`, `v2`, etc. All historical data for a character stays in their single campaign-specific archive file.

### C. State Archiving (`state/archive/`)
*   **Defunct Entities:** Move deceased or permanently departed NPC files from `state/entities/` to `state/archive/entities/`.
*   **Legacy Characters:** Move historical character state snapshots to `state/archive/characters/`.

### D. New Character Transition Protocol (Mandatory Reset)
When preparing for a new protagonist after a character's death or departure, the following synchronization steps are MANDATORY to ensure a clean mechanical start while maintaining narrative depth:

1.  **Social & Reputation SP:** Reset all Individual SP (Relationship log) and Faction SP (Reputation log) to `0`. The new character starts as a `[Stranger]` mechanically.
2.  **NPC Last Interactions:** Reset the `Last Interaction` field for all NPCs in `state/entities/` and `state/world_state.md` to `---` or Day 0, reflecting that the new PC has no prior history with them.
3.  **Quests:** Update the status of all active/pending quests (e.g., FAILED, ABANDONED, COMPLETED). Move the formal quest files to character-specific archive directories (e.g., `state/archive/quests/[Character_Name]/`).
4.  **Atlas Synchronization (CRITICAL MANDATE):** Before finalizing the transition, the DM MUST painstakingly parse **ALL non-archived AND ALL archived logs and chronicles without exception**. It is absolutely paramount that both historical archived data and recent non-archived data are used in tandem to update every relevant file in the `atlas/` directory. This ensure the world perfectly reflects the campaign's discoveries and the fallen character's legacy. This explicitly includes:
    *   `atlas/lore.md`
    *   `atlas/locations.md`
    *   `atlas/graveyard.md`
    *   `atlas/artifacts.md`
    *   `atlas/crafting/blueprints.md`
    *   `atlas/crafting/materials/` (all relevant files)
    *   `atlas/crafting/tools.md`
5.  **UEP Preservation & Contributions:** Apply the **UEP Transition Rule** (Section 7.7). NPC details MUST NOT be deleted. Instead, they should be shifted to **Historical Connection**, **Historical Contributions**, or **Social Connection** sections, explicitly naming the previous PC character (e.g., **Wael**, **Berath**) to prevent confusion with the active protagonist. Any revealed facts that the new character would not logically know are re-tagged as **`[NOT_REVEALED]`**.

## 9. Session Termination & Recursion
Upon the conclusion of a narrative campaign session (indicated by the user command "End Session" or "End Campaign Session"), the agent **MUST NOT** simply stop. 

Instead, the agent MUST:
1.  **Perform End-of-Session Archiving:** Audit all active logs in `logs/`. If any log exceeds 100 entries, perform the **Mechanical Log Rotation** (Section 8.B) immediately.
2.  **Invoke the Sacred Boot Sequence:** Call the sequence defined in `GEMINI.md`. This ensures continuous repository integrity and state synchronization between sessions.

## 10. AI Metadata & Tag Registry
This section serves as the central hub for all campaign tags and metadata to ensure schema consistency and prevent hallucination.

### A. Static Enumerations (Strictly Locked)
*These values cannot be altered or expanded by the DM during narrative play. Changes require explicit Player directives during Maintenance mode.*

*   **`[STRATUM: ]`**
    *   **Purpose:** Defines the environmental layer and thematic tone.
    *   **Values Type:** Static.
    *   **Values in use:** `1_FRAGILE_SURFACE`, `2_ERODING_AGE`, `3_FROZEN_EXPANSE`, `4_SUNKEN_STONE`, `5_RESONANT_VOID`, `6_DREAMING_MIND`, `7_KINDLED_HEARTH`, `8_SANGUINE_DEBT`.
    *   **Mechanical Rules Reference:** `engine/rules/house_rules.md`
    *   **Reference Index:** `engine/prompts/dm.md`
*   **`[FREQUENCY: ]`**
    *   **Purpose:** Determines how often elements of a stratum should appear.
    *   **Values Type:** Static.
    *   **Values in use:** `VERY_LOW`, `LOW`, `MEDIUM`, `HIGH`.
    *   **Reference Index:** `engine/rules/house_rules.md`
*   **`[NPC_TYPE: ]`**
    *   **Purpose:** Defines the mechanical complexity, progression potential, and role of an NPC based on standard D&D 5e (2014) sourcebooks.
    *   **Values Type:** Static.
    *   **Values in use:** 
        *   `SIDEKICK`: Uses Tasha's Sidekick rules; levels up with the PC.
        *   `HIRELING`: Uses PHB rules for skilled/untrained service; static stats, no leveling.
        *   `LEGENDARY`: Uses MM rules for Legendary Actions/Resistances; represents high-tier threats.
        *   `STATBLOCK`: Uses standard, non-scaling MM/VGM entries (e.g., Commoner, Guard, Priest).
        *   `FACTION`: Uses DMG rules for tracking collective reputation and Renown.
        *   `MOUNT`: Uses PHB rules for carrying capacity, speed, and controlled/independent combat.
        *   `SUMMON`: Uses PHB/TCoE rules for magically brought forth creatures with limited duration.
        *   `LEGACY`: Narrative tag for deceased or historical figures of significant influence.
    *   **Reference Index:** `state/entities/` directory.
*   **`<!-- SOURCE: -->`**
    *   **Purpose:** Enforces data integrity by linking state variables to their master logs.
    *   **Values Type:** Static (Log filenames).
    *   **Values in use:** `currency_log`, `experience_log`, `time_log`, `inventory_log`, `reputation_log`, `relationship_log`, `quest_log`, `artifacts`, `world_state`, `unique_entities`, `social_entities`, `companions`, `bestiary`, `lore`, `crafting`, `atlas/crafting/blueprints.md`, `atlas/crafting/materials/`, `atlas/crafting/tools.md`, `pc_sheet`, `quest_state`.
    *   **Reference Index:** See Section 3 of this file.

### B. Dynamic & Extensible Tags (DM Managed)
*The DM is encouraged to create new values for these tags dynamically during narrative play. When a new value is generated, the DM must ensure it is formally documented in the corresponding Reference Index.*

*   **`Q###` vs `P###` (Quest Indexing)**
    *   **`Q###` (World Quests):** Externally-driven narrative events (NPCs, world lore). Requires a dedicated markdown file.
    *   **`P###` (Personal Directives):** Internally-driven player goals (crafting, gathering, XP targets). Requires a dedicated markdown file. **Note:** Personal Directives do not grant XP rewards; their rewards are strictly narrative or material.
*   **`[WORLD]` vs `[PERSONAL]` (HUD Tags)**
    *   **`[WORLD]`**: Marks a `Q###` entry in `state/quest_state.md`.
    *   **`[PERSONAL]`**: Marks a `P###` entry in `state/quest_state.md`.
*   **`[MAT: ]`**
    *   **Purpose:** Identifies the primary material of an item.
    *   **Values Type:** Dynamic.
    *   **Observed Values:** `STEEL`, `WOOD`, `IRON`, `BRONZE`, `BRASS`, `SILVER`, `GOLD`, `COPPER`, `PLATINUM`, `ADAMANTINE`, `MITHRAL`, `LEATHER`, `BONE`, `CLAY`, `GLASS`, `PAPER`, `OIL`, `TEXTILE`.
    *   **Reference Index:** Must be logged in the `atlas/crafting/materials/` directory.
*   **`[TOOL]`**
    *   **Purpose:** Identifies an item as a functional tool requiring proficiency.
    *   **Values Type:** Dynamic (Item presence).
    *   **Reference Index:** Must be logged in `atlas/crafting/tools.md`.
*   **`[BLUEPRINT]`**
    *   **Purpose:** Identifies an entry as a crafting schematic.
    *   **Values Type:** Dynamic.
    *   **Reference Index:** Must be logged in `atlas/crafting/blueprints.md`.
*   **`[TYPE: ]`**
    *   **Purpose:** Broad categorization of a blueprint's output or a campaign goal.
    *   **Values Type:** Dynamic.
    *   **Observed Values:** `GEAR`, `WEAPON`, `ARMOR`, `QUEST`, `PROJECT`, `CONSUMABLE`.
    *   **Reference Index:** `atlas/crafting/blueprints.md` and `state/quest_state.md`.

### C. Live Play Annotation Tags (Transcript Only)
*These tags are used exclusively within `chronicles/*_transcript.md` files by the DM to explicitly demarcate state changes during gameplay.*

*   **`[XP: ]`**: Experience points gained (Numeric).
*   **`[SP: ]`**: Social Points change with an entity/faction (Numeric + Entity Name).
*   **`[CURRENCY: ]`**: Change in monetary wealth (Numeric + Denomination).
*   **`[TIME: ]`**: Passage of in-game time (Time format).
*   **`[QUEST: ]`**: Update to the quest tracker (Status string).
*   **`[UEP: ]`**: Unmasking of a Unified Entity Protocol fact/trait (String).
*   **`[VALUE: ]`**: Algorithmic valuation of an item or material (Numeric + Denomination). See [[engine/rules/economy.md]].

## 11. Spell Selection Transparency Protocol
Whenever the DM presents a list of spells for the player to choose from (during character creation or leveling), the DM MUST include for each spell:
1.  **A short description** of its mechanical effect.
2.  **Components (V, S, M)** and any specific material costs.
3.  **Consumed Status:** Explicitly state if the material components are CONSUMED or NOT CONSUMED.
4.  **Ritual Status:** Whether the spell can be cast as a ritual.
5.  **Casting Time:** Explicitly state if it is an Action, Bonus Action, Reaction, or a specific time (e.g., 1 Hour).
6.  **Range:** The effective distance of the spell.
7.  **Concentration:** Explicitly state if the spell requires CONCENTRATION or NO CONCENTRATION.
8.  **Duration:** Explicitly state how long the spell lasts (e.g., Instantaneous, 1 Minute, 8 Hours).

## 12. Campaign Launch Protocol
The DM MUST NOT begin the narrative, describe the starting scene, or transition into active gameplay until the player has explicitly provided express approval (e.g., "Start Campaign" or "Begin Session") after all character creation and initialization steps are finalized.

## 13. AI Operational & Editing Standards
To ensure repository integrity and maintain a clean file history:
1.  **Surgical Edits:** Every edit in any file MUST be made with extreme care to ensure only the intended lines are modified. Edits should avoid causing the entire file to appear modified in git diffs (e.g., by changing line endings or reformatting unaffected blocks).
2.  **Newline Integrity:** The AI MUST be mindful of newline characters (`\n`, `\r\n`) and existing indentation. Edits should not inadvertently add or remove whitespace or blank lines unless explicitly required.
3.  **Ambiguity Avoidance:** When using tools like `replace`, provide enough context in the `old_string` to ensure a unique match and avoid "ghost" changes in surrounding text.
