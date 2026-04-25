# Crafting & Artisan Protocol (Strict 5e / XGtE)
<!-- SOURCE: xgte_p128 -->

This file serves as the Single Source of Truth for all crafting activities. It is designed to be deterministic and reproducible for the AI.

## 1. The Core AI Protocol
To ensure consistency across sessions, the AI MUST follow this lookup sequence before any crafting action:
1.  **QUERY:** Check `atlas/crafting/blueprints.md` for the specific item.
2.  **EXECUTE:** If the item is in the registry, use the documented **Market Value**, **Crafting Time**, and **Material Cost**.
3.  **CALCULATE:** If the item is not in the registry, use the **XGtE Formulas** below to determine the values, present them to the player for approval, and then **ADD** the new item to the `blueprints.md` registry.

## 2. Mundane Crafting Formulas (XGtE p. 128)
*   **Requirement:** Proficiency with the relevant artisan's tools.
*   **Progress:** **10 gp per day** (or 50 gp per 5-day workweek).
*   **Material Cost:** **50% of the item's Market Value** in raw materials/scrap.
*   **Formula:** `Crafting Days = Market Value / 10` (Round up).

## 3. Magic Item Crafting (XGtE p. 129)
*   **Requirement:** Proficiency with relevant tools AND a specific formula (blueprint).
*   **Exotic Component:** Every magic item requires a component harvested from a monster of a specific Challenge Rating (CR).

| Item Rarity | Workweeks | Cost (gp) | Component CR |
| :--- | :---: | :---: | :---: |
| Common | 1 | 50 | 1–3 |
| Uncommon | 2 | 200 | 4–8 |
| Rare | 10 | 2,000 | 9–12 |
| Very Rare | 25 | 20,000 | 13–18 |
| Legendary | 50 | 100,000 | 19+ |

*Note: Costs and time are halved for consumable magic items (potions, scrolls).*

## 4. Special Materials (Strict 5e)
*   **Adamantine (XGtE/DMG):** Any melee attack that hits an object with an adamantine weapon or ten 10-foot-square sections of an object is a critical hit. Armor made of adamantine turns any critical hit against the wearer into a normal hit.
*   **Mithral (DMG):** If the armor normally imposes disadvantage on Stealth checks or has a Strength requirement, the mithral version of the armor doesn't.
*   **Silvered (PHB):** Some monsters that have resistance or immunity to nonmagical weapons are susceptible to silvered weapons. Silvering a single weapon or ten pieces of ammunition costs 100 gp.

## 5. Tool Proficiencies & Benefits (XGtE p. 78)
Artisan tools grant specific benefits beyond just crafting. If a character is proficient in both a tool and a relevant skill, they gain **Advantage** on checks involving both.

### Examples:
*   **Smith's Tools:** Can repair 10 HP to a metal object per hour of work.
*   **Leatherworker's Tools:** Can identify the origin of a leather hide or creature.
*   **Cook's Utensils:** Can improve short rest healing by +1 HP per Hit Die spent.

---
*\*All rules are derived strictly from official 2014-era D&D 5e sourcebooks.*
