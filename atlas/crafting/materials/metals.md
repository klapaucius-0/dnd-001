# Metals Encyclopedia [CAT: METAL]
<!-- SOURCE: atlas/crafting/materials/metals.md -->

| Material | MAT Tag | Freq | WGT (Mult) | ATK* | DMG* | ARM* | Weapon Traits | Armor Traits | Source | WR (DC) | Value/Unit | Core Utility / Origin |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- | :--- | :--- | :---: | :--- | :--- |
| **Steel** | `[MAT: STEEL]` | `[FREQ: COMMON]` | x1.0 | +0 | +0 | +0 | — | — | `[[PHB]]` | 13 | 1 gp / lb | Standard iron or steel. |
| **Adamantine** | `[MAT: ADAMANTINE]` | `[FREQ: VERY_RARE]` | x2.5 | +0 | +0 | +0 | `[ADAMANTINE]` | `[ADAMANTINE]` | `[[DMG]]` | 20 | 500 gp / lb | Hardest substance. *See Detailed Mechanics.* |
| **Mithral** | `[MAT: MITHRAL]` | `[FREQ: VERY_RARE]` | x0.5 | +0 | +0 | +0 | `[MITHRAL]` | `[MITHRAL]` | `[[DMG]]` | 18 | 250 gp / lb | Light silvery metal. *See Detailed Mechanics.* |
| **Cold-Formed** | `[MAT: COLD_FORMED_STEEL]` | `[FREQ: VERY_RARE]` | x1.0 | +0 | +0 | +0 | `[SIEGE]`, `[ESSEN]` | `[STABLE]` | `[HOMEBREW]` | N/A | N/A | Result of Cold-Forming. *See Detailed Mechanics.* |
| **High-Carbon** | `[MAT: HI_CARBON_STEEL]` | `[FREQ: UNCOMMON]` | x1.0 | +0 | +0 | +0 | `[FINE]` | — | `[HOMEBREW]` | 15 | N/A | For masterwork cutting tools. |
| **Bronze** | `[MAT: BRONZE]` | `[FREQ: UNCOMMON]` | x1.0 | -1 | +0 | +0 | `[BRITTLE]` | — | `[[PHB]]` | 12 | 2 gp / lb | Durable alloy; corrosion resistant. |
| **Iron** | `[MAT: IRON]` | `[FREQ: COMMON]` | x1.0 | +0 | -1 | +0 | `[CORRODIBLE]` | `[CORRODIBLE]` | `[[PHB]]` | 12 | 1 gp / lb | Basic forged iron; prone to rust. |
| **Old Cut Iron** | `[MAT: OLD_CUT_IRON]` | `[FREQ: RARE]` | x1.0 | +0 | -1 | +0 | `[BREAK_RES]`, `[KINETIC]` | — | `[HOMEBREW]` | 16 | N/A | Distinctive blue-grey; absorbs vibration. |
| **Deep-Iron** | `[MAT: DEEP_IRON]` | `[FREQ: RARE]` | x1.5 | +0 | -1 | +0 | `[NON_MAGNETIC]` | — | `[HOMEBREW]` | 18 | N/A | Rare dense formations. Tier 3 requirement. |
| **Silvered** | `[MAT: SILVER]` | `[FREQ: UNCOMMON]` | x1.5 | +0 | +0 | +0 | `[SILVERED]` | — | `[[PHB]]` | 11 | 5 gp / lb | Bypasses specific damage resistances. |
| **Brass** | `[MAT: BRASS]` | `[FREQ: UNCOMMON]` | x1.0 | +0 | -2 | +0 | `[CEREMONIAL]` | `[CEREMONIAL]` | `[[PHB]]` | 11 | 1.5 gp / lb | Alloy of copper and zinc; precision tools. |
| **Copper** | `[MAT: COPPER]` | `[FREQ: COMMON]` | x1.0 | +0 | -2 | +0 | `[MALLEABLE]` | — | `[[PHB]]` | 11 | 5 sp / lb | Soft, ductile metal; high conductivity. |
| **Electrum** | `[MAT: ELECTRUM]` | `[FREQ: RARE]` | x1.5 | -1 | -2 | +0 | `[CEREMONIAL]` | `[CEREMONIAL]` | `[[PHB]]` | 11 | 2.5 gp / lb | Natural alloy of gold and silver. |
| **Tin** | `[MAT: TIN]` | `[FREQ: UNCOMMON]` | x1.0 | -1 | -3 | +0 | `[FAIL: 1-2]` | — | `[[PHB]]` | 8 | 3 sp / lb | Soft alloying agent for Bronze. |
| **Zinc** | `[MAT: ZINC]` | `[FREQ: UNCOMMON]` | x1.0 | -1 | -3 | +0 | `[SHATTER: 1]` | — | `[[PHB]]` | 9 | 4 sp / lb | Bluish-white metal used for Brass. |
| **Lead** | `[MAT: LEAD]` | `[FREQ: COMMON]` | x1.5 | -1 | -3 | +0 | `[HEAVY]`, `[ANTI_DET]` | `[ANTI_DET]` | `[[PHB]]` | 9 | 1 sp / lb | Barrier against magic and detection. |
| **Gold** | `[MAT: GOLD]` | `[FREQ: RARE]` | x2.5 | -1 | -3 | +0 | `[HEAVY]`, `[CEREMONIAL]` | `[CEREMONIAL]` | `[[PHB]]` | 10 | 50 gp / lb | Very soft; often [QUAL: POOR]. |
| **Platinum** | `[MAT: PLATINUM]` | `[FREQ: VERY_RARE]` | x3.0 | -2 | -3 | +0 | `[HEAVY]`, `[CEREMONIAL]` | `[CEREMONIAL]` | `[[PHB]]` | 11 | 500 gp / lb | Highest currency; high-tier magic gear. |
| **Mercury** | `[MAT: MERCURY]` | `[FREQ: RARE]` | x1.0 | +0 | +0 | +0 | — | — | `[[XGTE]]` | N/A | 10 gp / lb | Alchemical catalyst. |

---

*\*Modifiers MUST be <= 0. Use [[engine/rules/house_rules.md]] for property definitions.*

---

## Detailed Mechanics

### Deep-Iron `[MAT: DEEP_IRON]`
*   **Mechanical Utility:** Required for Tier 3 tools and high-pressure structural frames.
*   **Refining Requirements:** Must be cold-formed. Exposure to heat destroys its molecular stability.

### Cold-Formed Steel `[MAT: COLD_FORMED_STEEL]`
*   **Weapon Utility:** Bypasses non-magical bludgeoning/piercing/slashing resistance for Fey and Fiends. Grants **Siege** (double damage to objects/structures).
*   **Armor Utility:** Grant the wearer **Advantage** on Strength saving throws against being moved or knocked prone.

### Old Cut Iron `[MAT: OLD_CUT_IRON]`
*   **Mechanical Effects:** Absorbs kinetic energy. Tools made of this material grant **Advantage** on checks to avoid tool breakage.

### Adamantine `[MAT: ADAMANTINE]`
*   **Mechanical Effects:** Armor made of adamantine turns any critical hit into a normal hit. Weapons made of adamantine deal automatic critical hits to objects.

### Mithral `[MAT: MITHRAL]`
*   **Mechanical Effects:** Mithral armor negates Disadvantage on Stealth checks and removes Strength requirements.

---

*\*Calculated via [[engine/rules/economy.md]]*
