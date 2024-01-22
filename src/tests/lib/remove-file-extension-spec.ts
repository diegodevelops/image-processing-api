import removeFileExtension from '../../lib/remove-file-extension';

describe('tests for removeFileExtension', () => {
  const string = 'puertorico.png';
  const correctString = 'puertorico';
  it(`should convert ${string} to ${correctString}`, () => {
    const newString = removeFileExtension(string);
    expect(newString).toBe(correctString);
  });

  const string2 = 'puertorico.sanjuan.png';
  const correctString2 = 'puertorico.sanjuan';
  it(`should convert ${string2} to ${correctString2}`, () => {
    const newString = removeFileExtension(string2);
    expect(newString).toBe(correctString2);
  });
});
