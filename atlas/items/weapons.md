# Weapons Registry [TYPE: WEAPON]
<!-- SOURCE: atlas/items/weapons.md -->

This registry defines the **Base Templates** for common weapons. Final item statistics are determined algorithmically by combining these templates with the properties of their construction material using the **Universal Formulas** in [[engine/rules/crafting.md]].

## 1. Base Weapon Templates

### Simple Melee Weapons
| Item | Die | Type | Properties Tags | Wgt (Base) | Lab (Val) | Source |
| :--- | :---: | :---: | :--- | :---: | :---: | :--- |
| **Club** | 1d4 | B | `[LIGHT]` | 2.0 lb | 0.1 gp | `[[PHB]]` |
| **Dagger** | 1d4 | P | `[FINESSE]`, `[LIGHT]`, `[THROWN]` | 1.0 lb | 1.0 gp | `[[PHB]]` |
| **Greatclub** | 1d8 | B | `[TWO-HANDED]` | 10.0 lb | 0.1 gp | `[[PHB]]` |
| **Handaxe** | 1d6 | S | `[LIGHT]`, `[THROWN]` | 2.0 lb | 3.0 gp | `[[PHB]]` |
| **Javelin** | 1d6 | P | `[THROWN]` | 2.0 lb | 0.1 gp | `[[PHB]]` |
| **Light Hammer** | 1d4 | B | `[LIGHT]`, `[THROWN]` | 2.0 lb | 0.1 gp | `[[PHB]]` |
| **Mace** | 1d6 | B | — | 4.0 lb | 1.0 gp | `[[PHB]]` |
| **Quarterstaff** | 1d6 | B | `[VERSATILE]` | 4.0 lb | 0.1 gp | `[[PHB]]` |
| **Sickle** | 1d4 | S | `[LIGHT]` | 2.0 lb | 0.1 gp | `[[PHB]]` |
| **Spear** | 1d6 | P | `[THROWN]`, `[VERSATILE]` | 3.0 lb | 0.1 gp | `[[PHB]]` |

### Simple Ranged Weapons
| Item | Die | Type | Properties Tags | Wgt (Base) | Lab (Val) | Source |
| :--- | :---: | :---: | :--- | :---: | :---: | :--- |
| **Crossbow, Light** | 1d8 | P | `[AMMUNITION]`, `[LOADING]`, `[TWO-HANDED]` | 5.0 lb | 20.0 gp | `[[PHB]]` |
| **Dart** | 1d4 | P | `[FINESSE]`, `[THROWN]` | 0.25 lb | 0.1 gp | `[[PHB]]` |
| **Shortbow** | 1d6 | P | `[AMMUNITION]`, `[TWO-HANDED]` | 2.0 lb | 23.0 gp | `[[PHB]]` |
| **Sling** | 1d4 | B | `[AMMUNITION]` | — | 0.1 gp | `[[PHB]]` |

