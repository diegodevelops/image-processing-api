import ImagesQuery from '../../lib/ImagesQuery';

describe('tests for ImageQuery class', () => {
  describe('tests for .hasFileName', () => {
    it('no parameter should return false', () => {
      let query = {};
      let iq = new ImagesQuery(query);
      let answer = iq.hasFileName();
      expect(answer).toBeFalse();
    });

    it('empty string should return false', () => {
      let query = { file_name: '' };
      let iq = new ImagesQuery(query);
      let answer = iq.hasFileName();
      expect(answer).toBeFalse();
    });

    it('spaces should return false', () => {
      let query = { file_name: '  ' };
      let iq = new ImagesQuery(query);
      let answer = iq.hasFileName();
      expect(answer).toBeFalse();
    });

    it('"puertorico" should return true', () => {
      let query = { file_name: 'puertorico' };
      let iq = new ImagesQuery(query);
      let answer = iq.hasFileName();
      expect(answer).toBeTrue();
    });
  });

  describe('tests for .hasWidthAndHeight', () => {
    it('no parameters should return false', () => {
      let query = {};
      let iq = new ImagesQuery(query);
      let answer = iq.hasWidthAndHeight();
      expect(answer).toBeFalse();
    });

    it('empty strings should return false', () => {
      let query = { width: '', height: '' };
      let iq = new ImagesQuery(query);
      let answer = iq.hasWidthAndHeight();
      expect(answer).toBeFalse();
    });

    it('width of 200 and no height should return false', () => {
      let query = { width: '200' };
      let iq = new ImagesQuery(query);
      let answer = iq.hasWidthAndHeight();
      expect(answer).toBeFalse();
    });

    it('height of 200 and no width should return false', () => {
      let query = { height: '200' };
      let iq = new ImagesQuery(query);
      let answer = iq.hasWidthAndHeight();
      expect(answer).toBeFalse();
    });

    it('height and width of 200 should return true', () => {
      let query = { width: '200', height: '200' };
      let iq = new ImagesQuery(query);
      let answer = iq.hasWidthAndHeight();
      expect(answer).toBeTrue();
    });
  });
});
