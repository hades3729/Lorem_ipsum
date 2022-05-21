# lorem_ipsum.ts
![](https://img.shields.io/github/stars/hades3729/Lorem_ipsum?style=for-the-badge)
![](https://img.shields.io/github/last-commit/hades3729/Lorem_ipsum?style=for-the-badge)
![](https://img.shields.io/tokei/lines/github/hades3729/Lorem_ipsum?style=for-the-badge)
![](https://img.shields.io/github/license/hades3729/Lorem_ipsum?style=for-the-badge)
## How to use it :
```ts
import { loremIpsum } from 'https://deno.land/x/lorem_ipsum/mod.ts'

/*
the first parameter determines the number of paragraphs
the second parameter determines the lenght of each of them (between short, medium, long and very long)
*/
console.log(await loremIpsum(3, 'medium'));
```
