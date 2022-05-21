import { loremIpsum } from "./mod.ts";

// Because of the inherent randomness present in the API
// we're using, the most effective thing we can do, for
// the time being, is just log out fetches from different
// parameters.

// Simple test using only required parameters.
console.log("Required Parameters Only \n========================");
console.log(await loremIpsum({ paragraphs: 1, length: "short" }));

// Return plain text result
console.log("Plaintext Only \n==============");
console.log(
  await loremIpsum({ paragraphs: 2, length: "medium", plaintext: true }),
);

// Every single non-plain text formatted result.
console.log("Everything \n==========");
console.log(
  await loremIpsum({
    paragraphs: 2,
    length: "medium",
    decorate: true,
    link: true,
    ul: true,
    ol: true,
    dl: true,
    dq: true,
    code: true,
    headers: true,
    allcaps: true,
    prude: true,
    plaintext: false,
  }),
);
