import ImagesQuery from '../../lib/ImagesQuery';

describe('tests for ImageQuery class', () => {
  describe('tests for .hasFileName', () => {
    it('no parameter should return false', () => {
      const query = {};
      const iq = new ImagesQuery(query);
      const answer = iq.hasFileName();
      expect(answer).toBeFalse();
    });

    it('empty string should return false', () => {
      const query = { file_name: '' };
      const iq = new ImagesQuery(query);
      const answer = iq.hasFileName();
      expect(answer).toBeFalse();
    });

    it('spaces should return false', () => {
      const query = { file_name: '  ' };
      const iq = new ImagesQuery(query);
      const answer = iq.hasFileName();
      expect(answer).toBeFalse();
    });

    it('"puertorico" should return true', () => {
      const query = { file_name: 'puertorico' };
      const iq = new ImagesQuery(query);
      const answer = iq.hasFileName();
      expect(answer).toBeTrue();
    });
  });

  describe('tests for .hasWidthAndHeight', () => {
    it('no parameters should return false', () => {
      const query = {};
      const iq = new ImagesQuery(query);
      const answer = iq.hasWidthAndHeight();
      expect(answer).toBeFalse();
    });

    it('empty strings should return false', () => {
      const query = { width: '', height: '' };
      const iq = new ImagesQuery(query);
      const answer = iq.hasWidthAndHeight();
      expect(answer).toBeFalse();
    });

    it('width of 200 and no height should return false', () => {
      const query = { width: '200' };
      const iq = new ImagesQuery(query);
      const answer = iq.hasWidthAndHeight();
      expect(answer).toBeFalse();
    });

    it('height of 200 and no width should return false', () => {
      const query = { height: '200' };
      const iq = new ImagesQuery(query);
      const answer = iq.hasWidthAndHeight();
      expect(answer).toBeFalse();
    });

    it('height and width of 200 should return true', () => {
      const query = { width: '200', height: '200' };
      const iq = new ImagesQuery(query);
      const answer = iq.hasWidthAndHeight();
      expect(answer).toBeTrue();
    });
  });

  describe('tests for .didProvideValidInputWidth', () => {

    it('width of 200 should return true', () => {
      const query = { width: '200' };
      const iq = new ImagesQuery(query);
      const answer = iq.didProvideValidInputWidth()
      expect(answer).toBeTrue()
    })

    it('width of "200uu" should return false', () => {
      const query = { width: '200uu' };
      const iq = new ImagesQuery(query);
      const answer = iq.didProvideValidInputWidth()
      expect(answer).toBeFalse()
    })
  })

  describe('tests for .didProvideValidInputHeight', () => {

    it('height of 200 should return true', () => {
      const query = { height: '200' };
      const iq = new ImagesQuery(query);
      const answer = iq.didProvideValidInputHeight()
      expect(answer).toBeTrue()
    })

    it('height of "200uu" should return false', () => {
      const query = { height: '200uu' };
      const iq = new ImagesQuery(query);
      const answer = iq.didProvideValidInputHeight()
      expect(answer).toBeFalse()
    })
  })

  describe('tests for .didProvideInputWidthAndHeight', () => {

    it('height and width of "xxx" should return true', () => {
      const query = { height: 'xxx', width: 'xxx' };
      const iq = new ImagesQuery(query);
      const answer = iq.didProvideInputWidthAndHeight()
      expect(answer).toBeTrue()
    })

    it('height of "xxx" and empty width should return false', () => {
      const query = { height: 'xxx' };
      const iq = new ImagesQuery(query);
      const answer = iq.didProvideInputWidthAndHeight()
      expect(answer).toBeFalse()
    })
  })

  describe('tests for .didProvideInputWidth', () => {

    it('width of "xxx" should return true', () => {
      const query = {  width: 'xxx' };
      const iq = new ImagesQuery(query);
      const answer = iq.didProvideInputWidth()
      expect(answer).toBeTrue()
    })

    it('empty width should return false', () => {
      const query = {};
      const iq = new ImagesQuery(query);
      const answer = iq.didProvideInputWidth()
      expect(answer).toBeFalse()
    })
  })

  describe('tests for .didProvideInputHeight', () => {

    it('height of "xxx" should return true', () => {
      const query = {  height: 'xxx' };
      const iq = new ImagesQuery(query);
      const answer = iq.didProvideInputHeight()
      expect(answer).toBeTrue()
    })

    it('empty height should return false', () => {
      const query = {};
      const iq = new ImagesQuery(query);
      const answer = iq.didProvideInputHeight()
      expect(answer).toBeFalse()
    })
  })
});
