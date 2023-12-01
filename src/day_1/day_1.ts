import { asyncReadFile } from '../modules/readFile';

export const main = async () => {
    const data = await asyncReadFile('src/day_1/input.txt');

    const numberArray = data.map((input) => {
        const forwardInput = input;
        const backwardInput = reverse(input);

        let forwardNumber: number;
        let backwardNumber: number;

        for (let index = 0; index < forwardInput.length; index++) {
            const forwardChar = forwardInput[index];
            if (!Number.isNaN(parseInt(forwardChar))) {
                forwardNumber = parseInt(forwardChar);
                break;
            }    
        } 

        for (let index = 0; index < backwardInput.length; index++) {
            const backwardChar = backwardInput[index];
            if (!Number.isNaN(parseInt(backwardChar))) {
                backwardNumber = parseInt(backwardChar);
                break;
            }  
        }

        return parseInt((String(forwardNumber) + String(backwardNumber)));
    })

    const sumOfNumbers = numberArray.reduce((a, b) => a + b, 0);
    console.log(`Sum of numbers: ${sumOfNumbers}`);
}

function reverse(s: string): string {
    return s.split("").reverse().join("");
}