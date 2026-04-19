import config from '.';

describe('oxfmt default config', () => {
  it('should be defined', () => {
    expect(config).toBeDefined();
  });

  it('should be an object', () => {
    expect(typeof config).toBe('object');
  });

  it('should match the default structure', () => {
    expect(config).toEqual({});
  });
});
