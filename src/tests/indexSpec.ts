import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('tests for images enpoint', () => {
  const imagesPath = '/images';
  const fileName = 'japan';
  const nonExistingFilename = 'canada';

  let query = (fileName: string, width?: number, height?: number) => {
    let q = `?file_name=${fileName}`;

    if (width && height) {
      q = q + `&width=${width}&height=${height}`;
    }

    return q;
  };

  describe('tests for original size', async () => {
    it(`just filename ${fileName} should return file`, async () => {
      const reponse = await request.get(`${imagesPath}${query(fileName)}`);
      expect(reponse.status).toBe(200);
    });

    it(`filename ${fileName} and only width should return file`, async () => {
      const reponse = await request.get(`${imagesPath}${query(fileName, 100)}`);
      expect(reponse.status).toBe(200);
    });

    it(`filename ${fileName} and only height should return file`, async () => {
      const reponse = await request.get(
        `${imagesPath}${query(fileName, undefined, 100)}`,
      );
      expect(reponse.status).toBe(200);
    });
  });

  describe('testing for different sizes', () => {
    it('resize to 20px x 20px should return files', async () => {
      const reponse = await request.get(
        `${imagesPath}${query(fileName, 20, 20)}`,
      );
      expect(reponse.status).toBe(200);
    });

    it('resize to 300px x 300px should return files', async () => {
      const reponse = await request.get(
        `${imagesPath}${query(fileName, 300, 300)}`,
      );
      expect(reponse.status).toBe(200);
    });
  });

  describe('testing for error status codes', () => {
    it('should return 400', async () => {
      const reponse = await request.get(`${imagesPath}${query('', 20, 20)}`);
      expect(reponse.status).toBe(400);
    });

    it('should return 404', async () => {
      const reponse = await request.get(
        `${imagesPath}${query(nonExistingFilename, 300, 300)}`,
      );
      expect(reponse.status).toBe(404);
    });
  });
});
