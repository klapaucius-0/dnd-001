# Weapons Registry [TYPE: WEAPON]
<!-- SOURCE: atlas/items/weapons.md -->

This registry defines the **Base Templates** for common weapons. Final item statistics are determined algorithmically by combining these templates with the properties of their construction material (see `atlas/crafting/materials/`).

## 1. Base Weapon Templates

### Simple Melee Weapons
| Item | Die | Type | Properties Tags | Wgt (Base) | Lab (Val) |
| :--- | :---: | :---: | :--- | :---: | :---: |
| **Club** | 1d4 | B | `[LIGHT]` | 2.0 lb | 0.1 gp |
| **Dagger** | 1d4 | P | `[FINESSE]`, `[LIGHT]`, `[THROWN]` | 1.0 lb | 1.0 gp |
| **Greatclub** | 1d8 | B | `[TWO-HANDED]` | 10.0 lb | 0.1 gp |
| **Handaxe** | 1d6 | S | `[LIGHT]`, `[THROWN]` | 2.0 lb | 3.0 gp |
| **Javelin** | 1d6 | P | `[THROWN]` | 2.0 lb | 0.1 gp |
| **Light Hammer** | 1d4 | B | `[LIGHT]`, `[THROWN]` | 2.0 lb | 0.1 gp |
| **Mace** | 1d6 | B | — | 4.0 lb | 1.0 gp |
| **Quarterstaff** | 1d6 | B | `[VERSATILE]` | 4.0 lb | 0.1 gp |
| **Sickle** | 1d4 | S | `[LIGHT]` | 2.0 lb | 0.1 gp |
| **Spear** | 1d6 | P | `[THROWN]`, `[VERSATILE]` | 3.0 lb | 0.1 gp |

### Simple Ranged Weapons
| Item | Die | Type | Properties Tags | Wgt (Base) | Lab (Val) |
| :--- | :---: | :---: | :--- | :---: | :---: |
| **Crossbow, Light** | 1d8 | P | `[AMMUNITION]`, `[LOADING]`, `[TWO-HANDED]` | 5.0 lb | 20.0 gp |
| **Dart** | 1d4 | P | `[FINESSE]`, `[THROWN]` | 0.25 lb | 0.1 gp |
| **Shortbow** | 1d6 | P | `[AMMUNITION]`, `[TWO-HANDED]` | 2.0 lb | 23.0 gp |
| **Sling** | 1d4 | B | `[AMMUNITION]` | — | 0.1 gp |

### Martial Melee Weapons
| Item | Die | Type | Properties Tags | Wgt (Base) | Lab (Val) |
| :--- | :---: | :---: | :--- | :---: | :---: |
| **Battleaxe** | 1d8 | S | `[VERSATILE]` | 4.0 lb | 6.0 gp |
| **Flail** | 1d8 | B | — | 2.0 lb | 8.0 gp |
| **Glaive** | 1d10 | S | `[REACH]`, `[TWO-HANDED]` | 6.0 lb | 14.0 gp |
| **Greataxe** | 1d12 | S | `[TWO-HANDED]` | 7.0 lb | 23.0 gp |
| **Greatsword** | 2d6 | S | `[TWO-HANDED]` | 6.0 lb | 44.0 gp |
| **Halberd** | 1d10 | S | `[REACH]`, `[TWO-HANDED]` | 6.0 lb | 14.0 gp |
| **Lance** | 1d12 | P | `[REACH]`, `[SPECIAL]` | 6.0 lb | 4.0 gp |
| **Longsword** | 1d8 | S | `[VERSATILE]` | 3.0 lb | 12.0 gp |
| **Maul** | 2d6 | B | `[TWO-HANDED]` | 10.0 lb | 0.1 gp |
| **Morningstar** | 1d8 | P | — | 4.0 lb | 11.0 gp |
| **Pike** | 1d10 | P | `[REACH]`, `[TWO-HANDED]` | 18.0 lb | 0.1 gp |
| **Rapier** | 1d8 | P | `[FINESSE]` | 2.0 lb | 23.0 gp |
| **Scimitar** | 1d6 | S | `[FINESSE]`, `[LIGHT]` | 3.0 lb | 22.0 gp |
| **Shortsword** | 1d6 | P | `[FINESSE]`, `[LIGHT]` | 2.0 lb | 8.0 gp |
| **Trident** | 1d6 | P | `[THROWN]`, `[VERSATILE]` | 4.0 lb | 1.0 gp |
| **War Pick** | 1d8 | P | — | 2.0 lb | 3.0 gp |
| **Warhammer** | 1d8 | B | `[VERSATILE]` | 2.0 lb | 13.0 gp |
| **Whip** | 1d4 | S | `[FINESSE]`, `[REACH]` | 3.0 lb | 0.1 gp |

### Martial Ranged Weapons
| Item | Die | Type | Properties Tags | Wgt (Base) | Lab (Val) |
| :--- | :---: | :---: | :--- | :---: | :---: |
| **Blowgun** | 1 | P | `[AMMUNITION]`, `[LOADING]` | 1.0 lb | 9.0 gp |
| **Crossbow, Hand** | 1d6 | P | `[AMMUNITION]`, `[LIGHT]`, `[LOADING]` | 3.0 lb | 72.0 gp |
| **Crossbow, Heavy** | 1d10 | P | `[AMMUNITION]`, `[HEAVY]`, `[LOADING]`, `[TWO-HANDED]` | 18.0 lb | 32.0 gp |
| **Longbow** | 1d8 | P | `[AMMUNITION]`, `[HEAVY]`, `[TWO-HANDED]` | 2.0 lb | 48.0 gp |
| **Net** | — | — | `[SPECIAL]`, `[THROWN]` | 3.0 lb | 0.1 gp |

### Renaissance Firearms (DMG Reference)
| Item | Die | Type | Properties Tags | Wgt (Base) | Lab (Val) |
| :--- | :---: | :---: | :--- | :---: | :---: |
| **Pistol** | 1d10 | P | `[AMMUNITION]`, `[LOADING]` | 3.0 lb | 247.0 gp |
| **Musket** | 1d12 | P | `[AMMUNITION]`, `[LOADING]`, `[TWO-HANDED]` | 10.0 lb | 490.0 gp |

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
*   **`[REACH]`**: Reference **[[PHB]] p. 147**. Adds 5 feet to your reach.
*   **`[VERSATILE]`**: Reference **[[PHB]] p. 147**. Can be used with one or two hands.
*   **`[TWO-HANDED]`**: Reference **[[PHB]] p. 147**. Requires two hands to use.
*   **`[AMMUNITION]`**: Reference **[[PHB]] p. 146**. Requires projectiles.
*   **`[LOADING]`**: Reference **[[PHB]] p. 147**. Limited to one attack per action/reaction.
*   **`[SPECIAL]`**: See individual weapon entries for unique rules.

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
