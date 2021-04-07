import styled from 'styled-components';
import { node } from 'prop-types';

const Actions = styled.footer``;

Actions.propTypes = {
  children: node.isRequired,
};

Actions.displayName = 'Card.Actions';

export default Actions;
