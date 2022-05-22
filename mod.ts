/** Interface for argument object */
interface Options {
  /** Required arguments. */
  paragraphs: number;
  length: "short" | "medium" | "long" | "verylong";

  /** Optional arguments*/
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
}

export async function loremIpsum(params: Options) {
  let url: string =
    `https://loripsum.net/api/${params.paragraphs}/${params.length}`;

  // The API doesn't seem to care about placement of values in the URL
  // (I.E. `https://loripsum.net/api/plaintext/10/short/` and
  // `https://loripsum.net/api/short/10/plaintext` produce the same output)
  // So we can just add onto the link without worrying about the order, like so:

  for (let property in params) {
    if (params[property as keyof Options] === true) {
      url += `/${property}`;
    }
  }

  const response = await fetch(url);
  const text: string = await response.text();
  return text;
}
