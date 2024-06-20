import props from './defaultProps';

export default function translate(prop: string): string {
  return props[prop] || prop;
}
