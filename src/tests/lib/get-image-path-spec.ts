import getImagePath from "../../lib/get-image-path";

describe('tests for getImagePath', () => {
    
    const fileName = 'japan.png';
    const correctFilePath = 'assets/full/japan.jpg'
    it(`should return '${correctFilePath}' from '${fileName}'`, () => {
        const resultStr = getImagePath(fileName);
        expect(resultStr).toBe(correctFilePath);
    })
})