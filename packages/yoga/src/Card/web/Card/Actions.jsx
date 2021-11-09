import styled from 'styled-components';
import { node } from 'prop-types';
import Box from '../../../Box';

const Actions = styled(Box).attrs({ as: 'footer' })``;

Actions.propTypes = {
  children: node.isRequired,
};

Actions.displayName = 'Card.Actions';

export default Actions;
