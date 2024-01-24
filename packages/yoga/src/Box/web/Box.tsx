import styled from 'styled-components';
import { system } from '@gympass/yoga-system';

const Box = styled('div')<{ children: React.ReactNode; [key: string]: any }>(
  system,
);

export default Box;
