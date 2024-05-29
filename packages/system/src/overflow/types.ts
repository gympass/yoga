type OverflowValues = string;

type Overflow = {
  overflow?: OverflowValues;
  of?: OverflowValues;
};

type OverflowX = {
  overflowX?: OverflowValues;
  ox?: OverflowValues;
};

type OverflowY = {
  overflowY?: OverflowValues;
  oy?: OverflowValues;
};

export type Overflows = Overflow & OverflowX & OverflowY;
