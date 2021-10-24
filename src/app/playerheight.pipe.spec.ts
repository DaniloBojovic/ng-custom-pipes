import { PlayerHeightPipe } from './playerheight.pipe';

describe('PlayerHeightPipe', () => {
  const pipe = new PlayerHeightPipe();

  it('should feet and inches to centimeters', () => {
    expect(pipe.transform('6-4')).toBe('193 cm');
    expect(pipe.transform('6-7')).toBe('201 cm');
    expect(pipe.transform('6')).toBe('183 cm');
  });
});
