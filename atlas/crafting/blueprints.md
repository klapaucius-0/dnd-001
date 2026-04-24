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

---

## Anti-Frost Wash [BLUEPRINT] [TYPE: CONSUMABLE] [SCALE: TRIVIAL] [MOD: +0] [STANDARD]
<!-- SOURCE: atlas/crafting/blueprints.md -->

A viscous, resin-based liquid designed to be applied to metal equipment. It creates a protective layer that resists the crystalline structures of supernatural cold.

### Technical Requirements
*   **Tool Tier Required:** Tier 1 (Herbalism Kit)
*   **Total Blocks:** 1 (4 Labor Hours)
*   **Target DC:** 12
*   **Required Workshop:** Flat surface and heat source.

### Component List
*   **Iron-Needle Resin:** 0.1 lb (Properties: `[MAT: IRON_NEEDLE_RESIN]`)
*   **Vinegar:** 1 dose (Properties: `[MAT: VINEGAR]`)

### Final Item Result
*   **Name:** Anti-Frost Wash
*   **Resulting Tags:** `[MAT: ALCHEMICAL] [QUAL: STANDARD]`
*   **Mechanical:** Grant immunity to "Iron-Lock" and "White-Frost" conditions for 24 hours when applied to metal armor or a weapon.
*   **Sensory:** Thick, amber-black liquid; smells sharply of resin and acid.

---

## Ghost-Root Tea [BLUEPRINT] [TYPE: CONSUMABLE] [SCALE: TRIVIAL] [MOD: +0] [STANDARD]
<!-- SOURCE: atlas/crafting/blueprints.md -->

A potent, earthy brew made from the resinous tubers of the mountain's deeper fissures. It provides a surge of unnatural energy but takes a heavy toll on the body once the effects fade.

### Technical Requirements
*   **Tool Tier Required:** Tier 1 (Herbalism Kit)
*   **Total Blocks:** 1 (1 Labor Hour)
*   **Target DC:** 10
*   **Required Workshop:** Heat source and clean water.

### Component List
*   **Ghost-Root:** 0.1 lb (Properties: `[MAT: HERB]`)

### Final Item Result
*   **Name:** Ghost-Root Tea
*   **Resulting Tags:** `[MAT: HERB] [QUAL: STANDARD]`
*   **Mechanical:** Reduces Exhaustion level by 1 for 4 hours. After 4 hours, must succeed on a DC 12 Constitution Save or regain the level plus an additional level (Crash).
*   **Sensory:** Dark, bitter liquid; metallic aftertaste.

---

## Heart-Bloom Tea [BLUEPRINT] [TYPE: CONSUMABLE] [SCALE: MINOR] [MOD: +0] [STANDARD]
<!-- SOURCE: atlas/crafting/blueprints.md -->

A rare and delicate restorative brewed from the petals of the Frozen Heart-Bloom. It anchors the soul and sharpens the mind against the mountain's silence.

### Technical Requirements
*   **Tool Tier Required:** Tier 1 (Herbalism Kit)
*   **Total Blocks:** 5 (20 Labor Hours)
*   **Target DC:** 14
*   **Required Workshop:** Controlled heat source and clean water.

### Component List
*   **Frozen Heart-Bloom:** 1 unit (Properties: `[MAT: FROZEN_HEART_BLOOM]`)
*   **Ghost-Root:** 0.1 lb (Properties: `[MAT: HERB]`)

### Final Item Result
*   **Name:** Heart-Bloom Tea
*   **Resulting Tags:** `[MAT: HERB] [QUAL: FINE]`
*   **Mechanical:** Grants Advantage on all Intelligence, Wisdom, and Charisma saving throws for 1 hour.
*   **Sensory:** Crystalline blue liquid; smells of fresh snow and ancient stone.

---

## Herbal Poultice [BLUEPRINT] [TYPE: CONSUMABLE] [SCALE: TRIVIAL] [MOD: +0] [STANDARD]
<!-- SOURCE: atlas/crafting/blueprints.md -->

A thick, cooling paste made from hemostatic mosses. It stabilizes wounds and accelerates the body's natural recovery.

### Technical Requirements
*   **Tool Tier Required:** Tier 1 (Herbalism Kit)
*   **Total Blocks:** 1 (1 Labor Hour)
*   **Target DC:** 10
*   **Required Workshop:** Flat surface for grinding.

### Component List
*   **Weaver's Moss:** 0.1 lb (Properties: `[MAT: WEAVER_MOSS]`)
*   **Mountain Moss:** 0.1 lb (Properties: `[MAT: ORGANIC]`)

### Final Item Result
*   **Name:** Herbal Poultice
*   **Resulting Tags:** `[MAT: HERB] [QUAL: STANDARD]`
*   **Mechanical:** Regain an additional 1d4 HP for every Hit Die spent during a Short Rest. Grants Advantage on Medicine checks to stabilize a dying creature.
*   **Sensory:** Grey-green paste; smells damp and earthy.
