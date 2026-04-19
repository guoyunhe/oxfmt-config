import config from '.';

describe('oxfmt default config', () => {
  it('should be defined', () => {
    expect(config).toBeDefined();
  });

  it('should be an object', () => {
    expect(typeof config).toBe('object');
  });

  it('should have common prettier options', () => {
    expect(config).toHaveProperty('printWidth', 100);
    expect(config).toHaveProperty('tabWidth', 2);
    expect(config).toHaveProperty('useTabs', false);
    expect(config).toHaveProperty('semi', true);
    expect(config).toHaveProperty('singleQuote', true);
    expect(config).toHaveProperty('trailingComma', 'all');
  });

  it('should have formatting options', () => {
    expect(config).toHaveProperty('bracketSpacing', true);
    expect(config).toHaveProperty('arrowParens', 'always');
    expect(config).toHaveProperty('endOfLine', 'lf');
  });

  it('should have ignorePatterns', () => {
    expect(config).toHaveProperty('ignorePatterns');
    expect(Array.isArray(config.ignorePatterns)).toBe(true);
  });

  it('should have overrides array', () => {
    expect(config).toHaveProperty('overrides');
    expect(Array.isArray(config.overrides)).toBe(true);
  });
});
