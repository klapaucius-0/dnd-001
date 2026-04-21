# Armour Registry [TYPE: ARMOUR]
<!-- SOURCE: atlas/items/armour.md -->

This registry defines the **Base Templates** for common armours and shields. Final item statistics are determined algorithmically by combining these templates with the properties of their construction material using the **Universal Formulas** in [[engine/rules/crafting.md]].

## 1. Base Armour Templates

### Light Armour
| Item | Base AC | Stealth | STR Req | Wgt (Base) | Lab (Val) | Source |
| :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **Padded** | 11 + Dex | Disadvantage | — | 8.0 lb | 1.0 gp | `[[PHB]]` |
| **Leather** | 11 + Dex | — | — | 10.0 lb | 8.0 gp | `[[PHB]]` |
| **Studded Leather** | 12 + Dex | — | — | 13.0 lb | 30.0 gp | `[[PHB]]` |

### Medium Armour
| Item | Base AC | Stealth | STR Req | Wgt (Base) | Lab (Val) | Source |
| :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **Hide** | 12 + Dex (max 2) | — | — | 12.0 lb | 8.0 gp | `[[PHB]]` |
| **Chain Shirt** | 13 + Dex (max 2) | — | — | 20.0 lb | 30.0 gp | `[[PHB]]` |
| **Scale Mail** | 14 + Dex (max 2) | Disadvantage | — | 45.0 lb | 5.0 gp | `[[PHB]]` |
| **Breastplate** | 14 + Dex (max 2) | — | — | 20.0 lb | 380.0 gp | `[[PHB]]` |
| **Spiked Armor** | 14 + Dex (max 2) | Disadvantage | — | 45.0 lb | 30.0 gp | `[[SCAG]]` |
| **Half Plate** | 15 + Dex (max 2) | Disadvantage | — | 40.0 lb | 710.0 gp | `[[PHB]]` |

### Heavy Armour
| Item | Base AC | Stealth | STR Req | Wgt (Base) | Lab (Val) | Source |
| :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **Ring Mail** | 14 | Disadvantage | — | 40.0 lb | 5.0 gp | `[[PHB]]` |
| **Chain Mail** | 16 | Disadvantage | Str 13 | 55.0 lb | 20.0 gp | `[[PHB]]` |
| **Splint** | 17 | Disadvantage | Str 15 | 60.0 lb | 140.0 gp | `[[PHB]]` |
| **Plate** | 18 | Disadvantage | Str 15 | 65.0 lb | 1435.0 gp | `[[PHB]]` |

### Shields
| Item | Base AC | Stealth | STR Req | Wgt (Base) | Lab (Val) | Source |
| :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **Shield** | +2 | — | — | 6.0 lb | 4.0 gp | `[[PHB]]` |

## 2. Dynamic Calculation Rules (AI Protocol)
To generate final statistics, combine a Template with a Material from `atlas/crafting/materials/metals.md` using these formulas.

### A. Protective Statistics
*   **Final AC:** `Base AC + Material ARM Mod`
*   **Final Traits:** `Base Stealth/STR Req + Material Armor Traits`
    *   *Note:* If material removes Stealth Disadvantage (e.g., Mithral), the "Disadvantage" trait is negated.

### B. Physical & Economic Statistics
*   **Final Weight:** `Base Weight * Material WGT Mult`
*   **Final Value:** `Base Lab Val + (Final Weight * Material Value/Unit)`
*   **The 10% Inlay Rule:** If crafting with a Premium Material (Mithral, Adamantine, Silvered), the item requires **10%** of its weight in the Premium metal and **90%** in the Base metal (Steel). See [[engine/rules/crafting.md]] for exact math.

---

## Standard Armour Rules (PHB Reference)
*   **Dexterity Modifier:**
    *   **Light Armour:** Add your full Dexterity modifier to your AC.
    *   **Medium Armour:** Add your Dexterity modifier to your AC, up to a maximum of +2.
    *   **Heavy Armour:** Do not add your Dexterity modifier to your AC.
*   **Stealth:** If the Armour table shows "Disadvantage" in the Stealth column, the wearer has disadvantage on Dexterity (Stealth) checks.
*   **Strength:** If the Armour table shows a "Str" score in the STR Req column, the armour reduces the wearer's speed by 10 feet unless the wearer has a Strength score equal to or higher than the listed score.
*   **Shields:** A shield is made from wood or metal and is carried in one hand. Wielding a shield increases your Armor Class by 2. You can benefit from only one shield at a time.

## Material Property Index (Agent Reference)

### Standard 5e Rules
*   **`[ADAMANTINE]`**: Reference **[[DMG]] p. 284**. Any critical hit against you becomes a normal hit.
*   **`[MITHRAL]`**: Reference **[[DMG]] p. 182**. If the armour normally imposes disadvantage on Stealth checks or has a Strength requirement, the mithral version of the armour does not.

### Sorrow House Rules (Simplified)
*   **`[CORRODIBLE]`**: Becomes `[STRAINED]` after 24h exposure to salt/acid without oil.
*   **`[ANTI_DET]`**: Cannot be detected by *Detect Magic* or *Locate Object*.
*   **`[CEREMONIAL]`**: Adv. on Charisma (Persuasion) vs. non-combatants; Disadv. on Charisma (Intimidation) vs. combatants.
*   **`[STABLE]`**: Grant the wearer **Advantage** on Strength saving throws against being moved or knocked prone.
