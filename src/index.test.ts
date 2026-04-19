import { oxfmtConfig } from '.';

describe('oxfmtConfig', () => {
  it('normal', async () => {
    expect(oxfmtConfig('Foo', 'Bar')).toBe('Foo Bar');
  });

  it('lastName upper case', async () => {
    expect(oxfmtConfig('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});
