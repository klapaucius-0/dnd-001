# Campaign Economy & Valuation System
<!-- SOURCE: engine/rules/economy.md -->

This document serves as the Single Source of Truth (SSOT) for all economic transactions, material valuations, and crafting costs. It strictly adheres to official D&D 5e (2014) benchmarks.

## 1. Valuation & Pricing
All items and materials derive their base value from official sourcebooks.

### A. Mundane Items & Trade Goods
All standard equipment, weapons, armor, and trade goods (metals, livestock, etc.) use the exact prices listed in the **Player's Handbook (PHB) p. 145-157**.

### B. Magic Items
Magic items do not have fixed gold piece values in the PHB. When determined, their value is based on the rarity tables found in the **Dungeon Master's Guide (DMG) p. 135** and **Xanathar's Guide to Everything (XGtE) p. 129**.

| Rarity | Value Range (gp) |
| :--- | :--- |
| Common | 50 - 100 gp |
| Uncommon | 101 - 500 gp |
| Rare | 501 - 5,000 gp |
| Very Rare | 5,001 - 50,000 gp |
| Legendary | 50,001+ gp |

---

## 2. The Trading & Salvage Protocol
This protocol defines the strict rules for buying and selling gear. (Source: **PHB p. 144**)

### A. Official 5e Trading Rules
1.  **Buying Standard Gear:** Costs **100%** Market Value.
2.  **Selling Undamaged Gear:** Fetches **50%** Market Value (Arms, armor, and equipment).
3.  **Selling Trade Goods:** Fetches **100%** Market Value (Raw metals, ingots, gems, wheat, livestock).
4.  **Monster Salvage:** As per PHB p. 144, weapons and armor used by monsters are rarely in good enough condition to sell. Such items typically fetch **0 gp** at vendors.

### B. Crafting & Repairs
1.  **Material Costs:** Crafting an item requires raw materials equal to **50%** of its Market Value. (See `engine/rules/crafting.md` for downtime rules).
2.  **Repairs:** Heavily damaged gear can be repaired using the appropriate artisan's tools. 
    *   **Smith's Tools (XGtE p. 84):** Can restore 10 HP to a metal object per hour of work.
    *   **Selling Repaired Gear:** Once restored to "Undamaged" condition, an item can be sold for the standard 50% Market Value.

---

## 3. Market Fluctuations & Scarcity
Local conditions and relationships alter the base PHB prices. (Source: **DMG p. 19**)

### A. Social Disposition (Relationship Modifiers)
A merchant's standing with the character shifts prices:
*   **Hostile/Stranger:** +25% markup on purchases / -25% penalty on sales.
*   **Indifferent/Acquaintance:** Standard PHB pricing.
*   **Friendly/Trusted Ally:** -25% discount on purchases / +25% bonus on sales.

### B. Stratum Desperation Modifiers (Local Scarcity)
Local environmental pressures dictate desperate needs:
*   **[STRATUM: 1_FRAGILE_SURFACE]**: Desperation Goods = **Weapons & Ammunition** (+50% Price).
*   **[STRATUM: 3_FROZEN_EXPANSE]**: Desperation Goods = **Fuel & Heat** (+50% Price).
*   **[STRATUM: 8_SANGUINE_DEBT]**: Desperation Goods = **Medicine & Restoratives** (+100% Price).

---

## 4. Item Registry Protocol
*   **Artifacts:** `atlas/artifacts.md` is reserved for unique, named plot items.
*   **Standard Items:** Must be logged in `atlas/items/` using the explicit-column templates.
*   **Linking:** All inventory logs MUST link to the item's entry in the registry to verify value and rarity.
