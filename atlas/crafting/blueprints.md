# Crafting Blueprints
<!-- SOURCE: crafting -->

This file contains the schematics and recipes discovered during the campaign.

---

## Fine Steel Warhammer [BLUEPRINT] [TYPE: WEAPON] [SCALE: MODERATE] [MOD: +0] [STANDARD]
<!-- SOURCE: atlas/crafting/blueprints.md -->

A masterfully drafted schematic for a warhammer balanced for superior impact and grip retention. The design emphasizes a reinforced tang and a weight-calibrated head, ensuring the weapon remains an extension of the wielder's arm even under the most jarring strikes.

### Technical Requirements
*   **Tool Tier Required:** Tier 1 (Smith's Tools)
*   **Total Blocks:** 15 (60 Labor Hours)
*   **Base DC Calculation:** `node engine/scripts/crafting_dc_calc.js 14 0 [FINE]`
*   **Target DC:** 20 (Quality: FINE)
*   **Required Workshop:** Stable Anvil

### Component List
*   **Steel:** 2.0 lbs (Properties: `[MAT: STEEL]`)
*   **Auxiliary Materials:** 13 gp value (Fuel, flux, leather, and hardwood).

### Final Item Result
*   **Name:** Fine Steel Warhammer
*   **Resulting Tags:** `[MAT: STEEL] [QUAL: FINE]`
*   **Mechanical:** 1d8 [1d10] Bludgeoning. The wielder has **Advantage** on Strength (Athletics) checks and Strength saving throws made to avoid being disarmed.
*   **Sensory:** Weight: 2.0 lbs. Perfectly balanced; the grip is bound in cross-stitched leather.

### Crafting Process (15 Blocks)
*   **Blocks 1-4 (Smith's Tools vs DC 20):** Forging the core head geometry and the reinforced eye.
*   **Blocks 5-8 (Smith's Tools vs DC 20):** Tempering the striking faces and refining the balance.
*   **Blocks 9-12 (Smith's Tools vs DC 20):** Shaping the hardwood haft and fitting the steel head.
*   **Blocks 13-15 (Smith's Tools vs DC 20):** Final leather binding, cross-stitching, and weight calibration.
