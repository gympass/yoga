export interface IBreakpointsProps {
  xxs: {
    width: number;
    margin: number;
    gutter: number;
  };

  xs: {
      width: number;
      margin: number;
      gutter: number;
  };

  sm: {
      width: number;
      margin: number;
      gutter: number;
  };

  md: {
      width: number;
      margin: number;
      gutter: number;
  };

  lg: {
    width: number;
    margin: number;
    gutter: number;
  };

  xl: {
    width: number;
    margin: number;
    gutter: number;
  };

  xxl: {
    width: number;
    margin: number;
    gutter: number;
  };

  xxxl: {
    width: number;
    margin: number;
    gutter: number;
  };
}

const breakpoints: IBreakpointsProps = {
  xxs: {
    width: 0,
    margin: 20,
    gutter: 16,
  },

  xs: {
    width: 360,
    margin: 20,
    gutter: 16,
  },

  sm: {
    width: 480,
    margin: 20,
    gutter: 16,
  },

  md: {
    width: 768,
    margin: 20,
    gutter: 16,
  },

  lg: {
    width: 1024,
    margin: 71,
    gutter: 24,
  },

  xl: {
    width: 1200,
    margin: 71,
    gutter: 24,
  },

  xxl: {
    width: 1366,
    margin: 71,
    gutter: 24,
  },

  xxxl: {
    width: 1600,
    margin: 71,
    gutter: 24,
  },
};

export default breakpoints;
