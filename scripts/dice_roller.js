const crypto = require('crypto');

/**
 * Robust D&D Dice Roller
 * Usage: node dice_roller.js <dice_string>
 * Example: node dice_roller.js 4d6dl1
 * Example: node dice_roller.js 2d20h1+4 (Advantage)
 * Example: node dice_roller.js 2d20l1+4 (Disadvantage)
 */

const input = process.argv[2];
if (!input) {
  console.error("Please provide a dice string (e.g., 1d20, 2d6+4, 4d6dl1, 2d20h1+4)");
  process.exit(1);
}

function rollDie(sides) {
  return crypto.randomInt(1, sides + 1);
}

function parseDice(diceStr) {
  // Enhanced regex to support 'h' (keep highest) and 'l' (keep lowest)
  const diceRegex = /^(\d+)d(\d+)(?:(dl|dh|h|l)(\d+))?(?:([+-]\d+))?$/i;
  const match = diceStr.match(diceRegex);

  if (!match) {
    throw new Error("Invalid dice format. Use format like '1d20', '2d6+4', '4d6dl1', or '2d20h1+4'.");
  }

  const count = parseInt(match[1]);
  const sides = parseInt(match[2]);
  const opType = match[3]; // dl, dh, h, l
  const opCount = match[4] ? parseInt(match[4]) : 0;
  const bonus = match[5] ? parseInt(match[5]) : 0;

  let rolls = [];
  for (let i = 0; i < count; i++) {
    rolls.push(rollDie(sides));
  }

  const originalRolls = [...rolls];
  let keptRolls = [...rolls];
  
  if (opType === 'dl') {
    keptRolls.sort((a, b) => a - b).splice(0, opCount);
  } else if (opType === 'dh') {
    keptRolls.sort((a, b) => b - a).splice(0, opCount);
  } else if (opType === 'h') {
    keptRolls.sort((a, b) => b - a);
    keptRolls = keptRolls.slice(0, opCount);
  } else if (opType === 'l') {
    keptRolls.sort((a, b) => a - b);
    keptRolls = keptRolls.slice(0, opCount);
  }

  const sum = keptRolls.reduce((acc, r) => acc + r, 0) + bonus;
  
  return {
    input: diceStr,
    originalRolls,
    keptRolls,
    bonus,
    total: sum
  };
}

try {
  const result = parseDice(input);
  const rollsStr = result.originalRolls.length > 1 ? `[${result.originalRolls.join(', ')}]` : result.originalRolls[0];
  const bonusStr = result.bonus !== 0 ? (result.bonus > 0 ? ` + ${result.bonus}` : ` - ${Math.abs(result.bonus)}`) : '';
  
  // Concise output for high-signal reading
  console.log(`Result: ${result.total} (${rollsStr}${bonusStr})`);
  
  // Keep JSON for programmatic use if needed, but the primary output is now the string
  // console.log(JSON.stringify(result, null, 2));
} catch (e) {
  console.error(e.message);
  process.exit(1);
}
