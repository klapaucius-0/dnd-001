# Core Campaign Protocols

## 1. File Responsibility Matrix
To ensure campaign integrity and AI optimization, every file type has a strictly defined role.

| File Type | Primary Role | Responsibility | Protocol |
| :--- | :--- | :--- | :--- |
| **Transcripts** | **Evidence** | Chronological record of every action, roll, and line of dialogue. | Raw & Unfiltered. |
| **Logs (`*_log.md`)** | **Authority** | The **SSOT Master Logs**. Append-only audit trail of all numeric and state changes. | Log-First Update. |
| **States (`*_state.md`)**| **Interface** | The **AI HUDs**. A snapshot of current values for quick reference. | Mirror of the Log. |
| **Summaries** | **Synthesis** | Narrative summary of events, themes, and "vibe." | Narrative-First. |

## 2. The Log-First, State-Second Protocol
Whenever a dynamic value (Wealth, XP, Time, Reputation, etc.) changes:
1.  **Update the Log:** Append a new entry to the appropriate `*_log.md` file in `logs/`. Include the Day/Time, the Change, the New Total, and a Note/Source reference.
2.  **Update the State:** Only after the log is updated, refresh the corresponding `*_state.md` file in `state/` to mirror the new total.
3.  **Source Tags:** States MUST use Source Tags (e.g., `<!-- SOURCE: currency_log -->`) to identify their master log.

## 3. SSOT Registry (The Five Pillars)
| Category | Master History Log (SSOT) | Reference Snapshot (State) | Source Tag |
| :--- | :--- | :--- | :--- |
| **Wealth** | `logs/currency_log.md` | `state/character_state.md` | `<!-- SOURCE: currency_log -->` |
| **Experience** | `logs/experience_log.md` | `state/character_state.md` | `<!-- SOURCE: experience_log -->` |
| **Time** | `logs/time_log.md` | `state/world_state.md` | `<!-- SOURCE: time_log -->` |
| **Inventory** | `logs/inventory_log.md` | `state/character_state.md` | `<!-- SOURCE: inventory_log -->` |
| **Reputation** | `logs/reputation_log.md` | `state/world_state.md` | `<!-- SOURCE: reputation_log -->` |
| **Relationships** | `logs/relationship_log.md` | `state/world_state.md` | `<!-- SOURCE: relationship_log -->` |

## 4. Chronological Logging Protocol
*   **Summaries:** `chronicles/session_###_summary.md` (e.g., `session_001_summary.md`).
*   **Transcripts:** `chronicles/session_###_transcript.md` (e.g., `session_001_transcript.md`).
*   **Audit Rule:** Every log entry in `logs/` must reference a specific session or transcript for evidence.

## 5. Sacred Dice Protocol
*   **Tool:** `engine/scripts/dice_roller.js`.
*   **Rule:** Every roll MUST be performed via the script. Hallucinating or "inventing" rolls is a protocol violation.
*   **Transparency:** Always state the Difficulty Class (DC) or target AC before rolling.

## 6. Player Agency & Narrative Pacing (Strict Agency Lock)
*   **Zero-Movement Policy:** The DM MUST NOT move the player character or companions to a new location without an explicit command from the player.
*   **Narrative Hard-Stop:** Every DM response MUST end exactly at the point of the player's last action.
*   **Wait for Input:** After presenting a choice or a question, the DM MUST stop and wait for the player's response.

## 7. Unified Entity Protocol (UEP)
All non-player beings follow a discovery-based state model in `state/entities/`.
1.  **Known Values:** Data observed in play.
2.  **Unknown Values (??):** Data hidden from the player.
3.  **Discovery Triggers:** New values are unmasked through checks or observation.

## 8. Archiving & Lifecycle Management
To keep the active workspace lean and optimized for AI agents, the following archiving protocols are mandatory:

### A. Narrative Archiving (`chronicles/archive/`)
*   **Active Continuity:** Keep only the last **3 sessions** (summaries and transcripts) in the root of `chronicles/`.
*   **Archiving:** Move older sessions to `chronicles/archive/` at the start of each Maintenance Cycle.

### B. Mechanical Log Rotation (`logs/archive/`)
*   **Rotation Threshold:** When a log file in `logs/` exceeds **100 entries**, it must be rotated.
*   **Process:**
    1.  Rename the current log (e.g., `currency_log.md`) to include a version number (e.g., `currency_log_v1.md`) and move it to `logs/archive/`.
    2.  Create a new, empty log file with the original name in `logs/`.
    3.  The **first entry** of the new log must be a `BALANCE FORWARD` note, explicitly referencing the archived log (e.g., `Note: Carried Forward from logs/archive/currency_log_v1.md`).

### C. State Archiving (`state/archive/`)
*   **Defunct Entities:** Move deceased or permanently departed NPC files from `state/entities/` to `state/archive/entities/`.
*   **Legacy Characters:** Move historical character state snapshots to `state/archive/characters/`.

## 9. Session Termination & Recursion
Upon the conclusion of a narrative campaign session (indicated by the user command "End Session" or "End Campaign Session"), the agent **MUST NOT** simply stop. 

Instead, the agent MUST immediately invoke the **Sacred Boot Sequence** defined in `GEMINI.md`. This allows the user to transition directly into **Maintenance & Configuration** mode or start a new narrative cycle within the same CLI session, ensuring continuous repository integrity and state synchronization.
