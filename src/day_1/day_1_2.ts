import { asyncReadFile } from '../modules/readFile';

const numberWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

export const main = async () => {
    const data = await asyncReadFile('src/day_1/input.txt');

    const dataMapped = data.map((e) => e.replace(/(one|two|three|four|five|six|seven|eight|nine)/g, 
    (match, _key) => match+match.substring(match.length-1,match.length)));

    const numberArray = dataMapped.map((input) => {
        const forwardInput = input;

        const wordNumberCache: Array<number> = [];
        const loopCache: Array<String> = [];

        for (let index = 0; index < forwardInput.length; index++) {
            const element = forwardInput[index];
            if (!Number.isNaN(parseInt(element))) {
                wordNumberCache.push(parseInt(element));
                loopCache.length = 0;
            } else {
                loopCache.push(element);
                if(containsNumberWord(loopCache.join(''))) {
                    wordNumberCache.push(getNumberWordOutOfString(loopCache.join('')));
                    loopCache.length = 0;
                } else {
                    continue;
                }
            }
        }

        const firstNumberReturn = String(wordNumberCache[0]);
        const lastNumberReturn = String(wordNumberCache[wordNumberCache.length - 1]);

        return parseInt(firstNumberReturn + lastNumberReturn);
    })
    
    console.log(`Sum: ${numberArray.reduce((a, b) => a + b, 0)}`);
}

function containsNumberWord(input: string): boolean {
    let containsNumberWord = false;

    for (const word of numberWords) {
        if (input.includes(word)) {
            containsNumberWord = true;
            break;
        }
    }

    return containsNumberWord;
}

function getNumberWordOutOfString(input: string): number {
    for (const word of numberWords) {
        if (input.endsWith(word)) {
            const extractedWordNumber = numberWords.indexOf(word) + 1;
            return extractedWordNumber;
        }
    }
}

