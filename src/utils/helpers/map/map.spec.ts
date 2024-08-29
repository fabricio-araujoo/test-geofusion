import { capitalizeString } from '.';

describe('map tests', () => {
  it('must receive "são bernardo" and return "São Bernardo"', () => {
    const str = 'são bernardo';
    const capitalized = capitalizeString(str);

    expect(capitalized).toEqual('São Bernardo');
  });

  it('must receive "av paulista" and return "Av Paulista"', () => {
    const str = 'av paulista';
    const capitalized = capitalizeString(str);

    expect(capitalized).toEqual('Av Paulista');
  });
});
