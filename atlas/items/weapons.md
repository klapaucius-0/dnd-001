# Weapons Registry [TYPE: WEAPON]
<!-- SOURCE: atlas/items/weapons.md -->

This registry defines the **Base Templates** for common weapons. Final item statistics are determined algorithmically by combining these templates with the properties of their construction material (see `atlas/crafting/materials/`).

## 1. Base Weapon Templates

| Item | Die | Type | Properties Tags | Wgt (Base) | Lab (Val) |
| :--- | :---: | :---: | :--- | :---: | :---: |
| **Dagger** | 1d4 | P | `[FINESSE]`, `[LIGHT]`, `[THROWN]` | 1.0 lb | 1 gp |
| **Mace** | 1d6 | B | — | 4.0 lb | 1 gp |
| **Shortsword** | 1d6 | P | `[FINESSE]`, `[LIGHT]` | 2.0 lb | 8 gp |

## 2. Dynamic Calculation Rules (AI Protocol)
To generate the final statistics for a weapon crafted from a specific material, apply the following formulas using the data from `atlas/crafting/materials/metals.md`.

### A. Combat Statistics
*   **Final Attack Bonus:** `Base Atk (+0) + Material ATK Mod`
*   **Final Damage Bonus:** `Base Dmg (+0) + Material DMG Mod`
*   **Final Damage Die:** `Base Die (e.g., 1d4) + Base Type (e.g., P)`
*   **Final Properties:** `Base Properties + Material Weapon Traits`

### B. Physical & Economic Statistics
*   **Final Weight:** `Base Wgt * Material WGT Mult`
*   **Final Value:** `Base Lab Val + (Final Wgt * Material Value/Unit) + Material Premium`
    *   *Premiums:* Silvered (+100 gp), Adamantine (+500 gp), Mithral (+250 gp), Cold-Formed (+73 gp).

---

## Standard Property Index (PHB Reference)
*   **`[FINESSE]`**: Reference **[[PHB]] p. 147**. Use STR or DEX for attack/damage.
*   **`[LIGHT]`**: Reference **[[PHB]] p. 147**. Suitable for two-weapon fighting.
*   **`[THROWN]`**: Reference **[[PHB]] p. 147**. Can be used for ranged attacks.
*   **`[HEAVY]`**: Reference **[[PHB]] p. 147**. Disadvantage on attacks for Small creatures.

## Material Property Index (Agent Reference)

### Standard 5e Rules
*   **`[SILVERED]`**: Reference **[[PHB]] p. 148**. Bypasses specific damage resistances.
*   **`[ADAMANTINE]`**: Reference **[[DMG]] p. 284**. Automatic critical hits against objects.
*   **`[MITHRAL]`**: Reference **[[DMG]] p. 182**. Weight reduction; removes Strength requirements.
*   **`[SIEGE]`**: Reference **[[DMG]] p. 242**. Deals double damage to objects and structures.

### Sorrow House Rules (Simplified)
*   **`[BRITTLE]`**: Disadvantage on saving throws to avoid being broken or shattered.
*   **`[MALLEABLE]`**: Edge "rolls" on use. Disadvantage on Atk rolls against AC 16 or higher.
*   **`[CORRODIBLE]`**: Becomes `[STRAINED]` after 24h exposure to salt/acid without oil.
*   **`[FAIL: 1-2]`**: On Nat 1 or 2, item is unusable until an Action is spent to straighten it.
*   **`[SHATTER: 1]`**: On Nat 1, item breaks. User takes 1 piercing damage. Item requires repair.
*   **`[ANTI_DET]`**: Cannot be detected by *Detect Magic* or *Locate Object*.
*   **`[ESSEN]`**: Mundane weapon; bypasses Fey/Fiend damage resistance as if magical.
*   **`[BREAK_RES]`**: Adv. on saving throws vs. shattering or corrosion.
*   **`[KINETIC]`**: +1 AC bonus when using the Parry maneuver or reaction.
*   **`[NON_MAGNETIC]`**: Immune to magnetic effects (e.g., *Heat Metal* variant).
*   **`[FINE]`**: Critical hit range increases to 19-20 when used for precision artisan tasks.
*   **`[CRUSH_IMP]`**: Bludgeoning weapons only. High density reduces damage penalty by 2.
