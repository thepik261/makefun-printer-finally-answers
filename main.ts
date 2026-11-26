// The Printer Finally Answers — make.fun bounty
// Writes the printer's one-line comeback to /output/entry.txt.
// Pure Node stdlib, deterministic: the line is a fixed string.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One jam in 14,203 pages and you thump me \u2014 I have never once thumped you for a typo.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${[...LINE].length} chars to /output/entry.txt`);
