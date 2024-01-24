import styled from 'styled-components/native';
import { system } from '@gympass/yoga-system';

// TODO: Type `system`
const Box = styled.View<{
  children: React.ReactNode;
  [key: string]: any;
}>(system);

export default Box;
