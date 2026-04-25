# Social Progression Rules
<!-- SOURCE: social_rules -->

Social Standing in "The Sorrow" is a slow, earned process. It separates long-term **Standing** (SP/Level) from short-term **Disposition** (Mood).

## 1. Social Points (SP) & Tiers

| Level | Standing Title (+) | Infamy Title (-) | Individual SP | Faction SP |
| :---: | :--- | :--- | :---: | :---: |
| **0** | **Stranger** | **Stranger** | 0 | 0 |
| **1** | **Acquaintance** | **Rival / Nuisance** | +/- 20 | +/- 100 |
| **2** | **Trusted Ally** | **Adversary / Enemy** | +/- 60 | +/- 300 |
| **3** | **Found Family** | **Archnemesis** | +/- 150 | +/- 750 |

### The SP Rubric (Base Awards)
*   **Trivial (+1 / -2):** Basic courtesies, minor repairs (Mending) / Rudeness, minor faux pas.
*   **Minor (+5 / -10):** Small favors, sharing rations / Refusing help, minor property damage.
*   **Moderate (+10 / -30):** Significant labor, social defense / Breaking a promise, petty theft.
*   **Major (+20 / -100):** Saving a life, purging a blight / Betrayal, aiding a nemesis.
*   **Legendary (+150 / -Max):** Saving the town / Total betrayal of the community.

## 2. The Splashing Rule (Gossip Factor)
Individual actions ripple out to the parent Faction at different rates:
*   **Positive Actions:** **10%** Splash (rounded down).
*   **Negative Actions:** **25%** Splash (rounded down).

## 3. Progression Gates (Direct vs. Indirect)
*   **Neutral to Level 1:** Can be achieved through indirect "splashing."
*   **Level 1 to Level 2+:** Requires **Direct Action** for or against the faction (e.g., community quests).

## 4. Bond Types (Narrative Lens)
*   **Kin:** Family/Legacy. High forgiveness, high expectations.
*   **Companion:** Close friend/Ally. Shared danger and tactical trust.
*   **Partner (Romantic):** **GATED.** Requires mandatory "Intimacy Milestones" to level up.
*   **Associate:** Professional/Neutral. Transactional trust.
*   **Rival / Nemesis:** Active friction or enmity.

## 5. Temporal Social Rules
*   **Disposition Reset:** After a Long Rest (or 24h separation), Disposition resets to the Level's Baseline (Stranger: Neutral, Ally: Friendly, Archnemesis: Hostile).
*   **Grudges:** Major Negative SP losses prevent the automatic reset of bad moods until mended.
*   **Social Decay:** Faction Reputation decays by **-1 SP per Campaign Month** of inactivity. Relationships do not decay.

## 6. Entity Separation Protocol
To prevent mechanical bloat and ensure narrative immersion, the Social Points (SP) system is only applied to entities with **Narrative Memory**.

| Entity Classification | File Location | Uses SP? | Role |
| :--- | :--- | :---: | :--- |
| **Bestiary Creatures** | `bestiary.md` | **NO** | Mechanical mobs; driven by instinct and stat blocks. |
| **Monster Factions** | `world_state.md` | **YES** | Tracks the player character's notoriety with a group (e.g., Sentinels). |
| **Unique Entities** | `unique.md` | **YES** | NPCs, Recurring Villains, or Intelligent Bosses. |

### Faction Splashing for Monsters
Creatures in the `bestiary.md` do not have individual SP, but their defeat ripples through their parent faction:
1.  **Faction Tag:** Every bestiary entry MUST include a `Faction: [[Faction_Name]]` tag.
2.  **Infamy Splash:** Defeating a bestiary creature splashes **-25% SP** (rounded down) into the collective Faction Infamy track in `logs/reputation_log.md`.
