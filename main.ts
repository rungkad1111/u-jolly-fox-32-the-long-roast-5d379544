import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";
const line =
  "My agent remembers every wallet I have ever owned, then asks me to confirm a free mint three times - a Swiss vault run by a golden retriever clutching a permission slip.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, line, "utf8");
console.log(line);
console.log(`chars: ${[...line].length}`);
