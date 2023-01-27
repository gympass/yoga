export interface fontsProps extends Array<{ [key: string]: string | (string | number)[] }> {
  rubik?: {
    family?: string;
    weight?: (string | number)[];
  }
}