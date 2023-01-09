import styled from 'styled-components';
import { system } from '@gympass/yoga-system';
import { string } from 'prop-types';

const Box = styled.div.attrs(({ testId }) => ({
  'data-testid': testId,
}))(system);

Box.propTypes = {
  testId: string,
};

Box.defaultProps = {
  testId: undefined,
};

export default Box;
