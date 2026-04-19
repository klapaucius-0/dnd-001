/**
 * Crafting DC Calculator
 * 
 * Usage: node engine/scripts/crafting_dc_calc.js <Material_WR> <Blueprint_Mod> <Quality_Target>
 * Example: node engine/scripts/crafting_dc_calc.js 13 2 STANDARD
 */

const args = process.argv.slice(2);

if (args.length < 2) {
    console.log("Usage: node engine/scripts/crafting_dc_calc.js <Material_WR> <Blueprint_Mod> [Quality_Target]");
    process.exit(1);
}

const materialWR = parseInt(args[0]);
const blueprintMod = parseInt(args[1]);
const qualityTarget = args[2] ? args[2].toUpperCase() : "STANDARD";

// Static DCs for high quality tiers as per engine/rules/crafting.md
const qualityDCs = {
    "FINE": 20,
    "SUPERIOR": 25,
    "MASTERWORK": 30
};

let finalDC;

if (qualityDCs[qualityTarget]) {
    // High Quality targets use a static DC that overrides base math, 
    // but the DC cannot be lower than the base material difficulty.
    const baseDC = materialWR + blueprintMod;
    finalDC = Math.max(baseDC, qualityDCs[qualityTarget]);
    
    console.log(`--- Crafting DC Calculation ---`);
    console.log(`Material WR: ${materialWR}`);
    console.log(`Blueprint Mod: +${blueprintMod}`);
    console.log(`Quality Target: ${qualityTarget} (Static DC: ${qualityDCs[qualityTarget]})`);
    console.log(`Result: ${finalDC}`);
} else {
    // Standard or Poor quality uses the base formula
    finalDC = materialWR + blueprintMod;
    
    console.log(`--- Crafting DC Calculation ---`);
    console.log(`Material WR: ${materialWR}`);
    console.log(`Blueprint Mod: +${blueprintMod}`);
    console.log(`Quality Target: ${qualityTarget}`);
    console.log(`Result: ${finalDC}`);
}
