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
*   **Labor Hours (LH):** 1 hour = 1.25gp of base PHB value (4x slower than fire-forging). See [[engine/rules/economy.md]] for the 0.5 gp/LH conversion rate for custom projects.
*   **The Result:** Finished items gain the `[MAT: COLD_FORMED_STEEL]` tag.
*   **Strain Fatigue:** Every 4-hour block carries a risk.
    *   **Success (vs WR/DC):** Progress made (4 LH).
    *   **Failure:** No progress; material becomes **Strained** (Disadvantage on next check).
    *   **Failure while Strained:** Material becomes **Brittle** (Shatters on a Natural 1).
*   **Cold-Annealing:** Spend 4 LH to perform "Stress Relief" (DC 10). Success removes Strained/Brittle.

## 5. Rules-Based Crafting & Smelting (AI Protocol)
To ensure physical and economic consistency without context bloat, "The Sorrow" uses deterministic algebraic formulas for all crafting and salvage.

### A. The 10% Inlay Rule (Constituent Mass)
Rare metal items (Mithral, Adamantine, Silvered) are not chemically mixed alloys; they are base metal structures (Steel/Iron) enhanced with **Inlays, Core-Weaves, or Platings**.
*   **Premium Component:** Exactly **10%** of the item's physical weight.
*   **Base Component:** Exactly **90%** of the item's physical weight.

### B. Crafting Labor & Requirements
*   **Labor Required:** `Labor Hours (LH) = (Total Market Value in gp) * 2`. (Source: [[XGE p. 128]])
*   **Material Requirements (Component Cost):** 
    *   **Metals:** Supply weight equal to the item's constituent mass (10% Premium / 90% Base).
    *   **Auxiliary Materials:** The remaining gp cost (up to 50% of Market Value) represents consumed fuel, leather, and flux.

### C. Smelting Yield & Salvage Hierarchy
Smelting requires access to Smith's Tools and a high-heat Forge.
*   **Smelting Labor:** `LH = Total Item Weight / 5` (Minimum 1 LH).
*   **The Yield Hierarchy:**
    1.  **Intact Items:** Yield **100%** of constituent metal mass (10% Premium / 90% Base).
    2.  **Damaged/Broken Items:** Yield **50%** of constituent metal mass.
    3.  **Mundane Scrap:** Yield **10%** of physical mass. (Premium properties are lost).
*   **Separation Lore:** Rare metals melt at vastly different temperatures than steel; forge heat allows them to pools separately for clean extraction.

## 6. Item Quality & Static Target DCs ([HOMEBREW])
Quality applies exclusively to finished items resulting from an Artisan Check. An artisan must explicitly choose which Quality DC they are attempting before beginning.

| Quality Tag | Target DC | Mechanical Utility (Strictly Non-Combat Math) |
| :--- | :---: | :--- |
| `[QUAL: POOR]` | Fail | **Static Burden:** Disadv. on checks, or social penalties. |
| `[QUAL: STANDARD]` | Material WR | Standard PHB rules. No utility bonus. |
| `[QUAL: FINE]` | **20** | **Superior Fit:** Adv. vs. Disarm (Weapon); sleep in armor safely. |
| `[QUAL: SUPERIOR]` | **25** | **Silvered Construction:** Bypasses mundane resistances. |
| `[QUAL: MASTERWORK]` | **30** | **Unending Edge:** Adv. on social checks; never rusts or dulls. |

## 7. Maintenance & Restoration
*   **Minor Repair:** Restoring 1 HP to a damaged object. (1 LH, DC 10).
*   **Structural Restoration:** Fixing a "Broken" item. (4-8 LH, DC 15). Requires 1/4 the original material cost. Restoring a broken item to "Intact" status before smelting is a valid survival tactic to maximize yields.

---
*\*Note to DM: Selling gear is always superior for acquiring Gold. Smelting gear is a survival tactic for procuring raw or rare materials when trade is impossible. Recognize this as a valid player strategy.*
