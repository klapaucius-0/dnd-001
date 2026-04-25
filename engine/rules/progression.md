# Campaign Progression & XP

## 1. The Philosophy of Growth
In "The Sorrow," power is a heavy and hard-won resource. Adhering to the **Philosophy of Power (Protagonist)** found in `rules/house_rules.md`, the player character’s advancement is measured by his survival, his discoveries, and his social impact.

## 2. Experience Point (XP) Awards
Experience is awarded at the end of each session based strictly on the **Three Pillars of Adventuring** (Combat, Exploration, Social Interaction). Character progression reflects overcoming lethal risk and narrative obstacles, not time spent in safety.

### Pillar 1: Combat & Survival (Risk of Death)
*   **Combat Victory:** Standard 5e XP based on the creature's Challenge Rating (CR).
*   **XP Distribution (DMG p. 92):** The total XP from an encounter is divided equally among all active combatants who participated in the victory.
    *   *Sidekicks:* Count as full characters for the purpose of the XP split (*TCoE* p. 142).
    *   *Hirelings:* Do NOT receive XP, but their presence still counts toward the division if they participated in combat.
*   **Tactical Survival:** If the player character survives a lethal encounter through retreat, cleverness, or stabilization, he earns **50% of the Combat XP**.

### Pillar 2: Exploration & Discovery (Risk of Depletion)
*   **Environmental Obstacles:** Overcoming hazards that carry a meaningful risk of injury, resource drain, or severe narrative consequences (DC 15+).
    *   *Minor Obstacle:* 25-50 XP.
    *   *Major Obstacle:* 50-100 XP.
*   **Legendary Discovery:** Discovering a legendary location or uncovering a "Mystery/Secret" that fundamentally changes the narrative landscape.
    *   *Reward:* 50-100 XP.

### Pillar 3: Social Interaction (Risk of Reputation)
*   **High-Stakes Negotiation:** Resolving a social conflict where failure would result in immediate hostility, loss of sanctuary, or a major faction setback.
    *   *Reward:* 50-100 XP.

### The "No Downtime XP" Mandate
To ensure character levels are earned through struggle, the following activities yield **0 XP**:
*   **Artisan Labor:** Crafting, repairing, or designing items/blueprints.
*   **Research:** Reading lore or studying materials in a safe location.
*   **Safe-Haven Tasks:** Any activity performed within the relative safety of a settlement where failure carries no immediate physical or resource risk.
*   **Reward:** These activities are rewarded with the resulting item, monetary profit, or Social Points (`SP`).

## 3. Leveling Up (5e 2014 Table)
the player character follows the standard 5e (2014) experience table.

| Level | XP Required | Proficiency Bonus |
| :--- | :--- | :--- |
| 1 | 0 | +2 |
| 2 | 300 | +2 |
| 3 | 900 | +2 |
| 4 | 2,700 | +2 |
| 5 | 6,500 | +3 |

### The Leveling Protocol
1.  **Sidekick Alignment (*TCoE* p. 142):** Sidekicks level up simultaneously with the protagonist. Whenever the player character reaches a new level, all active Sidekicks in the party also gain one level in their respective Sidekick class.
2.  **Requirement:** Leveling up can only occur during a **Long Rest**.
3.  **HP Calculation:** the player character gains the **Average** (5 for 1d8) + Constitution Modifier.
4.  **Updates:** The DM must update `state/character_state.md` and log the level increase in `logs/experience_log.md`.

## 4. Mandatory Level-Up Audit
To ensure mechanical integrity, the following protocol is mandatory:
1.  **Trigger:** At the conclusion of every **Long Rest**, the DM MUST perform a check of the player character's current XP against the advancement table.
2.  **Notification:** If the threshold for a new level has been met, the DM must pause the narrative and guide the player through the level-up process (HP roll/average, spell choices, and feature unmasking) before continuing the day.
3.  **Synchronization:** All new features must be added to `state/character_state.md` and any relevant roll modifiers must be updated in the `Active Modifier Registry (HUD)`.
