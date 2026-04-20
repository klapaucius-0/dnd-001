# Artisan Blueprints Encyclopedia
<!-- SOURCE: atlas/crafting/blueprints.md -->

---

# The Iron-Nail Sleeve [BLUEPRINT] [TYPE: PROSTHETIC] [SCALE: MINOR] [MOD: +0] [HOMEBREW]
A heavy, industrial sleeve constructed from cold-hammered iron nails and steel hardware. It is a "trash" variant designed for raw utility at the cost of mobility and stealth.

## Technical Requirements
*   **Tool Tier Required:** Tier 2 (Vice-Clamp).
*   **Total Blocks:** 4 Blocks (16 LH).
*   **Base DC Calculation:** `node engine/scripts/crafting_dc_calc.js <Material_WR> 0 [Quality]`
*   **Required Workshop:** Stable Anvil or Stone Table; Vice-Clamp secured.

## Component List
*   **Structural Mesh:** 1x Crate of Iron Nails (`[MAT: IRON]`).
*   **Mounting Hardware:** 1x Pouch Steel Hardware (`[MAT: STEEL]`).
*   **Rigid Harness:** 1x Bundle Daleland Ox-Hide (`[MAT: DALELAND_HIDE]`).
*   **Internal Padding:** 1x Bolt Industrial Felt (`[MAT: FELT]`).
*   **Refinement:** Neatsfoot Oil, Waxed Thread.

## Final Item Result
*   **Name:** The Iron-Nail Sleeve ([HOMEBREW])
*   **Resulting Tags:** `[MAT: STEEL] [QUAL: STANDARD]`
*   **Mechanical:**
    *   **Rigid Anchor:** Can strap a shield to the sleeve for full AC bonus. Cannot perform shield bashes.
    *   **Tool Socket:** One artisan tool can be bolted into the sleeve (1 minute to swap).
    *   **Brute Leverage:** Negates Disadvantage on Strength-based tool checks (Smithing, Masonry).
    *   **Weight:** 12.0 lbs.
    *   **Noise (Drawback):** Gives **Disadvantage on Stealth** checks due to clanking and creaking.
    *   **Limitation:** No fine motor tasks; cannot use two-handed weapons.
*   **Sensory:** Uncomfortably heavy and loud; smells of industrial oil and old, wet leather.

