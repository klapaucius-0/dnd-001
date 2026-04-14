# Dice Rolling System

This directory contains the technical tools used for resolving actions, combat, and checks in the campaign.

## `dice_roller.js`
A cryptographically secure D&D dice roller built with Node.js. It uses the `crypto` module to ensure that all results are truly random and cannot be influenced by the AI's narrative context.

### Usage
Run the script using `node` followed by a dice string:
```bash
node dice_roller.js <dice_string>
```

### Supported Formats
*   **Simple Dice:** `1d20`, `2d6`, `1d100`
*   **Dice with Bonuses:** `1d20+5`, `2d6-1`
*   **Advantage/Disadvantage:** 
    *   Advantage: `2d20dl1` (Roll 2, drop lowest 1)
    *   Disadvantage: `2d20dh1` (Roll 2, drop highest 1)
*   **Ability Score Generation:** `4d6dl1` (Roll 4, drop lowest 1)

### Technical Details
The script outputs a JSON object containing the `input`, the `originalRolls` (for audit purposes), the `keptRolls`, the `bonus`, and the final `total`. This transparency ensures the "Sacred Dice Protocol" is followed and that every result can be verified.
