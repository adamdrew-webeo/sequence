const expect = require('chai').expect;
const LongestIncreasingSequence = require('./LongestIncreasingSequence');

describe('LongestIncreasingSequence', () => {
  it('should return 1 when no sequences', () => {
    const result = LongestIncreasingSequence([9, 9, 4, 2]);
    expect(result).equals(1)
  });

  it('should return length of sequence', () => {
    const result = LongestIncreasingSequence([1, 2, 3, 4]);
    expect(result).equals(4)
  });

    it('should not count duplicates', () => {
    const result = LongestIncreasingSequence([1, 2, 2, 4]);
    expect(result).equals(3)
  });

  it('should return length of non contiguous sequence', () => {
    const result = LongestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]);
    expect(result).equals(7)
  });
});
