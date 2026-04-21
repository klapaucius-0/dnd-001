# Metals Encyclopedia [CAT: METAL]
<!-- SOURCE: atlas/crafting/materials/metals.md -->

| Material | MAT Tag | Freq | WGT (Mult) | ATK* | DMG* | ARM* | Weapon Traits | Armor Traits | Source | WR (DC) | Value/Unit | Core Utility / Origin |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- | :--- | :--- | :---: | :--- | :--- |
| **Steel** | `[MAT: STEEL]` | `[FREQ: COMMON]` | x1.0 | +0 | +0 | +0 | — | — | `[[PHB]]` | 13 | 1 gp / lb | Standard iron or steel. |
| **Iron** | `[MAT: IRON]` | `[FREQ: COMMON]` | x1.0 | +0 | -1 | +0 | `[CORRODIBLE]` | `[CORRODIBLE]` | `[[PHB]]` | 12 | 1 sp / lb | Basic forged iron; prone to rust. |
| **Copper** | `[MAT: COPPER]` | `[FREQ: COMMON]` | x1.0 | +0 | -2 | +0 | `[MALLEABLE]` | — | `[[PHB]]` | 11 | 5 sp / lb | Soft metal; high conductivity. |
| **Silver** | `[MAT: SILVER]` | `[FREQ: UNCOMMON]` | x1.0 | +0 | +0 | +0 | `[SILVERED]` | — | `[[PHB]]` | 11 | 5 gp / lb | Bypasses specific damage resistances. |
| **Gold** | `[MAT: GOLD]` | `[FREQ: RARE]` | x1.0 | -1 | -3 | -2 | `[HEAVY]`, `[CEREMONIAL]` | `[CEREMONIAL]` | `[[PHB]]` | 10 | 50 gp / lb | Very soft; often [QUAL: POOR]. |
| **Platinum** | `[MAT: PLATINUM]` | `[FREQ: VERY_RARE]` | x1.0 | -2 | -3 | -2 | `[HEAVY]`, `[CEREMONIAL]` | `[CEREMONIAL]` | `[[PHB]]` | 11 | 500 gp / lb | Highest currency; magic-tier gear. |
| **Mithral** | `[MAT: MITHRAL]` | `[FREQ: VERY_RARE]` | x1.0 | +0 | +0 | +0 | `[MITHRAL]` | `[MITHRAL]` | `[[W:DotMM]]` | 18 | 50 gp / lb | Light silvery metal (Inlay only). |
| **Adamantine** | `[MAT: ADAMANTINE]` | `[FREQ: VERY_RARE]` | x1.0 | +0 | +0 | +0 | `[ADAMANTINE]` | `[ADAMANTINE]` | `[[ToA]]` | 20 | 10 gp / lb | Hardest substance (Inlay only). |
| **Cold-Formed** | `[MAT: COLD_FORMED_STEEL]` | `[FREQ: VERY_RARE]` | x1.0 | +0 | +0 | +0 | `[SIEGE]`, `[ESSEN]` | `[STABLE]` | `[[HOMEBREW]]` | N/A | 75 gp / lb | High-pressure steel processing. |
| **Deep-Iron** | `[MAT: DEEP_IRON]` | `[FREQ: RARE]` | x1.0 | +0 | -1 | +0 | `[NON_MAGNETIC]` | — | `[[HOMEBREW]]` | 18 | 10 gp / lb | Dense formations; Tier 3 gate. |
| **High-Carbon** | `[MAT: HI_CARBON_STEEL]` | `[FREQ: UNCOMMON]` | x1.0 | +0 | +0 | +0 | `[FINE]` | — | `[[HOMEBREW]]` | 15 | 5 gp / lb | Masterwork cutting tools. |
| **Old Cut Iron** | `[MAT: OLD_CUT_IRON]` | `[FREQ: RARE]` | x1.0 | +0 | -1 | +0 | `[BREAK_RES]`, `[KINETIC]` | — | `[[HOMEBREW]]` | 16 | 8 gp / lb | Absorbs vibration; tool durability. |
| **Bronze** | `[MAT: BRONZE]` | `[FREQ: UNCOMMON]` | x1.0 | -1 | +0 | +0 | `[BRITTLE]` | — | `[[PHB]]` | 12 | 2 gp / lb | Durable alloy; corrosion resistant. |
| **Brass** | `[MAT: BRASS]` | `[FREQ: UNCOMMON]` | x1.0 | +0 | -2 | +0 | `[CEREMONIAL]` | `[CEREMONIAL]` | `[[PHB]]` | 11 | 1.5 gp / lb | Copper/Zinc alloy; precision tools. |
| **Tin** | `[MAT: TIN]` | `[FREQ: UNCOMMON]` | x1.0 | -1 | -3 | -2 | `[FAIL: 1-2]` | — | `[[PHB]]` | 8 | 3 sp / lb | Soft alloying agent for Bronze. |
| **Zinc** | `[MAT: ZINC]` | `[FREQ: UNCOMMON]` | x1.0 | -1 | -3 | -2 | `[SHATTER: 1]` | — | `[[PHB]]` | 9 | 4 sp / lb | Bluish-white metal used for Brass. |
| **Lead** | `[MAT: LEAD]` | `[FREQ: COMMON]` | x1.0 | -1 | -3 | -1 | `[HEAVY]`, `[ANTI_DET]` | `[ANTI_DET]` | `[[PHB]]` | 9 | 1 sp / lb | Barrier against magic/detection. |
| **Mercury** | `[MAT: MERCURY]` | `[FREQ: RARE]` | x1.0 | +0 | +0 | +0 | — | — | `[[XGTE]]` | N/A | 10 gp / lb | Alchemical catalyst. |

---

*\*Modifiers MUST be <= 0. Use [[engine/rules/house_rules.md]] for property definitions.*

---

## Detailed Mechanics

### Mithral `[MAT: MITHRAL]` & Adamantine `[MAT: ADAMANTINE]`
*   **The 10% Inlay Rule:** These materials are too rare to be forged into pure solid objects. They are instead applied as **Inlays, Core-Weaves, or Platings** on top of a Base Metal (usually Steel).
*   **Separation:** Due to high melting points, they can be extracted at 100% efficiency via smelting.

### Deep-Iron `[MAT: DEEP_IRON]`
*   **Mechanical Utility:** Required for Tier 3 tools and high-pressure structural frames.
*   **Refining Requirements:** Must be cold-formed. Exposure to heat destroys its stability.

### Cold-Formed Steel `[MAT: COLD_FORMED_STEEL]`
*   **Weapon Utility:** Bypasses non-magical B/P/S resistance for Fey and Fiends. Grants **Siege**.
*   **Armor Utility:** Grant the wearer **Advantage** on Strength saving throws against being moved or knocked prone (`[STABLE]`).

### Old Cut Iron `[MAT: OLD_CUT_IRON]`
*   **Mechanical Effects:** Absorbs kinetic energy. Grant **Advantage** on checks to avoid tool breakage (`[BREAK_RES]`).

---

*\*Calculated via [[engine/rules/economy.md]]*
