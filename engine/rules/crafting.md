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
| `[QUAL: POOR]` | Fail | **Static Burden:** The item functions, but imposes permanent static drawbacks (e.g., Disadvantage on checks, reduced speed, or social penalties). It does not randomly break. |
| `[QUAL: STANDARD]` | Material WR | Standard PHB rules. No utility bonus. |
| `[QUAL: FINE]` | **20** | **Superior Fit:** Advantage vs. Disarm (Weapon); sleep in armor without Exhaustion. |
| `[QUAL: SUPERIOR]` | **25** | **Silvered Construction:** Bypasses mundane resistances; half time to don/doff. |
| `[QUAL: MASTERWORK]` | **30** | **Unending Edge:** Adv. on social checks with nobles/artisans; never rusts, warps, or dulls. |

## 6. Maintenance & Restoration
*   **Minor Repair:** Restoring 1 HP to a damaged object. (1 LH, DC 10).
*   **Structural Restoration:** Fixing a "Broken" item. (4-8 LH, DC 15). Requires 1/4 the original material cost.

## 7. Material Substitution & Blueprint Resolution ([HOMEBREW])
This protocol defines how the AI resolves crafting actions when multiple blueprints or generic material categories are involved.

### A. Material Consumption & Partial Usage ([HOMEBREW])
To maintain inventory integrity, the following rules apply to all crafting projects:
1.  **Immediate Consumption:** All materials listed in a blueprint's Component List are removed from the inventory **immediately** upon the completion of the final Labor Hour block.
2.  **Discrete vs. Continuous Materials:**
    *   **Discrete (Bolts, Crates, Bundles):** These items are consumed in their entirety for a single project (e.g., 1x Crate of Nails).
    *   **Continuous (Tallow, Oil, Thread):** These items are tracked by **Uses** (typically 10 uses per standard unit). Each project consumes 1 Use unless otherwise specified by the blueprint.
3.  **Partial Logging:** When a continuous material is used, the `logs/inventory_log.md` must reflect the change as `-1 Use` and show the remaining total (e.g., `9/10`).

### B. The Blueprint Consultation Phase (Mandatory DM Workflow)
To ensure player agency, the DM must follow this phase **before** any Labor Hours are committed:
1.  **Player Proposal:** Player states the Blueprint, Material, and target Quality.
2.  **DM Calculation:** DM uses `node engine/scripts/crafting_dc_calc.js <Material_WR> <Blueprint_Mod> <Quality>` to find the Final DC.
3.  **The Pitch:** DM presents the Total Blocks (from the SCALE tag) and the Final DC to the player.
4.  **Player Decision:** Player confirms, adjusts, or cancels the project.

### B. Scale & Duration ([HOMEBREW])
The `[SCALE: X]` tag on a blueprint determines the duration of the project (Labor Hours), while the `[MOD: +Y]` tag determines its mechanical difficulty.

| Scale Tier | Total 4-hour Blocks | Total Labor Hours (LH) |
| :--- | :---: | :---: |
| **TRIVIAL** | 1-2 | 4-8 |
| **MINOR** | 3-6 | 12-24 |
| **MODERATE** | 7-12 | 28-48 |
| **MAJOR** | 13-24 | 52-96 |
| **MASSIVE** | 25+ | 100+ |

### C. The Specificity Rule (AI Resolution Logic)
1.  **Exact Match (High Priority):** If a blueprint exists specifically for the `[MAT: X]` used, it **MUST** be used.
2.  **Category Fallback (Low Priority):** If no exact match exists, the AI uses a generic blueprint matching the material's `[CAT: Y]`.

### D. Dynamic DC Calculation
For all blueprint-based crafting, the AI **MUST** use the `engine/scripts/crafting_dc_calc.js` script to determine the final DC.

### E. Output Scaling
The resulting item inherits the `[MAT: X]` tag of the specific material used, along with its intrinsic properties.

## 8. Salvage & Scrap Resolution ([HOMEBREW])
To provide a structured path toward heavy armor or large-scale projects, mundane scrap can be refined into usable materials.
*   **The Yield Ratio:** 10 lbs of scavenged, rusted, or impure scrap yields 1 lb of refined material.
*   **Material Conservation:** The refined output perfectly matches the input material (e.g., 10 lbs of iron scrap yields 1 lb of `[MAT: IRON]`; 10 lbs of steel scrap yields 1 lb of `[MAT: STEEL]`).
*   **The Process:** Requires 1 Labor Hour (often done during a Short Rest) and access to Smith's Tools.

