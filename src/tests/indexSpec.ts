import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('tests for images enpoint', () => {

    const imagesPath = '/images'
    const fileName = 'puertorico'

    let query = (
        fileName: string,
        width: number, 
        height: number
    ) => {
        return `?file_name=${fileName}&width=${width}&height=${height}`
    }

    describe('testing for small sizes', () => {

        it('resize to 20px x 20px', async () => {
            const reponse = await request.get(`${imagesPath}${query(fileName, 20, 20)}`)
            expect((reponse).status).toBe(200);
            expect(reponse.files).toBeTruthy()
        })

        it('resize to 300px x 300px', async () => {
            const reponse = await request.get(`${imagesPath}${query(fileName, 300, 300)}`)
            expect((reponse).status).toBe(200);
            expect(reponse.files).toBeTruthy()
        })
    })
})