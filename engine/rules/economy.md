# Campaign Economy & Valuation System
<!-- SOURCE: engine/rules/economy.md -->

This document serves as the Single Source of Truth (SSOT) for all economic transactions, material valuations, and crafting costs. It is optimized for AI algorithmic parsing and strictly adheres to official D&D 5e (2014) benchmarks.

## 1. The Core Valuation Algorithm (Utility-Based)
All items and raw materials derive their base value from their mechanical PHB equivalent.

### A. Pricing a Newly Discovered Material
1.  **Identify PHB Baseline:** Determine what standard PHB material it most closely replaces (e.g., Void-Vine = Hemp/Rope; Star-Metal = Steel).
2.  **Assign Base Price:** Use the PHB price (Hemp: 1 sp/lb; Steel: 1 gp/lb).
3.  **Apply Superiority Multiplier:**
    *   **Mundane/Lore Flavor:** x1 multiplier.
    *   **Minor Utility Buff:** x2 to x5 multiplier.
    *   **Major/Magical Buff:** Defined by the "Price-Per-Pound" system in `atlas/crafting/materials/metals.md`.

### B. Pricing a Newly Discovered/Crafted Item
1.  **Identify PHB Baseline:** Compare damage, AC, or utility. (e.g., 1d8 homebrew weapon = 15 gp Longsword).
2.  **Evaluate Superiority:** 
    *   **Standard PHB Function:** Locked to PHB price (15 gp).
    *   **Inherent Buffs:** Bumped to [DMG Magic Item Tiers] (Common: 50-100gp; Uncommon: 101-500gp; Rare: 501-5000gp).
3.  **Dynamic Formulas:** Use the algebraic rules in [[engine/rules/crafting.md]] to determine final labor and material requirements.

---

## 2. The Trading & Salvage Economy Protocol
This protocol defines the strict rules for buying and selling gear, ensuring the survival economy remains desperate and balanced. (Source: [[PHB p. 144]])

### A. Official 5e Trading Rules
1.  **Buying Standard Gear:** Costs **100%** Market Value.
2.  **Selling Undamaged Gear:** Fetches **50%** Market Value (Arms, armor, and equipment).
3.  **Selling Trade Goods:** Fetches **100%** Market Value (Raw metals, ingots, gems, wheat, livestock).
4.  **Selling Monster/Damaged Gear:** Fetches **0 gp** (Vendors refuse items in poor condition).

### B. The Auxiliary Consumption Principle (Reconciling the 50% Rule)
The official rule states crafting requires materials equal to 50% of the item's value. In "The Sorrow," this 50% cost is split into two physical pools:
*   **The Core Component:** Raw metal equal to the item's final weight (e.g., 65 lbs of steel for Plate).
*   **The Auxiliary Discrepancy:** The remaining gp cost (up to the 50% threshold) represents consumed forge fuel, flux, leather strapping, and tool wear. **This mass is permanently lost to the process and cannot be recovered via smelting.**

### C. The "Mending" Profit Loop
If Wael finds damaged gear (Value: 0 gp), he can use the *Mending* cantrip or Smith's Tools + 1 Labor Hour (DC 15) to restore it to "Undamaged." He can then sell it for the standard 50% Market Value. This rewards artisan skills without breaking the economy.

---

## 3. Market Fluctuations & Scarcity
Local conditions and relationships alter the base PHB prices.

### A. Social Disposition (Relationship Modifiers)
As defined in [[engine/rules/social.md]], a merchant's standing with Wael shifts prices:
*   **Hostile/Stranger:** +25% markup on purchases / -25% penalty on sales.
*   **Indifferent/Acquaintance:** Standard PHB pricing.
*   **Friendly/Trusted Ally:** -25% discount on purchases / +25% bonus on sales.

### B. Stratum Desperation Modifiers (Local Scarcity)
Local environmental pressures dictate desperate needs (Source: [[DMG p. 19]]):
*   **[STRATUM: 1_FRAGILE_SURFACE]**: Desperation Goods = **Weapons & Ammunition** (+50% Price).
*   **[STRATUM: 3_FROZEN_EXPANSE]**: Desperation Goods = **Fuel & Heat** (+50% Price).

---

## 4. Item Registry Protocol
*   **Artifacts:** [[atlas/artifacts.md]] is reserved for unique, named plot items.
*   **Standard Items:** Must be logged in `atlas/items/` using the explicit-column templates.
*   **Linking:** All inventory logs MUST link to the item's entry in the registry to verify value and rarity.
