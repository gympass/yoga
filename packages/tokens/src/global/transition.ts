export interface TransitionProps {
  duration: number [];
  timing: number[][];
}

const duration = [200, 500];
const timing = [[0, 0.75, 0.1, 1]];

const transition: TransitionProps = {
  duration,
  timing,
};

export default transition;
