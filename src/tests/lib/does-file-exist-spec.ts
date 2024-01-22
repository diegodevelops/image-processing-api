import doesFileExist from "../../lib/does-file-exist"

describe('tests for doesFileExist func', () => {

    it('should return true', async () => {
        const fileName = 'japan.jpg';
        const filePath = `assets/full/${fileName}`
        const answer = await doesFileExist(filePath);
        expect(answer).toBeTrue();
    })
})