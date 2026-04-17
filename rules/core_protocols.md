# Core Campaign Protocols

These protocols are the foundational rules for both the **Dungeon Master** and the **Maintenance Assistant**. Adherence to these standards ensures campaign integrity.

## 1. Single Source of Truth (SSOT) Protocol
To prevent data fragmentation, every piece of data has exactly one **Master File**. Other files may **Reference** this data but must not be treated as the authority.

### SSOT Registry & Source Tags
| Data Category | Master File (SSOT) | Reference/View Files | Source Tag |
| :--- | :--- | :--- | :--- |
| **Experience (XP)** | `characters/xp_log.md` | `characters/player_character.md` | `<!-- SOURCE: xp_log -->` |
| **Inventory** | `campaign/inventory.md` | N/A | `<!-- SOURCE: inventory -->` |
| **Artifacts** | `campaign/artifacts.md` | N/A | `<!-- SOURCE: artifacts -->` |
| **Time & Labor** | `campaign/time_log.md` | `campaign/state.md` | `<!-- SOURCE: time_log -->` |
| **Character Stats** | `characters/player_character.md` | N/A | `<!-- SOURCE: pc_sheet -->` |
| **Real-time State** | `campaign/state.md` | N/A | `<!-- SOURCE: state -->` |

### Rules for Mirroring (The "Context Exception")
Mirroring is only allowed for data required to maintain **Narrative Flow** (e.g., Current Time in the State file).
1.  **Tagging:** Any mirrored value MUST be preceded by its Source Tag.
2.  **Priority:** If a discrepancy is found, the **Master File** always overrides the Mirror.
3.  **Syncing:** The DM/Assistant MUST update the Master File FIRST, then the Mirror.

## 2. Logging Protocol (Append-Only)
*   **Naming Convention:**
    *   Sessions: `sessions/session_###.md` (e.g., `session_001.md`).
    *   Transcripts: `sessions/transcript_###.md` (e.g., `transcript_001.md`).
*   **Process:** 
    1.  Use `templates/session_template.md` for session summaries.
    2.  Never overwrite or delete logs. Append "Corrections" if needed.
*   **Hierarchy:** `session_###.md` is the narrative record; `transcript_###.md` is the raw record.

## 3. Sacred Dice Protocol
*   **Tool:** `scripts/dice_roller.js`.
*   **Rule:** Every roll MUST be performed via the script. Hallucinating or "inventing" rolls is a protocol violation.
*   **Transparency:** Always state the Difficulty Class (DC) or target AC before rolling.
*   **Documentation:** Refer to `scripts/README.md` for syntax and technical implementation.

## 4. File Integrity & Live Updates
*   The campaign directory acts as "External Memory."
*   **DM Requirement:** Update `state.md`, `inventory.md`, and `xp_log.md` immediately after events.
*   **Maintenance Requirement:** Audit these files for synchronization errors during maintenance turns.
*   **Data Preservation (Append-First):** For tracking files (e.g., `world/locations.md`, `campaign/bestiary.md`, `campaign/quest_log.md`), prioritize appending new information or updating existing entries. NEVER remove established locations, creatures, or lore unless they have been explicitly destroyed or rendered irrelevant in the narrative.

## 5. Player Agency & Narrative Pacing
*   **Agency:** The DM MUST NOT make decisions for the player character or assume their reactions. 
*   **Pacing:** Resolve only one action or conversation at a time. Never advance the timeline or location without explicit player direction.
*   **Wait for Input:** After presenting a choice or a question, the DM MUST stop and wait for the player's response before performing any further narrative or file-based actions.

## 7. AI-Optimized File System & SSOT
To ensure maximum efficiency for AI agents, the repository follows a strict structural and naming protocol.

### Naming Conventions
*   **Case:** All files and directories must use `snake_case` (lowercase with underscores).
*   **Descriptive:** Names must be clear and indicative of content (e.g., `xp_log.md` instead of `stats.md`).
*   **Archive:** Deceased characters or completed session logs must be moved to an `archive/` or dedicated folder.

