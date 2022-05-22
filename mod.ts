interface Options {
    paragraphs: number;
    length: 'short' | 'medium' | 'long' | 'verylong';
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
}

export async function loremIpsum(params: Options) {
    let url: string = `https://loripsum.net/api/${params.paragraphs}/${params.length}`;

    for (let property in params) {
        if (params[property as keyof Options] === true) {
            url += `/${property}`;
        }
    }

    const response = await fetch(url);
    const text: string = await response.text();
    return text;
}