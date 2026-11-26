
import { movies } from "./movies";
import { validateMovies } from "./validate";
import { validateCollections } from "./validate-collections";
import { validateTimeline } from "./validate-timeline";

const movieResult = validateMovies(movies);
const collectionResult = validateCollections();

console.log("\nMAIN CATALOGUE");
console.log("-----------------------");
console.log("Valid:", movieResult.valid);
console.log("Total movies:", movieResult.total);

console.log("\nCOLLECTIONS");
console.log("-----------------------");
console.log("Valid:", collectionResult.valid);
console.log("Essentials:", collectionResult.essentials);
console.log("Extras:", collectionResult.extraMovies);
console.log("Extra collections:", collectionResult.extraCollections);
console.log("Extra references:", collectionResult.extraReferences);

const timelineResult = validateTimeline(movies);

console.log("\nTIMELINE");
console.log("-----------------------");
console.log("Valid:", timelineResult.valid);
console.log("Total:", timelineResult.total);
console.log("MCU:", timelineResult.mcuCount);
console.log("Fox:", timelineResult.foxCount);

const errors = [
  ...movieResult.errors,
  ...collectionResult.errors,
  ...timelineResult.errors,
];

if (errors.length > 0) {
  console.error("\nVALIDATION ERRORS");

  errors.forEach((error) => console.error(`- ${error}`));

  process.exitCode = 1;
} else {
  console.log("\nAll catalogue checks passed!");
}
