# Core Campaign Protocols

These protocols are the foundational rules for both the **Dungeon Master** and the **Maintenance Assistant**. Adherence to these standards ensures campaign integrity.

## 1. XP Synchronization Protocol
*   **Single Source of Truth (SSOT):** `characters/xp_log.md`.
*   **Process:** 
    1.  Verify the reward is recorded in `xp_log.md`.
    2.  Update the `Total XP` in `xp_log.md`.
    3.  Mirror the total to `characters/player_character.md` and `campaign/state.md`.
*   **Constraint:** Never add values between files. Only mirror the total from the log.

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
