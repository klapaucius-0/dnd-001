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
*   **Multi-Part Expressions:** `2d20l1+4-1d4` (Disadvantage + Modifier - Penalty)
*   **Keep/Drop Modifiers:**
    *   `h[n]`: Keep Highest `n` (e.g., `2d20h1` for Advantage)
    *   `l[n]`: Keep Lowest `n` (e.g., `2d20l1` for Disadvantage)
    *   `dl[n]`: Drop Lowest `n` (e.g., `4d6dl1`)
    *   `dh[n]`: Drop Highest `n` (e.g., `2d20dh1`)

### Technical Details
The script outputs a concise string showing the total and a breakdown of rolls:
`Result: 15 ([12, 19] +4 -1)`

This transparency ensures the "Sacred Dice Protocol" is followed and that every result can be verified.
