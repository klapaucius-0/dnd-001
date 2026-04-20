# Campaign Economy & Valuation System
<!-- SOURCE: engine/rules/economy.md -->

This document serves as the Single Source of Truth (SSOT) for all economic transactions, material valuations, and crafting costs. It is optimized for AI algorithmic parsing.

## 1. The Core Valuation Algorithm (Utility-Based)
All items and raw materials derive their base value from their mechanical PHB equivalent.

### A. Pricing a Newly Discovered Material
1.  **Identify PHB Baseline:** Determine what standard PHB material it most closely replaces (e.g., Void-Vine = Hemp/Rope; Star-Metal = Steel).
2.  **Assign Base Price:** Use the PHB price (Hemp: 1 sp/lb; Steel: 1 gp/lb).
3.  **Apply Superiority Multiplier:**
    *   **Mundane/Lore Flavor:** x1 multiplier.
    *   **Minor Utility Buff:** x2 to x5 multiplier.
    *   **Major/Magical Buff:** Fixed premium (50 gp - 500 gp) based on [DMG Magic Item Pricing].
4.  **Market Knowledge:** If unknown to the public, market value is 0 gp; value is only realized via barter with specialized artisans.

### B. Pricing a Newly Discovered/Crafted Item
1.  **Identify PHB Baseline:** Compare damage, AC, or utility. (e.g., 1d8 homebrew weapon = 15 gp Longsword).
2.  **Evaluate Superiority:** 
    *   **Standard PHB Function:** Locked to PHB price (15 gp).
    *   **Inherent Buffs:** Bumped to [DMG Magic Item Tiers] (Common: 50-100gp; Uncommon: 101-500gp; Rare: 501-5000gp).
3.  **Cross-Reference:** See [[engine/rules/crafting.md]] for how this value determines Labor Hours (LH).

---

## 2. The Crafting Economy (The 50% Rule)
*   **Component Cost:** Crafting an item requires raw materials equal to **50%** of its market value.
*   **Labor Valuation:** The remaining 50% is labor. 
*   **Labor Rate:** 1 Labor Hour (LH) = **0.5 gp** of value progress.
*   **Profit Loop:** 
    *   *Wholesale:* Selling unprompted crafted gear to merchants yields 50% (0 profit if materials were bought).
    *   *Scavenging:* Using found materials results in 100% profit for labor.
    *   *Commissions:* Requested items pay 100% value + social bonuses.

---

## 3. Market Fluctuations & Scarcity
*   **Wholesale Rule:** Arms, armor, and gear sell for **50%** (used/standard).
*   **Trade Goods:** Gems, ingots, and raw materials sell for **100%**.
*   **Social Modifiers:** standing shifts prices by **+/- 10% to 25%**. See [[engine/rules/social.md]].
*   **Stratum Desperation Modifiers:**
    *   **[STRATUM: 1_FRAGILE_SURFACE]**: Desperation Goods = **Weapons & Ammunition** (+50% Price).
    *   **[STRATUM: 3_FROZEN_EXPANSE]**: Desperation Goods = **Fuel & Heat** (+50% Price).
    *   *AI Logic:* If (Current_Stratum == X) AND (Item_Type == Y), apply 1.5x multiplier.

---

## 4. Item Registry Protocol
*   **Artifacts:** [[atlas/artifacts.md]] is reserved for unique, named plot items.
*   **Standard Items:** New homebrew gear, potions, and scrolls MUST be logged in the `atlas/items/` directory using the explicit-column template.
*   **Linking:** All inventory logs MUST link to the item's entry in the registry to verify value and rarity.
