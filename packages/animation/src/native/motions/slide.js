const up = when => ({
  top: when ? 0 : 25,
  duration: 6000,
});

const slide = {
  up,
};

export default slide;
