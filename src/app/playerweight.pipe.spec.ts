import { PlayerWeightPipe } from './playerweight.pipe';

describe('PlayerWeightPipe', () => {
  const pipe = new PlayerWeightPipe();

  it('should convert lbs to kg', () => {
    expect(pipe.transform(221)).toBe('100.24 kg');
    expect(pipe.transform(1)).toBe('0.45 kg');
  });
});
