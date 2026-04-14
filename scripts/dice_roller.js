const crypto = require('crypto');

/**
 * Robust D&D Dice Roller
 * Usage: node dice_roller.js <dice_string>
 * Example: node dice_roller.js 4d6dl1
 * Example: node dice_roller.js 2d6+4
 * Example: node dice_roller.js 1d20
 */

const input = process.argv[2];
if (!input) {
  console.error("Please provide a dice string (e.g., 1d20, 2d6+4, 4d6dl1)");
  process.exit(1);
}

function rollDie(sides) {
  return crypto.randomInt(1, sides + 1);
}

function parseDice(diceStr) {
  const diceRegex = /^(\d+)d(\d+)(?:(dl|dh)(\d+))?(?:([+-]\d+))?$/i;
  const match = diceStr.match(diceRegex);

  if (!match) {
    throw new Error("Invalid dice format. Use format like '1d20', '2d6+4', or '4d6dl1'.");
  }

  const count = parseInt(match[1]);
  const sides = parseInt(match[2]);
  const dropType = match[3]; // dl (drop lowest) or dh (drop highest)
  const dropCount = match[4] ? parseInt(match[4]) : 0;
  const bonus = match[5] ? parseInt(match[5]) : 0;

  let rolls = [];
  for (let i = 0; i < count; i++) {
    rolls.push(rollDie(sides));
  }

  const originalRolls = [...rolls];
  
  if (dropType === 'dl') {
    rolls.sort((a, b) => a - b).splice(0, dropCount);
  } else if (dropType === 'dh') {
    rolls.sort((a, b) => b - a).splice(0, dropCount);
  }

  const sum = rolls.reduce((acc, r) => acc + r, 0) + bonus;
  
  return {
    input: diceStr,
    originalRolls,
    keptRolls: rolls,
    bonus,
    total: sum
  };
}

try {
  const result = parseDice(input);
  console.log(JSON.stringify(result, null, 2));
} catch (e) {
  console.error(e.message);
  process.exit(1);
}
