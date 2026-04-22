# Artisan Blueprints Encyclopedia
<!-- SOURCE: atlas/crafting/blueprints.md -->

This encyclopedia defines the technical requirements for constructing specialized gear and prosthetics. All projects follow the **4 Labor Hours (LH) per Block** standard defined in `engine/rules/crafting.md`.

---

# The Iron-Nail Sleeve [BLUEPRINT] [TYPE: PROSTHETIC] [SCALE: MINOR] [MOD: +0] [HOMEBREW]
A heavy, industrial sleeve constructed from cold-hammered iron nails and steel hardware. It is a "trash" variant designed for raw utility at the cost of mobility and stealth.

## Technical Requirements
*   **Tool Tier Required:** Tier 1 (Smith's Tools).
*   **Labor:** 4 Blocks (16 LH).
*   **Base DC (Standard Quality):** 12 (Material: Iron).
*   **Required Workshop:** Stable Anvil or Stone Table.

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
*   **Block 1 (4 LH):** Hammering iron nails into interlocking flat slats and cold-welding them into a cylindrical form.
*   **Block 2 (4 LH):** Integrating the steel hardware into the cylinder to create the modular "Vise-Socket" mounting point.
*   **Block 3 (4 LH):** Rigidizing the Daleland Ox-Hide through boiling and lining the interior with industrial felt.
*   **Block 4 (4 LH):** Riveting the iron mesh to the leather harness and applying Neatsfoot Oil for a final, durable finish.

---

# The Crude Brace [BLUEPRINT] [TYPE: PROSTHETIC] [SCALE: MINOR] [MOD: +1] [HOMEBREW]
A static, non-articulated prosthetic frame designed to serve as a heavy anchor. It utilizes a modular "Vise-Socket" to secure equipment directly to the stump.

## Technical Requirements
*   **Tool Tier Required:** Tier 2 (Cold-Forming Implement / Vice-Clamp).
*   **Labor:** 6 Blocks (24 LH).
*   **Base DC (Standard Quality):** 15 (Material: Deep Iron).
*   **Required Workshop:** Stable Anvil or Stone Table; Vice-Clamp secured.

## Component List
*   **Refined Frame:** 4x Dark Metal Rods (`[MAT: DEEP_IRON]`).
*   **Heavy Harness:** 1x Bundle Daleland Ox-Hide (`[MAT: DALELAND_HIDE]`).
*   **Padding:** 1x Bolt Industrial Felt (`[MAT: FELT]`).
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
*   **Blocks 1-2 (8 LH):** Cold-hammering the metal rods into a rigid support lattice.
*   **Block 3 (4 LH):** Fabricating the Vise-Socket from hardware and iron nails.
*   **Block 4 (4 LH):** Cutting and rigidizing the leather for the shoulder anchor.
*   **Block 5 (4 LH):** Lining the harness with felt and riveting the frame to the leather.
*   **Block 6 (4 LH):** Adjusting the straps and oiling the assembly for rust prevention.

---

# The Deep-Forged Anatomy [BLUEPRINT] [TYPE: PROSTHETIC] [SCALE: MODERATE] [MOD: +4] [HOMEBREW]
An articulated, multi-segmented limb mimicking the reach and pivot of a natural arm. It uses internal tension cables and interlocking plates for fluid movement.

## Technical Requirements
*   **Tool Tier Required:** Tier 2 (Precision Cold-Work).
*   **Labor:** 12 Blocks (48 LH).
*   **Base DC (Standard Quality):** 15 (Material: Deep Iron).
*   **Required Workshop:** High-Pressure Setup (Vice-Clamp + Tier 2 Tools); Cold-Annealing environment.

## Component List
*   **Articulated Segments:** 6x Dark Metal Rods (`[MAT: DEEP_IRON]`).
*   **Core Resonance:** 1x Deep-Frost Crystal (`[MAT: CRYSTAL]`) - Used as a thermal-stable pivot.
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
*   **Blocks 1-2 (8 LH):** Shaping the interlocking Deep Iron plates to mimic anatomical reach.
*   **Block 3 (4 LH):** Precision carving of the Deep Iron to house the crystal pivot.
*   **Block 4 (4 LH):** Harmonizing the Deep-Frost Crystal to act as a friction-less joint.
*   **Block 5 (4 LH):** Fabricating micro-hinges from salvaged high-carbon steel.
*   **Blocks 6-7 (8 LH):** Assembling the segments and hinges into a functional limb.
*   **Block 8 (4 LH):** Braiding linen and leather into high-tensile "tendons."
*   **Block 9 (4 LH):** Mapping the internal cables to mirror dwarf musculature.
*   **Block 10 (4 LH):** Fitting the professional harness and felt padding for a seamless interface.
*   **Block 11 (4 LH):** Tuning the tension for fluid, non-disadvantage movement.
*   **Block 12 (4 LH):** Polishing with abrasive sand and treating with neatsfoot oil.

---

# The Mason's Blinder [BLUEPRINT] [TYPE: GEAR] [SCALE: TRIVIAL] [MOD: +0] [HOMEBREW]
A rigid, anatomical eyepatch designed to protect a ruined socket while maintaining the wearer's remaining peripheral focus.

## Technical Requirements
*   **Tool Tier Required:** Tier 1 (Leatherworker's Tools).
*   **Labor:** 2 Blocks (8 LH).
*   **Base DC (Standard Quality):** 10 (Material: Leather).
*   **Required Workshop:** Any stable surface.

## Component List
*   **Outer Shell:** 0.25x Unit of Leather (`[MAT: LEATHER]`).
*   **Internal Lining:** 0.25x Unit of Felt (`[MAT: FELT]`).
*   **Binding:** 1x Use of Waxed Linen Thread.
*   **Refinement:** Tallow & Beeswax.

## Final Item Result
*   **Name:** The Mason's Blinder ([HOMEBREW])
*   **Resulting Tags:** `[MAT: LEATHER] [QUAL: STANDARD]`
*   **Mechanical:**
    *   **Anatomical Guard:** Seals the eye socket, negating risks of infection or further trauma.
    *   **The Shadowed Brow:** Fully conceals the "Maimed" injury, nullifying the social Disadvantage on Persuasion.
    *   **Artisan's Focus:** Provides a **+1 bonus** to saving throws against being blinded by non-magical environmental effects.
*   **Sensory:** Rigid and scentless; sits flush against the skin.

## Crafting Process (2 Blocks)
*   **Block 1 (4 LH):** Cutting the leather to match the anatomical sketch and boiling it to achieve a rigid shape.
*   **Block 2 (4 LH):** Lining the interior with felt and stitching the adjustable head-straps.

---

# The Scavenger's Anchor [BLUEPRINT] [TYPE: PROSTHETIC] [SCALE: MINOR] [MOD: -2] [HOMEBREW]
A heavy, rigid harness of ox-hide and iron nails that provides a static loop for gear.

## Technical Requirements
*   **Tool Tier Required:** Tier 1 (Smith's Tools).
*   **Labor:** 3 Blocks (12 LH).
*   **Base DC (Poor Quality):** 10 (Material: Iron / Rule: Static DC for Poor).
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
    *   **Static Loop:** Secure a shield or tool grip. Provides full AC and negates tool Disadvantage.
    *   **Restrictive (Drawback):** Reduces Speed by 5ft and gives **Disadvantage** on all Dexterity-based checks.
    *   **Ugly:** Provides **Disadvantage** on Charisma (Persuasion) checks against non-artisans.
*   **Sensory:** Smells strongly of wet hide and tallow; bites into the shoulder.

## Crafting Process (3 Blocks)
*   **Block 1 (4 LH):** Cutting the hide into a crude shoulder wrap and chest strap.
*   **Block 2 (4 LH):** Hammering iron nails into a heavy, static "C-loop" to hold equipment.
*   **Block 3 (4 LH):** Riveting the loop to the leather and stuffing the felt underneath.
