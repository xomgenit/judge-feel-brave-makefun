import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Past the last streetlight, a heron stands in the shallows on one folded leg, watching the river carry the moon in broken pieces. Reeds lean. The water moves slow. The bird waits while the silver gathers whole again, then opens one wing, then the other, and steps into the dark.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
