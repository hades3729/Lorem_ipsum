# Lorem_ipsum.ts
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/github/stars/hades3729/Lorem_ipsum?style=for-the-badge)
![](https://img.shields.io/github/last-commit/hades3729/Lorem_ipsum?style=for-the-badge)
![](https://img.shields.io/github/license/hades3729/Lorem_ipsum?style=for-the-badge)

## Informations :
**Lorem_ipsum.ts** is a simple yet practical Deno module which makes use of the `loripsum.net` API to generate its texts.
Before asking here, consider looking at the [API's documentation](https://loripsum.net/api) for any information!

## How to use it :
```ts
import { loremIpsum } from 'https://deno.land/x/lorem_ipsum/mod.ts'

// Here is a basic example with the required parameters :

console.log(
  await loremIpsum({
    paragraphs: 3,
    length: 'medium'
  })
);


// And here is a more complex example that uses formatting options :

console.log(
  await loremIpsum({
    paragraphs: 3,
    length: 'medium',
    decorate: true,
    link: true,
    code: true,
    allcaps: true,
  })
);
```

## List of parameters :
```ts
  // Required arguments :
  paragraphs: number;
  length: 'short' | 'medium' | 'long' | 'verylong';
  // Optional arguments :
  decorate?: boolean;
  link?: boolean;
  ul?: boolean;
  ol?: boolean;
  dl?: boolean;
  bq?: boolean;
  code?: boolean;
  headers?: boolean;
  allcaps?: boolean;
  prude?: boolean;
  plaintext?: boolean;
 ```
