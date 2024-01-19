import getFullImagePath from "./get-full-image-path";

describe('tests for .getFullImagePath func', () => {
    
    const fileName = 'japan.png';
    const correctFilePath = 'assets/full/japan.jpg'
    it(`should return '${correctFilePath}' from '${fileName}'`, () => {
        const resultStr = getFullImagePath(fileName);
        expect(resultStr).toBe(correctFilePath);
    })
})