import ImagesQuery from "../../lib/ImagesQuery"

describe('tests for ImageQuery class', () => {

    describe('tests for .hasFileName', () => {

        it('no parameter should return false', () => {
            let query = {}
            let iq = new ImagesQuery(query)
            let answer = iq.hasFileName()
            expect(answer).toBeFalse()
        })

        it('empty string should return false', () => {
            let query = { file_name: '' }
            let iq = new ImagesQuery(query)
            let answer = iq.hasFileName()
            expect(answer).toBeFalse()
        })

        it('spaces should return false', () => {
            let query = { file_name: '  ' }
            let iq = new ImagesQuery(query)
            let answer = iq.hasFileName()
            expect(answer).toBeFalse()
        })

        it('"puertorico" should return true', () => {
            let query = { file_name: 'puertorico' }
            let iq = new ImagesQuery(query)
            let answer = iq.hasFileName()
            expect(answer).toBeTrue()
        })
    })
})