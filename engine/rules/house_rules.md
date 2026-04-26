# House Rules & Variant Mechanics

## Core Rulebook
*   **D&D 5th Edition (2014 Ruleset)**
*   **Sourcebooks:** PHB, DMG, MM, SCAG, XGE, TCOE.

## Campaign Progression
1.  **Standard Magic Item Rarity:** Magic items follow the distribution and rarity guidelines found in the **DMG (p. 135)** and **XGtE (p. 126)**. They are tiered by level (e.g., Levels 1-4 primarily encounter Common and occasionally Uncommon items).
2.  **Strict Source Adherence:** All mechanical effects and progression must follow the official rules (PHB, DMG, MM, SCAG, XGtE, TCoE).

## Tactical Mechanics
1.  **Grid-Lite Combat:** ASCII grids with chess-style coordinates (A-Z, 1-N).
2.  **Combat & Initiative (PHB p. 189):**
    *   **The Check:** Combat begins with a Dexterity (Initiative) check.
    *   **Tie-Breakers:** In the event of a tie, the creature with the higher Dexterity score goes first. If still tied, the DM rolls a d20 to break the tie.
3.  **DC Transparency:** The DM will state the DC or target AC before rolling.
4.  **Advantage & Disadvantage Protocol:** 
    *   **Cancellation:** If a roll is subject to both Advantage and Disadvantage, they cancel each other out and you roll a **straight d20**. This remains true regardless of the number of sources for either (e.g., two sources of Disadvantage and one source of Advantage still result in a straight roll).
    *   **Exhaustion (Level 1):** Grants **Disadvantage on all Ability Checks**. This stacks with other sources of Disadvantage for the purpose of cancellation but does not result in rolling more than two d20s.
5.  **Range & Melee:**
    *   **Close Quarters:** Ranged attacks have **Disadvantage** if an enemy is within 5 feet of the attacker.
    *   **Opportunity Attacks:** Moving out of an enemy's reach (usually 5 feet) triggers an Opportunity Attack unless the Disengage action is used.
    *   **Distance Impact:** Attacks beyond "Normal Range" but within "Long Range" have **Disadvantage**. Attacks beyond "Long Range" automatically fail.
6.  **Skills & Abilities:** Checks should use the most appropriate ability score. Common pairings include:
    *   **Athletics:** Strength (Never Intelligence/Dexterity).
    *   **Acrobatics/Stealth/Sleight of Hand:** Dexterity.
    *   **Investigation:** Intelligence.
    *   **Insight/Perception/Medicine/Survival:** Wisdom.
    *   **Persuasion/Deception/Intimidation:** Charisma.

## Foraging & Resource Acquisition (DMG p. 111)
The following rules strictly govern the recovery of food and water from the environment:
1.  **The Check:** A character can forage while traveling or during a dedicated downtime activity by making a **Wisdom (Survival) check**.
2.  **Difficulty (DC):** The DM determines the DC based on the environment's abundance. 
    *   **Abundant (Forests/Plains):** DC 10.
    *   **Limited (Hills/Swamps):** DC 15.
    *   **Barren (Arctic/Mountains/Desert):** DC 20.
3.  **Yield (Food):** On a success, the character finds food (in pounds) equal to **1d6 + their Wisdom modifier**.
4.  **Yield (Water):** On a success, the character finds water (in gallons) equal to **1d6 + their Wisdom modifier**.
5.  **Strict Source Limitation:** The 2014 sourcebooks do not provide a mechanic for "butchering" specific slain creatures into defined pounds of meat or gold-value trade goods. Food acquisition must be resolved via the Foraging check, using the slain creature only as narrative justification for the attempt.

## Agreed Variant Rules
1.  **Feats:** Allowed.
2.  **Multiclassing:** Allowed.
3.  **Variant Human:** Allowed.
4.  **Ability Scores:** Rolled (4d6 drop lowest). (PHB p. 13).
5.  **Flanking:** Enabled (Advantage for melee attackers on opposite sides).
6.  **Inspiration:** Enabled (Awarded for roleplay).
7.  **Death Saving Throws:** Standard (PHB p. 197). When you start your turn with 0 hit points, you must make a special saving throw, called a death saving throw, to determine whether you creep closer to death or hang onto life.
8.  **Morale (DMG Variant):** Enabled. A creature or group must make a DC 10 Wisdom saving throw or flee (Dash/Disengage) or surrender under the following conditions:
    *   The creature is reduced to half its hit points or fewer for the first time in battle.
    *   The group's leader is reduced to 0 hit points.
    *   The group's size is reduced to half its original number.
