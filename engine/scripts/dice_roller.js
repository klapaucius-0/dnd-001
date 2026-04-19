const crypto = require('crypto');

/**
 * Robust D&D Dice Roller
 * Usage: node dice_roller.js <dice_expression>
 * Example: node dice_roller.js "2d20l1+4-1d4"
 * Supports: +, -, h (keep highest), l (keep lowest), dl (drop lowest), dh (drop highest)
 */

const args = process.argv.slice(2);
const input = args.join('');

if (!input) {
  console.error("Please provide a dice expression (e.g., 1d20, 2d6+4, 2d20l1+4-1d4)");
  process.exit(1);
}

// Validation for ambiguous run-on numbers
for (let i = 1; i < args.length; i++) {
  if (/^\d/.test(args[i]) && !/[+-]$/.test(args[i - 1])) {
    console.warn("WARNING: Ambiguous input detected. Numbers in adjacent arguments without operators may concatenate (e.g., '1d20+4' '1d4' becomes '1d20+41d4'). Use explicit operators or quotes.");
  }
}

function rollDie(sides) {
  return crypto.randomInt(1, sides + 1);
}

function processTerm(term) {
  // Regex for dice: ([+-])? (\d*) d (\d+) (?: (dl|dh|h|l) (\d+) )?
  const diceRegex = /^([+-])?(\d*)d(\d+)(?:(dl|dh|h|l)(\d+))?$/i;
  // Regex for constants: ([+-])? (\d+)
  const constRegex = /^([+-])?(\d+)$/;

  let match = term.match(diceRegex);
  if (match) {
    const sign = match[1] === '-' ? -1 : 1;
    const count = parseInt(match[2] || "1");
    const sides = parseInt(match[3]);
    const opType = match[4] ? match[4].toLowerCase() : null;
    const opCount = match[5] ? parseInt(match[5]) : (opType ? 1 : 0);

    let rolls = [];
    for (let i = 0; i < count; i++) {
      rolls.push(rollDie(sides));
    }

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

    const sum = keptRolls.reduce((acc, r) => acc + r, 0) * sign;
    return {
      type: 'dice',
      sign,
      count,
      sides,
      rolls,
      keptRolls,
      total: sum,
      label: term
    };
  }

  match = term.match(constRegex);
  if (match) {
    const sign = match[1] === '-' ? -1 : 1;
    const value = parseInt(match[2]) * sign;
    return {
      type: 'constant',
      total: value,
      label: term
    };
  }

  throw new Error(`Invalid term: ${term}`);
}

try {
  // Split input into terms, keeping signs
  // This regex matches a term starting with optional sign
  const terms = input.replace(/\s+/g, '').match(/([+-]?[^+-]+)/g);
  
  if (!terms) throw new Error("Invalid expression");

  const results = terms.map(processTerm);
  const total = results.reduce((acc, res) => acc + res.total, 0);

  // Formatting output
  let breakdown = results.map(res => {
    if (res.type === 'constant') return res.total >= 0 ? `+${res.total}` : `${res.total}`;
    
    const rollDisplay = res.rolls.length > 1 ? `[${res.rolls.join(', ')}]` : `${res.rolls[0]}`;
    const signStr = res.sign === 1 ? '+' : '-';
    return `${signStr}${rollDisplay}`;
  }).join(' ');

  // Clean up the first plus sign if it exists
  if (breakdown.startsWith('+')) breakdown = breakdown.substring(1);

  console.log(`Result: ${total} (${breakdown.trim()})`);

} catch (e) {
  console.error(e.message);
  process.exit(1);
}