### Martial Melee Weapons
| Item | Die | Type | Properties Tags | Wgt (Base) | Lab (Val) | Source |
| :--- | :---: | :---: | :--- | :---: | :---: | :--- |
| **Battleaxe** | 1d8 | S | `[VERSATILE]` | 4.0 lb | 6.0 gp | `[[PHB]]` |
| **Flail** | 1d8 | B | — | 2.0 lb | 8.0 gp | `[[PHB]]` |
| **Glaive** | 1d10 | S | `[REACH]`, `[TWO-HANDED]` | 6.0 lb | 14.0 gp | `[[PHB]]` |
| **Greataxe** | 1d12 | S | `[TWO-HANDED]` | 7.0 lb | 23.0 gp | `[[PHB]]` |
| **Greatsword** | 2d6 | S | `[TWO-HANDED]` | 6.0 lb | 44.0 gp | `[[PHB]]` |
| **Halberd** | 1d10 | S | `[REACH]`, `[TWO-HANDED]` | 6.0 lb | 14.0 gp | `[[PHB]]` |
| **Lance** | 1d12 | P | `[REACH]`, `[SPECIAL]` | 6.0 lb | 4.0 gp | `[[PHB]]` |
| **Longsword** | 1d8 | S | `[VERSATILE]` | 3.0 lb | 12.0 gp | `[[PHB]]` |
| **Maul** | 2d6 | B | `[TWO-HANDED]` | 10.0 lb | 0.1 gp | `[[PHB]]` |
| **Morningstar** | 1d8 | P | — | 4.0 lb | 11.0 gp | `[[PHB]]` |
| **Pike** | 1d10 | P | `[REACH]`, `[TWO-HANDED]` | 18.0 lb | 0.1 gp | `[[PHB]]` |
| **Rapier** | 1d8 | P | `[FINESSE]` | 2.0 lb | 23.0 gp | `[[PHB]]` |
| **Scimitar** | 1d6 | S | `[FINESSE]`, `[LIGHT]` | 3.0 lb | 22.0 gp | `[[PHB]]` |
| **Shortsword** | 1d6 | P | `[FINESSE]`, `[LIGHT]` | 2.0 lb | 8.0 gp | `[[PHB]]` |
| **Trident** | 1d6 | P | `[THROWN]`, `[VERSATILE]` | 4.0 lb | 1.0 gp | `[[PHB]]` |
| **War Pick** | 1d8 | P | — | 2.0 lb | 3.0 gp | `[[PHB]]` |
| **Warhammer** | 1d8 | B | `[VERSATILE]` | 2.0 lb | 13.0 gp | `[[PHB]]` |
| **Whip** | 1d4 | S | `[FINESSE]`, `[REACH]` | 3.0 lb | 0.1 gp | `[[PHB]]` |

### Martial Ranged Weapons
| Item | Die | Type | Properties Tags | Wgt (Base) | Lab (Val) | Source |
| :--- | :---: | :---: | :--- | :---: | :---: | :--- |
| **Blowgun** | 1 | P | `[AMMUNITION]`, `[LOADING]` | 1.0 lb | 9.0 gp | `[[PHB]]` |
| **Crossbow, Hand** | 1d6 | P | `[AMMUNITION]`, `[LIGHT]`, `[LOADING]` | 3.0 lb | 72.0 gp | `[[PHB]]` |
| **Crossbow, Heavy** | 1d10 | P | `[AMMUNITION]`, `[HEAVY]`, `[LOADING]`, `[TWO-HANDED]` | 18.0 lb | 32.0 gp | `[[PHB]]` |
| **Longbow** | 1d8 | P | `[AMMUNITION]`, `[HEAVY]`, `[TWO-HANDED]` | 2.0 lb | 48.0 gp | `[[PHB]]` |
| **Net** | — | — | `[SPECIAL]`, `[THROWN]` | 3.0 lb | 0.1 gp | `[[PHB]]` |

### Renaissance Firearms
| Item | Die | Type | Properties Tags | Wgt (Base) | Lab (Val) | Source |
| :--- | :---: | :---: | :--- | :---: | :---: | :--- |
| **Pistol** | 1d10 | P | `[AMMUNITION]`, `[LOADING]` | 3.0 lb | 247.0 gp | `[[DMG]]` |
| **Musket** | 1d12 | P | `[AMMUNITION]`, `[LOADING]`, `[TWO-HANDED]` | 10.0 lb | 490.0 gp | `[[DMG]]` |

## 2. Dynamic Calculation Rules (AI Protocol)
To generate final statistics, combine a Template with a Material from `atlas/crafting/materials/metals.md` using these formulas.

### A. Combat Statistics
*   **Final Atk/Dmg Bonus:** `Material ATK/DMG Mod`
*   **Final Properties:** `Base Properties + Material Weapon Traits`

### B. Physical & Economic Statistics
*   **Final Weight:** `Base Weight * Material WGT Mult`
*   **Final Value:** `Base Lab Val + (Final Weight * Material Value/Unit)`
*   **The 10% Inlay Rule:** If crafting with a Premium Material (Mithral, Adamantine, Silvered), the item requires **10%** of its weight in the Premium metal and **90%** in the Base metal (Steel). See [[engine/rules/crafting.md]] for exact math.

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