9.  **Ability Checks & Saving Throws:** Standard. A 1 or 20 on an ability check or saving throw is **not** an automatic failure or success. (PHB p. 174).
10. **Healer's Kit Dependency:** Disabled (Standard 5e resting/healing rules apply).
11. **Weight & Carrying Capacity (Standard):** **Enabled**. 
    *   **Standard Rule (Binary):** Your carrying capacity is your **Strength score multiplied by 15**. (PHB p. 176).
    *   **Tracking:** Every item must have its weight recorded in `state/character_state.md`.
12. **Natural Healing:** Standard (Full HP and half Hit Dice restored on Long Rest).

## Travel & Logistics (Standard Pace)
1.  **Standard Pace (Roads/Clear Paths):** 3 miles per hour (approx. 24 miles per 8-hour day).
2.  **Rugged Pace (Bypasses/Steep Terrain/Deep Snow):** 1.5 miles per hour (approx. 12 miles per 8-hour day).
3.  **Environmental Friction:** While the strata provide narrative flavor, mechanical speed reduction follows the standard "Difficult Terrain" (1/2 speed) multiplier.
4.  **The 8-Hour Threshold:** Traveling beyond 8 hours a day constitutes a **Forced March**, requiring a DC 10 (+1 per additional hour) Constitution saving throw at the end of each hour. On a failure, a level of Exhaustion is gained.
5.  **Agency Check:** The DM must explicitly state the miles covered and the time elapsed after every travel command, verified against this math.
6.  **Strict Sourcebook Encounter Protocol:**
    *   **Frequency:** The DM checks for an encounter twice per day: once during active travel (or exploration) and once during a Long Rest.
    *   **Safe Havens:** If the party is resting in a secured, civilized location (e.g., a paid inn room, a fortified stronghold), the DM may bypass the Long Rest encounter check entirely at their discretion.
    *   **The Trigger:** Roll a **d20**. An encounter occurs on an **18, 19, or 20** (DMG p. 86).
    *   **The Selection:** If triggered, the DM rolls a **d100** on the appropriate environmental table (e.g., Arctic, Urban, Forest) for the party's current tier (Levels 1-4) in *Xanathar's Guide to Everything* (p. 92).
    *   **The Math (DMG/TCoE):** The DM MUST calculate the adjusted XP difficulty (Easy, Medium, Hard, Deadly) using the DMG multiplier rules for party size (p. 82) and TCoE rules for Sidekicks (p. 142).
        *   *Sidekicks:* Count as full Player Characters of their level.
        *   *Hirelings/NPCs:* Creatures with statblocks (CR 0-1/2) do NOT increase the party's XP threshold budget.
    *   **Lethality & Agency:** The DM must NOT arbitrarily scale down a Deadly+ encounter generated by the XGtE tables. Instead, the DM must present the encounter realistically, often starting at a distance, to give the player agency to hide, flee, or negotiate before combat begins.
    *   **Transparency:** The DM must explicitly state the math using the `encounter_generation_template.md` and perform all rolls using the sacred dice script.

## Provisions & Rest (The Toll of the Road)
1.  **Daily Requirements (Food):** Every character requires **1 lb of food** per day. A standard Ration (2 lbs) provides two days of sustenance. Foraged food is tracked by weight (1 lb = 1 day of food).
    *   *Starvation:* A character can go without food for `3 + Constitution modifier` days (minimum 1). At the end of each day beyond that limit, a character automatically gains 1 level of Exhaustion.
    *   *The Reset:* Consuming a normal day's worth of food (1 lb) resets the count of days without food to zero.
    *   *No Half-Rations (AI Optimization):* To prevent tracking confusion, characters must consume a full 1 lb of food in a 24-hour period to avoid starvation progress. Consuming less than 1 lb counts as a full day without food.
2.  **Daily Requirements (Water):** Every character requires **1 gallon of water** per day (2 gallons in extreme heat).
    *   *Dehydration:* If a character drinks only half the required water, they must succeed on a DC 15 Constitution saving throw or gain 1 level of Exhaustion. If they drink less than half, they automatically gain 1 level of Exhaustion.
