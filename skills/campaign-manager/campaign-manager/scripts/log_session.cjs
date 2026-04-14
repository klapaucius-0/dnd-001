const fs = require('fs');
const path = require('path');

/**
 * Log Session Script
 * Usage: node log_session.cjs <session_number> <summary_json>
 */

const sessionNum = process.argv[2];
const summaryStr = process.argv[3];

if (!sessionNum || !summaryStr) {
  console.error("Usage: node log_session.cjs <session_number> <summary_json>");
  process.exit(1);
}

const summary = JSON.parse(summaryStr);
const sessionFile = `session_${sessionNum.padStart(2, '0')}.md`;
const filePath = path.join(process.cwd(), 'sessions', sessionFile);

const content = `# Session ${sessionNum.padStart(2, '0')}: ${summary.title}

**Date:** ${new Date().toLocaleDateString()}
**Character:** ${summary.character}
**Location:** ${summary.location}

## Summary
${summary.text}

## Key Events
${summary.events.map(e => `*   ${e}`).join('\n')}

## Loot & Discoveries
${summary.loot.map(l => `*   ${l}`).join('\n')}

## Experience Points
*   ${summary.xp} XP earned.

## Final State
*   **${summary.character}:** ${summary.final_status}
`;

fs.writeFileSync(filePath, content);
console.log(`✅ Session log created: ${filePath}`);
