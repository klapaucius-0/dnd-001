# Crafting & Artisan Rules

## 1. Crafting Balance Philosophy ([HOMEBREW])
The core design philosophy for all artisan work in "The Sorrow" is **"Utility Over Arithmetic."**
*   **Bounded Accuracy Preservation:** Non-magical materials and craftsmanship MUST NOT provide flat numerical bonuses (+1 to hit/AC) that stack with late-game enchantments.
*   **Horizontal Progression:** Upgrades provide situational utility, increased durability, or unlock specific tool gates.
*   **Enchantment Compatibility:** Masterwork items made of rare materials retain their utility tags when enchanted, integrating seamlessly with standard D&D 5e magic items.

## 2. AI-Optimized Tagging (KVP System)
To ensure AI consistency, all items in the inventory and encyclopedias use Key-Value Pair (KVP) tags.
*   **Inventory Syntax:** `[Item Name] [MAT: X] [QUAL: Y]`
*   **Default State:** Any item without a tag is assumed to be `[MAT: STANDARD] [QUAL: STANDARD]`.
*   **Single Source of Truth (SSOT):** The inventory holds only tags; mechanical effects are determined by cross-referencing the tags with the Artisan Encyclopedias in `atlas/crafting/`.

## 3. Workability Rating (WR) & Tool Tiers ([HOMEBREW])
The **Workability Rating (WR)** of a material determines the base difficulty of the Artisan Check.

| Tier | Classification | Workability (WR) Range | Description |
| :--- | :--- | :--- | :--- |
| 0 | **Improvised** | WR 1-9 | Scavenged junk; Disadvantage on checks. |
| 1 | **Standard Kit** | WR 10-14 | Standard Artisan kits ([[PHB]]). |
| 2 | **Cold-Forming** | WR 15-17 | High-pressure support tools (e.g., Vice-Clamp). |
| 3 | **Masterwork** | WR 18+ | Permanent high-pressure setups. |

*   **Tool Durability:** A tool's Material WR must be $\ge$ the target material's WR. Using a lower-WR tool on higher-WR material shatters the tool.

## 4. The Cold-Forming Process ([HOMEBREW])
Cold-Forming is an extreme-pressure crafting *process* applied to metals (usually Standard Steel).
*   **Labor Hours (LH):** 1 hour = 1.25gp of base PHB value (4x slower than fire-forging).
*   **The Result:** Finished items gain the `[MAT: COLD_FORMED_STEEL]` tag.
*   **Strain Fatigue:** Every 4-hour block carries a risk.
    *   **Success (vs WR/DC):** Progress made (4 LH).
    *   **Failure:** No progress; material becomes **Strained** (Disadvantage on next check).
    *   **Failure while Strained:** Material becomes **Brittle** (Shatters on a Natural 1).
*   **Cold-Annealing:** Spend 4 LH to perform "Stress Relief" (DC 10). Success removes Strained/Brittle.

## 5. Item Quality & Static Target DCs ([HOMEBREW])
Quality applies exclusively to finished items resulting from an Artisan Check. It is **not** inherent to raw materials. An artisan must explicitly choose which Quality DC they are attempting to hit before beginning a project.

| Quality Tag | Target DC | Mechanical Utility (Strictly Non-Combat Math) |
| :--- | :---: | :--- |
| `[QUAL: POOR]` | Fail | **Fragile:** 50% chance to break on a Nat 1 (Attack) or Critical Hit (Armor). |
| `[QUAL: STANDARD]` | Material WR | Standard PHB rules. No utility bonus. |
| `[QUAL: FINE]` | **20** | **Superior Fit:** Advantage vs. Disarm (Weapon); sleep in armor without Exhaustion. |
| `[QUAL: SUPERIOR]` | **25** | **Silvered Construction:** Bypasses mundane resistances; half time to don/doff. |
| `[QUAL: MASTERWORK]` | **30** | **Unending Edge:** Adv. on social checks with nobles/artisans; never rusts, warps, or dulls. |

## 6. Maintenance & Restoration
*   **Minor Repair:** Restoring 1 HP to a damaged object. (1 LH, DC 10).
*   **Structural Restoration:** Fixing a "Broken" item. (4-8 LH, DC 15). Requires 1/4 the original material cost.
