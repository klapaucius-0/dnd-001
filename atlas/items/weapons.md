# Weapons Registry [TYPE: WEAPON]
<!-- SOURCE: atlas/items/weapons.md -->

| Item | MAT Tag | Atk Mod | Dmg Mod | Damage | Weight | Value | Properties | Core Utility / Origin |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :--- | :--- |
| **Dagger (Steel)** | `[MAT: STEEL]` | 0 | 0 | 1d4 P | 1 lb | 2 gp | Finesse, Light, Thrown | Standard issue; simple finesse weapon. |
| **Dagger (Iron)** | `[MAT: IRON]` | 0 | 0 | 1d4 P | 1.5 lb | 2 gp | Finesse, Light, Thrown | Heavier forged iron; prone to rust. |
| **Dagger (Bronze)** | `[MAT: BRONZE]` | 0 | 0 | 1d4 P | 1 lb | 2 gp | Finesse, Light, Thrown | Functional alloy; slightly more brittle. |
| **Dagger (Copper)** | `[MAT: COPPER]` | 0 | -1 | 1d4 P | 1 lb | 1 gp | Finesse, Light, Thrown | Soft metal; militia grade. |
| **Dagger (Brass)** | `[MAT: BRASS]` | 0 | -1 | 1d4 P | 1 lb | 2 gp | Finesse, Light, Thrown | Decorative alloy; ceremonial utility. |
| **Dagger (Tin)** | `[MAT: TIN]` | -1 | -2 | 1d4 P | 1 lb | 2 gp | Finesse, Light | Structural risk; ceremonial use. |
| **Dagger (Zinc)** | `[MAT: ZINC]` | -1 | -1 | 1d4 P | 1 lb | 2 gp | Finesse, Light | Brittle alloy; poor edge retention. |
| **Dagger (Lead)** | `[MAT: LEAD]` | -1 | 0 | 1d4 B | 3 lb | 2 gp | Anti-Detection | Effective barrier against detection. |
| **Dagger (Silver)** | `[MAT: SILVER]` | 0 | 0 | 1d4 P | 1 lb | 102 gp | Finesse, Light, Thrown | Bypasses non-magical resist for specific foes. |
| **Dagger (Gold)** | `[MAT: GOLD]` | -1 | -2 | 1d4 B | 3 lb | 50 gp | Finesse, Light | High value; ceremonial blunt impact. |
| **Dagger (Platinum)** | `[MAT: PLATINUM]` | -2 | -2 | 1d4 B | 4 lb | 500 gp | Finesse | Noble's ceremonial blade; extreme density. |
| **Dagger (Electrum)** | `[MAT: ELECTRUM]` | -1 | -1 | 1d4 P | 1.5 lb | 2.5 gp | Finesse, Light | High-value alloy; poor combat durability. |
| **Dagger (Adamantine)**| `[MAT: ADAMANTINE]`| 0 | 0 | 1d4 P | 2 lb | 502 gp | Finesse, Light, Thrown | Auto-crits vs objects. Ultra-hard. |
| **Dagger (Mithral)** | `[MAT: MITHRAL]` | 0 | 0 | 1d4 P | 0.5 lb | 250 gp | Finesse, Light, Thrown | Lightest/strongest silvery blade. |
| **Dagger (Cold-Formed)**| `[MAT: COLD_FORMED_STEEL]`| 0 | 0 | 1d4 P | 1 lb | 75 gp | Siege, Finesse, Light | Bypasses Fey/Fiend resistance. |
| **Dagger (Old Cut)** | `[MAT: OLD_CUT_IRON]` | 0 | 0 | 1d4 P | 1 lb | 10 gp | Finesse, Light, Thrown | Kinetic absorption; break resistant. |
| **Dagger (Deep-Iron)** | `[MAT: DEEP_IRON]` | 0 | 0 | 1d4 P | 2 lb | 10 gp | Finesse, Light, Thrown | Dense iron; non-magnetic properties. |
| **Dagger (Hi-Carbon)** | `[MAT: HI_CARBON_STEEL]`| 0 | 0 | 1d4 P | 1 lb | 4 gp | Finesse, Light, Thrown | High-purity steel for precision cutting. |

---

*\*Values and modifiers calculated algorithmically via [[engine/rules/economy.md]]*

---

## Detailed Mechanics

### Negative Modifiers (Atk/Dmg Mod)
These represent static penalties inherent to the material's physical properties. They stack with standard ability modifiers but cannot be improved without magical enchantment or complete item restoration.

### Cold-Formed Steel `[MAT: COLD_FORMED_STEEL]`
*   **Siege:** This weapon deals double damage to objects and structures.
*   **Essence:** Bypasses the damage resistance of Fey and Fiends (as if magical, though the item remains mundane).

### Old Cut Iron `[MAT: OLD_CUT_IRON]`
*   **Break Resistant:** This weapon has **Advantage** on any saving throw made to avoid being broken, shattered, or corroded.
*   **Kinetic Absorption:** When used to parry or block (if using optional rules), it reduces incoming force.

### Ceremonial Utility (Brass, Gold, Platinum, Electrum, Tin)
*   **Aesthetic Impact:** These items grant **Advantage** on Charisma (Persuasion or Performance) checks when used as a decorative prop, gift, or symbol of status among those who value wealth and artistry. 
*   **Combat Malus:** This social utility is offset by the soft or impractical nature of the material, as reflected in the Atk/Dmg modifiers.

### Impractical Material Properties (Gold, Copper, Tin, Zinc, Electrum)
*   **Structural Failure (Tin):** On a roll of a **Natural 1 or 2**, the weapon bends significantly. It cannot be used to attack again until the user spends an **Action** or **Bonus Action** to straighten it.
*   **Splintering (Zinc):** On a roll of a **Natural 1**, the weapon shatters partially. The user takes **1 Piercing damage** and the weapon's damage die is reduced to **1** until repaired.
*   **Corrodible (Iron):** Exposure to salt water or specialized acids causes the weapon to become **Strained** (See [[engine/rules/crafting.md]]) after 24 hours unless oiled.
*   **Social Utility (Brass):** Grants **Advantage** on Charisma (Persuasion or Performance) checks when used as a decorative prop or gift, but its softness imposes a **-1 Damage** penalty in combat.
*   **Static Burden:** These items are mechanically functional but socially or physically taxing. 
    *   *Example (Gold):* "The Soft Blade" - Disadvantage on Charisma (Persuasion) checks against professional warriors who recognize the weapon as a "fool's toy."
*   **Durability Check:** These items suffer **Disadvantage** on any saving throw made to avoid being broken or damaged.

### Standard Special Materials
*   **Adamantine:** See DMG p. 284. (Automatic critical hits against objects).
*   **Silvered:** See PHB p. 148. (Bypasses resistance for Lycanthropes, etc.).
*   **Mithral:** See DMG p. 182. (Extremely light; removes Strength requirements/Stealth penalties for armor).
