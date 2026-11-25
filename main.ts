import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";
const line =
  "My agent sweeps my USDT in three seconds flat, then files a risk report, two previews and a permission slip to mint for free - a getaway driver who stops to ask the bank for a hall pass.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, line, "utf8");
console.log(line);
console.log(`chars: ${[...line].length}`);
