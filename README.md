# lorem_ipsum.ts
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/github/stars/hades3729/Lorem_ipsum?style=for-the-badge)
![](https://img.shields.io/github/last-commit/hades3729/Lorem_ipsum?style=for-the-badge)
![](https://img.shields.io/github/license/hades3729/Lorem_ipsum?style=for-the-badge)

A simple TypeScript library for using the `loripsum.net` API.

## Usage
```ts
import { loremIpsum } from 'https://deno.land/x/lorem_ipsum/mod.ts'

// Only using the required parameters
console.log(
  await loremIpsum({ 
    paragraphs: 3, 
	length: 'medium'
  })
);

// More complex example using some formatting options
console.log(
  await loremIpsum({ 
    paragraphs: 3, 
	length: 'verylong',
	decorate: true,
	ol: true,
	code: true,
	prude: true
  })
)
```

## Full list of parameters
```ts
  /** Required arguments. */
  paragraphs: number; // Number of paragraphs to generate
  length: "short" | "medium" | "long" | "verylong"; // Length of paragraphs

  /** Optional arguments */
  decorate?: boolean;
  link?: boolean;
  ul?: boolean;
  ol?: boolean;
  dl?: boolean;
  dq?: boolean;
  code?: boolean;
  headers?: boolean;
  allcaps?: boolean;
  prude?: boolean;
  plaintext?: boolean;
```
See https://loripsum.net/ for more information.

## License
[Apache 2.0](./LICENSE)
