import { newSystem } from './index';
const spacings = { zero: 0, small: 4, medium: 8, large: 12 };

const theme = {
  yoga: {
    spacing: spacings,
  },
};

describe('New System', () => {
  it('should return none if does not have any allowed props', () => {
    const props = { children: null, abc: 10 };
    const result = newSystem(props);

    expect(result).toBeUndefined();
  });

  it('should apply correct value for spacing variant', () => {
    const props = { children: null, mt: 'medium', pb: 'large', theme };
    const result = newSystem(props);

    expect(result).toEqual(['margin-top: 8px;', 'padding-bottom: 12px;']);
  });

  it('should return the unchanged value for css properties', () => {
    const props = { children: null, position: 'absolute', theme };
    const result = newSystem(props);

    expect(result).toEqual(['position: absolute;']);
  });
});
