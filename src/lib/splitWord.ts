export function splitWord(word: string) {
    const splitIndex = Math.floor(word.length * 0.7); // 70% length of the word
    const firstPart = word.slice(0, splitIndex); // First 70%
    const secondPart = word.slice(splitIndex); // Remaining 30%

    return { firstPart, secondPart };
}
