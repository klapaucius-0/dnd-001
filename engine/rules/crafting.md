# Crafting & Cold-Forming Rules

## 1. Tool Specialization
Crafting in "The Sorrow" is defined by the tools available. A standard smithy is designed for heat; Wael’s craft requires tools that can withstand and exert immense pressure in the cold.

### Tool Tiers
Refer to `atlas/crafting/tools.md` for specific tool properties and tier classifications.

| Tier | Classification | Description | Crafting Capability |
| :--- | :--- | :--- | :--- |
| 0 | **Improvised** | Scavenged items, makeshift stones. | Repairs only; Disadvantage on checks. |
| 1 | **Standard Kit** | Standard Artisan kits ([[PHB]]). | Material HR 10-14; Basic maintenance. |
| 2 | **Cold-Forming Implements** | High-pressure support tools. | Material HR 15-17; "Cold-Forged" quality. |
| 3 | **Masterwork/Stationary** | Permanent high-pressure setups. | Material HR 18+; Exceptional/Magical items. |

## 2. The Cold-Forming Mechanic ([HOMEBREW])
Cold-forming is the process of compressing metal through rhythmic, high-pressure strikes (**Work-Hardening**).

*   **Labor Hours (LH)**: Calculated based on the **Base Market Value** of the item.
    *   *Standard Forging (PHB)*: 1 hour = 5gp of value.
    *   *Cold-Forming*: 1 hour = 1.25gp of base value (4x slower).
*   **Strain Hardening (The Benefit)**: Cold-formed items gain the **Cold-Forged** tag.
    *   **Cold-Forged Weapons**: Gain the **Siege** property (double damage to objects).
    *   **Cold-Forged Armor**: Grant **Advantage** on Strength saving throws against being moved or prone.
*   **Strain Fatigue (The Risk)**: Every 4-hour block of work carries a risk of internal stress.
    *   **Success (vs HR)**: Progress made (4 LH).
    *   **Failure**: No progress. The material becomes **Strained** (Disadvantage on the next check).
    *   **Failure while Strained**: The material becomes **Brittle**. Shatters on a Natural 1.
*   **Cold-Annealing (Stress Relief)**: Spend 4 LH to perform "Stress Relief" (DC 10). A success removes **Strained** or **Brittle**.

## 3. Material Durability (Hardness Rating) ([HOMEBREW])
The Hardness Rating (HR) of a material serves as the Base DC for all Artisan Checks. Refer to `atlas/crafting/materials.md` for specific HR values.

## 4. Item Maintenance & Structural Restoration
*   **Minor Repair**: Restoring 1 HP to a damaged object. (1 LH, DC 10).
*   **Structural Restoration**: Fixing a "Broken" item. (4-8 LH, DC 15). Requires 1/4 the original material cost.

## 5. Alchemy & Herbalism
Uses Intelligence or Wisdom (Medicine/Nature).
*   **Tinctures/Poultices**: 2 LH per dose.
*   **Complex Decoctions**: 8 LH per dose. Requires specialized glassware.

## 6. Blueprints & Schematics
All blueprints for complex items, prosthetics, or architectural projects are recorded in `atlas/crafting/blueprints.md`. Constructing these items requires fulfilling the specific Material, Tool, and LH requirements listed therein.
