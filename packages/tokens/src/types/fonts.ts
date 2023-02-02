export interface FontsProps extends Array<{ [key: string]: string | (string | number)[] }> {
  rubik?: {
    family?: string;
    weight?: (string | number)[];
  }
}