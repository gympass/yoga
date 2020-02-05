const up = () => ({
  from: { opacity: 0 },
  to: { opacity: 1 },
  duration: 6000,
});

const down = () => ({
  from: { opacity: 0 },
  to: { opacity: 1 },
  duration: 6000,
});

const fade = {
  up,
  down,
};

export default fade;
