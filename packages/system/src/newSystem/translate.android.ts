import defaultProps from './defaultProps'

export default function translate(prop: string): string {
  const props = { ...defaultProps, elevation: 'elevation' }
  return props[prop] || prop;
}



