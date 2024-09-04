import { getFullYear, getFooterCopy, getLatestNotification } from '../utils';

describe('utils.js', () => {
  describe('getFullYear', () => {
    it('should return the current year', () => {
      const currentYear = new Date().getFullYear();
      expect(getFullYear()).toBe(currentYear);
    });
  });
  describe('getFooterCopy', () => {
    it('should return "Copyright Holberton School" when the argument is false', () => {
      expect(getFooterCopy(false)).toBe('Copyright Holberton School');
    });
    it('should return "Copyright Holberton School" when the argument is true and the year is 2019', () => {
      expect(getFooterCopy(true)).toBe('Copyright Holberton School');
    });
  });
  describe('getLatestNotification', () => {
    it('should return "New course available" when the argument is false', () => {
      expect(getLatestNotification()).toBe('New course available');
    });
    it('should return "New course available" when the argument is true', () => {
      expect(getLatestNotification(true)).toBe('New course available');
    });
  });
});
