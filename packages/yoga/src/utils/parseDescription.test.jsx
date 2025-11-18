import React from 'react';
import parseDescription from './parseDescription';

describe('parseDescription utility', () => {
  it('should wrap single string and trim it', () => {
    expect(parseDescription('  hello  ')).toEqual(['hello']);
  });

  it('should filter empty, whitespace and null values', () => {
    const input = ['  ', '', null, 'valid', ' also valid '];

    expect(parseDescription(input)).toEqual(['valid', 'also valid']);
  });

  it('should ignore non-string items (nodes, numbers, booleans)', () => {
    const node = <span>Node Content</span>;
    const input = [node, 42, true, ' keep ', '   ', false, null];
    const result = parseDescription(input);

    expect(result).toEqual(['keep']);
  });
});
