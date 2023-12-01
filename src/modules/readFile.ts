import { readFileSync, promises as fsPromises } from 'fs';

const asyncReadFile = async (filename: string) => {
    try {
        const contents = await fsPromises.readFile(filename, 'utf-8');

        const arr = contents.split(/\r?\n/);

        return arr;
    } catch (err) {
        console.log(err);
    }
};

export { asyncReadFile };