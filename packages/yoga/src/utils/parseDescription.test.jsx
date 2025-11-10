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

  it('should preserve non-string nodes', () => {
    const node = <span>Node Content</span>;
    const input = [node, ' text '];
    const result = parseDescription(input);

    expect(result[0]).toBe(node);
    expect(result[1]).toBe('text');
  });
});
