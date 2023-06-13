export interface ITransitionProps {
  duration: number [];
  timing: number[][];
}

const duration = [200, 500];
const timing = [[0, 0.75, 0.1, 1]];

const transition: ITransitionProps = {
  duration,
  timing,
};

export default transition;