## Crafting Process (4 Blocks)
*   **Block 1 (Smith's Tools vs Base DC):** Hammering iron nails into interlocking flat slats and cold-welding them into a cylindrical form using the Vice-Clamp.
*   **Block 2 (Smith's Tools vs Base DC):** Integrating the steel hardware into the cylinder to create the modular "Vise-Socket" mounting point.
*   **Block 3 (Leatherworker's Tools vs Base DC):** Rigidizing the Daleland Ox-Hide through boiling and lining the interior with industrial felt for stump protection.
*   **Block 4 (Smith's Tools vs Base DC):** Riveting the iron mesh to the leather harness and applying Neatsfoot Oil for a final, durable finish.

---

# The Crude Brace [BLUEPRINT] [TYPE: PROSTHETIC] [SCALE: MINOR] [MOD: +1] [HOMEBREW]
A static, non-articulated prosthetic frame designed to serve as a heavy anchor. It utilizes a modular "Vise-Socket" to secure equipment directly to the stump.

## Technical Requirements
*   **Tool Tier Required:** Tier 2 (Cold-Forming Implement / Vice-Clamp).
*   **Total Blocks:** 6 Blocks (24 LH).
*   **Base DC Calculation:** `node engine/scripts/crafting_dc_calc.js <Material_WR> 1 [Quality]`
*   **Required Workshop:** Stable Anvil or Stone Table; Vice-Clamp secured.

## Component List
*   **Refined Frame:** 4x Dark Metal Rods (`[CAT: METAL]`).
*   **Heavy Harness:** 1x Bundle Daleland Ox-Hide (`[CAT: LEATHER]`).
*   **Padding:** 1x Bolt Industrial Felt (`[CAT: TEXTILE]`).
*   **Vise-Socket:** 1x Pouch Steel Hardware (`[MAT: STEEL]`) & 1x Crate of Iron Nails.
*   **Refinement:** Neatsfoot Oil, Tallow/Wax, Waxed Thread.

## Final Item Result
*   **Name:** The Crude Brace ([HOMEBREW])
*   **Resulting Tags:** `[MAT: DEEP_IRON] [QUAL: STANDARD]`
*   **Mechanical:**
    *   **Shield Anchor:** Negates the combat penalty for a missing left arm when using a shield (provides full AC).
    *   **Tool Socket:** One artisan tool can be clamped into the brace (1 minute to swap).
    *   **Brute Leverage:** Negates Disadvantage on Strength-based tool checks (Smithing, Masonry).
    *   **Limitation:** Cannot perform fine motor tasks (Medicine, Sleight of Hand, Thieves' Tools) or use two-handed weapons.
*   **Sensory:** Heavy, rigid, and vibrates when struck; smells of neatsfoot oil and old iron.

## Crafting Process (6 Blocks)
*   **Blocks 1-2 (Smith's Tools vs Base DC):** Cold-hammering the metal rods into a rigid support lattice.
*   **Block 3 (Smith's Tools vs Base DC):** Fabricating the Vise-Socket from hardware and iron nails.
*   **Block 4 (Leatherworker's Tools vs Base DC):** Cutting and rigidizing the leather for the shoulder anchor.
*   **Block 5 (Smith's Tools vs Base DC):** Lining the harness with felt and riveting the frame to the leather.
*   **Block 6 (Smith's Tools vs Base DC):** Adjusting the straps and oiling the assembly for rust prevention.

---

# The Deep-Forged Anatomy [BLUEPRINT] [TYPE: PROSTHETIC] [SCALE: MODERATE] [MOD: +4] [HOMEBREW]
An articulated, multi-segmented limb mimicking the reach and pivot of a natural arm. It uses internal tension cables and interlocking plates for fluid movement.

## Technical Requirements
*   **Tool Tier Required:** Tier 2 (Precision Cold-Work).
*   **Total Blocks:** 12 Blocks (48 LH).
*   **Base DC Calculation:** `node engine/scripts/crafting_dc_calc.js <Material_WR> 4 [Quality]`
*   **Required Workshop:** High-Pressure Setup (Vice-Clamp + Tier 2 Tools); Cold-Annealing environment.

## Component List
*   **Articulated Segments:** 6x Dark Metal Rods (`[CAT: METAL]`).
*   **Core Resonance:** 1x Deep-Frost Crystal (`[CAT: MINERAL]`) - Used as a thermal-stable pivot.
*   **Tension Cables:** 2x Spools Waxed Linen Thread & Braided Leather strips.
*   **Precision Joints:** 1x Professional Leatherworker's Kit (Salvaged Steel for hinges) & Steel Hardware.
*   **Refinement:** Abrasive Sand (for polishing), Tallow, Neatsfoot Oil.

## Final Item Result
*   **Name:** The Deep-Forged Anatomy ([HOMEBREW])
*   **Resulting Tags:** `[MAT: DEEP_IRON] [QUAL: FINE]`
*   **Mechanical:**
    *   **Fluid Motion:** Full shield use and tool use without Disadvantage.
    *   **Artisan's Grip:** Can use any tool, including those requiring fine motor skills (Thieves' Tools, Medicine).
    *   **Versatile Grip:** Can use Versatile weapons (e.g., Warhammer) with two hands for 1d10 damage.
    *   **Limitation:** Cannot use true Heavy Two-Handed weapons (Mauls, Greatswords) due to lack of wrist torque.
*   **Sensory:** Emits a low, crystalline hum when moving; feels strangely light and cold to the touch.

## Crafting Process (12 Blocks)
*   **Blocks 1-2 (Smith's Tools vs Base DC):** Shaping the interlocking Deep Iron plates to mimic anatomical reach.
*   **Block 3 (Mason's Tools vs Base DC):** Precision carving of the Deep Iron to house the crystal pivot.
*   **Block 4 (Arcana or Religion vs Base DC):** Harmonizing the Deep-Frost Crystal to act as a friction-less joint.
*   **Block 5 (Smith's Tools vs Base DC):** Fabricating micro-hinges from salvaged high-carbon steel.
*   **Blocks 6-7 (Smith's Tools vs Base DC):** Assembling the segments and hinges into a functional limb.
*   **Block 8 (Leatherworker's Tools vs Base DC):** Braiding linen and leather into high-tensile "tendons."
*   **Block 9 (Medicine or Smith's Tools vs Base DC):** Mapping the internal cables to mirror dwarf musculature.
*   **Block 10 (Leatherworker's Tools vs Base DC):** Fitting the professional harness and felt padding for a seamless interface.
*   **Block 11 (Dexterity Check vs Base DC):** Tuning the tension for fluid, non-disadvantage movement.
*   **Block 12 (Artisan Check vs Base DC):** Polishing with abrasive sand and treating with neatsfoot oil.

---

# The Mason's Blinder [BLUEPRINT] [TYPE: GEAR] [SCALE: TRIVIAL] [MOD: +0] [HOMEBREW]
A rigid, anatomical eyepatch designed to protect a ruined socket while maintaining the wearer's remaining peripheral focus. It is sculpted from hardened leather and lined with soft felt to provide a seamless, low-profile concealment.

## Technical Requirements
*   **Tool Tier Required:** Tier 1 (Leatherworker's Tools).
*   **Total Blocks:** 2 Blocks (8 LH).
*   **Base DC Calculation:** `node engine/scripts/crafting_dc_calc.js <Material_WR> 0 [Quality]`
*   **Required Workshop:** Any stable surface.

## Component List
*   **Outer Shell:** 0.25x Unit of Leather (`[CAT: LEATHER]`).
*   **Internal Lining:** 0.25x Unit of Felt (`[CAT: TEXTILE]`).
*   **Binding:** 1x Use of Waxed Linen Thread.
*   **Refinement:** Tallow & Beeswax.

## Final Item Result
*   **Name:** The Mason's Blinder ([HOMEBREW])
*   **Resulting Tags:** `[MAT: (Inherited)] [QUAL: STANDARD]`
*   **Mechanical:**
    *   **Anatomical Guard:** Seals the eye socket, negating risks of infection or further trauma from environmental debris.
    *   **The Shadowed Brow:** Fully conceals the "Maimed" injury, nullifying the social Disadvantage on Persuasion checks caused by the injury's appearance.
    *   **Artisan's Focus:** Provides a **+1 bonus** to saving throws against being blinded by non-magical environmental effects (dust, smoke, sparks).
*   **Sensory:** Rigid and scentless once cured; sits flush against the skin and feels like a natural extension of the brow.

## Crafting Process (2 Blocks)
*   **Block 1 (Leatherworker's Tools vs Base DC):** Cutting the leather to match the anatomical sketch and boiling it to achieve a rigid, protective shape.
*   **Block 2 (Leatherworker's Tools vs Base DC):** Lining the interior with felt and stitching the adjustable head-straps using waxed thread.

---

# The Scavenger's Anchor [BLUEPRINT] [TYPE: PROSTHETIC] [SCALE: MINOR] [MOD: -2] [HOMEBREW]
The absolute minimum requirement for a functional prosthetic. A heavy, rigid harness of ox-hide and iron nails that provides a static loop for gear. It makes no attempt at comfort or aesthetics.

## Technical Requirements
*   **Tool Tier Required:** Tier 1 (Smith's Tools).
*   **Total Blocks:** 3 Blocks (3 LH).
*   **Base DC Calculation:** `node engine/scripts/crafting_dc_calc.js <Material_WR> -2 [Quality]`
*   **Required Workshop:** Any stable surface.

## Component List
*   **Rigid Harness:** 1x Bundle Weathered Ox-Hide (`[MAT: DALELAND_HIDE]`).
*   **Mounting Loop:** 1x Crate of Iron Nails (`[MAT: IRON]`).
*   **Support Padding:** 1x Bolt Industrial Felt (`[MAT: FELT]`).
*   **Refinement:** Tallow & Beeswax.

## Final Item Result
*   **Name:** The Scavenger's Anchor ([HOMEBREW])
*   **Resulting Tags:** `[MAT: IRON] [QUAL: POOR]`
*   **Mechanical:**
    *   **Static Loop:** Can secure a shield or tool grip into the loop. Provides full AC for shields and negates tool Disadvantage.
    *   **Restrictive (Drawback):** Reduces Speed by 5ft and gives **Disadvantage** on all Dexterity-based checks while equipped.
    *   **Ugly:** Provides **Disadvantage** on Charisma (Persuasion) checks against non-artisans due to its grotesque appearance.
*   **Sensory:** Smells strongly of wet hide and tallow; bites into the shoulder with every movement.

## Crafting Process (3 Blocks)
*   **Block 1 (Dexterity vs DC 10):** Cutting the hide into a crude shoulder wrap and chest strap. (Ref: WR 12 - 2).
*   **Block 2 (Smith's Tools vs DC 10):** Hammering iron nails into a heavy, static "C-loop" to hold equipment. (Ref: WR 12 - 2).
*   **Block 3 (Strength vs DC 10):** Riveting the loop to the leather and stuffing the felt underneath for minimum padding. (Ref: WR 12 - 2).