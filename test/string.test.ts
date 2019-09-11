import decodeEntities from '../src';

describe('decodes strings', () => {
  it('works', () => {
    expect(decodeEntities('Careers &#8211; Join our')).toBe('Careers – Join our');
  });
  it("handles empty", () => {
    expect(decodeEntities('')).toEqual('');
    expect(decodeEntities(undefined)).toEqual('');
  })
});
