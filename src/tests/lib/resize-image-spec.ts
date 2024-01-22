import resizeImage from "../../lib/resize-image";

describe('tests for resizeImage', () => {

    const filePath = 'assets/full/japan.jpg';
    const newFilePath = 'assets/20x20/japan.jpg';
    const width = 20;
    const height = 20;

    it('should return true', async () => {
        const answer = await resizeImage(filePath, newFilePath, width, height);
        expect(answer).toBeTrue();
    })
})