| **Experience (XP)** | `characters/xp_log.md` | `characters/player_character.md`, `campaign/state.md` | `<!-- SOURCE: xp_log -->` |
| **Inventory** | `campaign/inventory.md` | `characters/player_character.md` (Total Weight) | `<!-- SOURCE: inventory -->` |
| **Artifacts** | `campaign/artifacts.md` | `campaign/inventory.md`, `characters/player_character.md` | `<!-- SOURCE: artifacts -->` |
| **Time & Labor** | `campaign/time_log.md` | `campaign/state.md` | `<!-- SOURCE: time_log -->` |
| **Character Stats** | `characters/player_character.md` | `campaign/state.md` | `<!-- SOURCE: pc_sheet -->` |
| **Real-time State** | `campaign/state.md` | N/A | `<!-- SOURCE: state -->` |
| **Entities (Social)** | `campaign/entities/social.md` | N/A | `<!-- SOURCE: social_entities -->` |
| **Entities (Unique)** | `campaign/entities/unique.md` | N/A | `<!-- SOURCE: unique_entities -->` |
| **Entities (Bestiary)**| `campaign/entities/bestiary.md` | N/A | `<!-- SOURCE: bestiary -->` |
| **Entities (Comps)** | `campaign/entities/companions.md` | N/A | `<!-- SOURCE: companions -->` |

## 8. Temporal Protocol
To maintain the integrity of crafting and survival mechanics, time must be tracked as a resource.
1.  **Time Advancement:** The DM must explicitly state the time taken for travel, social interactions, and crafting (e.g., "The discussion takes 30 minutes; it is now 10:30").
2.  **Daily Reset:** At the end of a Long Rest, increment the `Campaign Day` in `state.md` and `time_log.md`.
3.  **Labor Hour (LH) Logging:** Any crafting progress MUST be recorded in `time_log.md` before updating the status of the item or project.

## 9. Quest & Progression Protocol
To preserve player agency and handle complex goals, quest tracking follows a strict Review-Before-Update cycle.

### Task Notation
*   `[ ]` **Mandatory:** Required for quest completion.
*   `( )` **Lead/Optional:** A known path or a side-task that influences the narrative/rewards. Not strictly required if the player finds another way to resolve the parent `[ ]` goal.
*   `{ }` **Alternative:** "One of Many." Completing one `{x}` in a group fulfills that objective block.

### AI Workflow Rules
1.  **Strict Confirmation:** The AI MUST NOT check a box or create a new quest without explicit player confirmation.
2.  **Proposal Phase:** When a new quest or step is discovered, the AI provides a "Quest Proposal" in the chat and waits for player approval. **Proposals MUST NOT be written to the `quest_log.md` until they have been explicitly approved by the player.**
3.  **The "Leads" Pattern:** For complex goals, the AI should provide generic `[ ]` mandatory objectives with indented `( )` leads to suggest paths without railroading the player.
4.  **Expansion:** If the player takes a new, unlisted action that resolves a goal, the AI must ask if that goal should be marked as complete and if the previous leads should be archived or removed.
5.  **Impact Awareness:** Completion of Optional `(x)` steps must be noted in the session log as having influenced the outcome.


## 10. Unified Entity Protocol (UEP)
All non-player beings (NPCs, Monsters, Named Threats) follow a discovery-based state model to preserve immersion and ensure mechanical consistency.

### State Block Levels
1.  **Known Values:** Data observed or explicitly stated in play (e.g., "Sargos uses a frost-mace").
2.  **Unknown Values (??):** Data hidden from Wael (e.g., exact Max HP, hidden resistances, secret motives). These are tracked by the DM but only written to the public block when "unmasked."
3.  **Discovery Triggers:** New values are unmasked through checks (Insight, Nature, Survival), combat observation, or social interaction.

### Social Dynamics
*   **Disposition (Volatile):** The entity’s immediate emotional state (Hostile, Wary, Neutral, Friendly). Influences immediate DCs for social checks.
*   **Relationship (Stable):** The historical foundation of trust (Level 0: Stranger to Level 5: Soul-Bond). Influences loyalty, willingness to share secrets, and long-term commitment.

### AI Update Rules
*   **Consistency:** The AI MUST refer to the appropriate entity file in `campaign/entities/` before describing an action to ensure they use established gear, stats, and behavior.
*   **Relationship Tracking:** Companions have a "Relationship Level" that influences their willingness to share secrets or take risks.
*   **Live Updates:** The DM MUST update the entity's known status (HP, Disposition, unmasked facts) in the `campaign/entities/` folder after significant changes.