3.  **Long Rest (The Hearth):** 
    *   **Duration:** 8 hours. 
    *   **Activity:** At least 6 hours of sleep and no more than 2 hours of light activity (standing watch, reading, or talking). 
    *   **Benefits:** Recover all HP and half maximum Hit Dice (minimum of 1). 
    *   **Frequency:** A character can only benefit from one Long Rest per 24-hour period.
4.  **Short Rest:** 
    *   **Duration:** 1 hour. (PHB p. 186).
    *   **Benefits:** A character can spend one or more Hit Dice to regain hit points.
5.  **Morning Transition:** Breaking camp, donning armor (10 mins for Heavy), and consuming a meal requires **30 minutes** after the conclusion of the Long Rest.


13. **Material Component & Cost Protocol:**
    *   **Accounting:** The DM and Player must strictly account for all material components and gold costs for spellcasting.
    *   **Focus:** A spellcasting focus (like the player character's vial) replaces material components that do not have a specific gold cost.
    *   **Gold Costs:** Components with a specified gold value (e.g., the 25 gp of silver for *Ceremony*) MUST be present in the character's inventory and are consumed if the spell description states so.
    *   **Availability:** High-value components are subject to local market scarcity.


## Visual Aesthetic & Style
1.  **Anti-Steampunk:** There are no gears, steam-powered mechanisms, clocks, or "gadgetry" in this world. 
2.  **Grounded & Heavy:** Crafts and inventions rely on ancient masonry, heavy leather bindings, forged iron, and simple lever/pulley physics. 
3.  **Traditional Design:** Advanced items are anatomical and sculptural, reflecting the player character's dwarf-masonry background. They are heavy, rigid, and made to last centuries, not to be "efficient" or "complex."

## Philosophy of Power (Protagonist)
1.  **Earned, Not Given:** For the player character, significant power (magical, social, or artisan) is the result of immense effort, sacrifice, and long-term commitment.
2.  **Incremental Growth:** Major personal milestones—such as limb restoration or master-crafting—must be reached through multi-stage quests and significant downtime investment. Power for the player character is never obtained fast or easily.

## Narrative Focus & Style
1.  **Strict Source Adherence:** All NEW NPC statistics, items, equipment, spells, and mechanical effects must remain strictly "by the book" (PHB, DMG, MM, SCAG, XGE, TCOE).
2.  **The Law of Nouns (No Reskinning):** You MUST use official names from the sourcebooks for all entities and items. 
    *   **No Ad-hoc Renaming:** Monsters and equipment must be identified by their official nouns. No renaming (e.g., a Dire Wolf is never a "Timber-Stalk"; a Signal Whistle is never a "Bone-Call").
    *   **Vibe via Adjectives:** The narrative "vibe" of the current stratum is expressed strictly through the use of **adjectives, sensory descriptions, and environmental behavior**. You may describe a "pitted, ancient Warhammer," but the noun "Warhammer" is immutable.
    *   **No Thematic Adaptation:** Mechanical descriptions and nomenclature must be used according to their established 2014 statistics and lore. The atmosphere is expressed through the *choice* of official options, not by altering the options themselves.
3.  **Grandfather Clause (Existing Anomalies):** Homebrew monsters or items established prior to Day 30 (e.g., **Resonant Figure**, **Void-Touched Sentinel**, **Ghost-Root**) are considered unique, established anomalies of "The Sorrow" and remain valid. No NEW homebrew elements may be created.
4.  **Materials & Foraging Protocol:**
    *   **Tool Mapping:** Foraged flora and raw ingredients must map directly to standard D&D gear and crafting rules (*XGtE*, p. 128-130).
    *   **Specific Potion Ingredients:** Instead of creating bespoke plants, players can forage for specific component types (e.g., "Herbalism Reagents: Healing Potion"). These components possess a GP value that replaces the gold cost required to brew that specific potion during Downtime Crafting.
5.  **Mechanical Storytelling:** The narrative focus and style for NPCs and the world are established solely through the selection of existing "by the book" options.

## Naming & Identity (The Unique Voice)
1.  **Phonetic Distinction:** The DM must ensure that any new named NPC does not share a similar phonetic structure or spelling with an existing active companion or major story NPC. (e.g., Avoiding "Elora/Elara").
2.  **Trade & Title Anchors:** To ensure clarity, characters should be introduced and referred to by their trade or title alongside their name (e.g., "Sela the Merchant," "Father Vane," "Elora the Weaver").
3.  **Mandatory Naming Audit:** Before introducing a new named NPC, the DM must perform an internal audit of active entities in `state/entities/` to confirm no naming collisions or "close matches" exist.
4.  **Linguistic Origins:** Names should reflect the character's regional or cultural origin to provide narrative contrast between frontier locals (Oakhaven) and high-mountain survivors (Western Cut).

## Tonal Variation Protocol
To ensure the campaign remains immersive and responsive to the current situation, the DM will utilize four distinct tonal modes:
1.  **The Somber Chronicle (Narrative/Exploration):** Melancholic and sensory-rich prose for atmosphere and discovery.
2.  **The Precise Ledger (Technical/Maintenance):** Professional and transparent communication for rules, logs, and technical updates.
3.  **The Tense Pulse (Combat/High-Stakes):** Urgent and visceral descriptions for action and danger.
4.  **The Living Voice (Social):** Character-driven dialogue that reflects the unique personality and outlook of the NPC.

## NPC Personality & Outlook
All named NPCs and unique entities must have a defined **Personality & Outlook** section in their state block. 
*   **Personality:** Their recurring traits, mannerisms, and emotional baseline.
*   **Outlook on Life:** Their fundamental philosophy, fears, and what they believe is necessary for survival in "The Sorrow."
*   **Narrative Impact:** These traits must dictate their dialogue, their willingness to help or hinder the player character, and their reaction to the growing cold.

## Layered Narrative Strata Protocol
To ensure narrative variety and mechanical depth, the campaign uses an AI-parseable "Layered Narrative Strata" system. This system associates different areas, NPCs, and artifacts with distinct thematic pillars. The presence of each stratum is tracked via a frequency tag, which guides the DM on the prevalence of related hazards and sensory descriptions.

### The Seven Strata

*   **[STRATUM: 1_FRAGILE_SURFACE]**
    *   **Frequency:** `[FREQUENCY: HIGH]`
    *   *Theme:* Social friction, scarcity, paranoia, and humanity's desperate clinging to sanity. Hazards are primarily human and social.
    *   **Economic Impact:** Desperation Goods = **Weapons & Ammunition** (+50% Price). See [[engine/rules/economy.md]].
*   **[STRATUM: 2_ERODING_AGE]**
    *   **Frequency:** `[FREQUENCY: HIGH]`
    *   *Theme:* Choking dust, rust, collapsing masonry, and the quiet tragedy of forgotten civilizations. Hazards come from structural failure and ancient traps.
*   **[STRATUM: 3_FROZEN_EXPANSE]**
    *   **Frequency:** `[FREQUENCY: MEDIUM]`
    *   *Theme:* Lethal drops in temperature, blinding snow, and the physical endurance required to survive the frost. 
    *   **Economic Impact:** Desperation Goods = **Fuel & Heat** (+50% Price). See [[engine/rules/economy.md]].

*   **[STRATUM: 4_SUNKEN_STONE]**
    *   **Frequency:** `[FREQUENCY: VERY_LOW]`
    *   *Theme:* The intersection of unyielding primordial rock and the relentless erosion of subterranean tides. Crushing aquatic pressure, flooded caverns, and deep-earth aquifers.
*   **[STRATUM: 5_RESONANT_VOID]**
    *   **Frequency:** `[FREQUENCY: VERY_LOW]`
    *   *Theme:* Gravity, absence, unnatural silence, and reality-warping anomalies.
*   **[STRATUM: 6_DREAMING_MIND]**
    *   **Frequency:** `[FREQUENCY: LOW]`
    *   *Theme:* Illusions, collective madness, memory distortions, and the unraveling of psychological reality. Hazards are mental and hallucinatory.
*   **[STRATUM: 7_KINDLED_HEARTH]**
    *   **Frequency:** `[FREQUENCY: LOW]`
    *   *Theme:* Genuine warmth, true sanctuary, uncorrupted divine grace, and enduring light. A stark contrast to the surrounding decay.
*   **[STRATUM: 8_SANGUINE_DEBT]**
    *   **Frequency:** `[FREQUENCY: VERY_LOW]`
    *   *Theme:* Biological debt, vitality as currency, decadence and the power of blood.
    *   **Economic Impact:** Desperation Goods = **Medicine & Restoratives** (+100% Price). See [[engine/rules/economy.md]].

### Dynamic Interaction
The footprint of each stratum is dynamic. Player actions and environmental changes can cause one stratum to expand, recede, or even emerge for the first time. The DM must dynamically scale encounters and environmental descriptions based on these frequency tags and the current location's assigned stratum.
