export async function loremIpsum(
    numberOfParagraphs: number,
    lenght: string = 'short' || 'medium' || 'long' || 'verylong',
) {
    const url = `https://loripsum.net/api/${lenght}/${numberOfParagraphs}`;
    const response = await fetch(url);
    const text = await response.text();
    return text;
}