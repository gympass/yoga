import styled from 'styled-components';
import { arrayOf, oneOfType } from 'prop-types';

import Button from '../../../Button';
import Tag from '../../../Tag';
import { typeOf } from '../../../shared/propTypes';

const Actions = styled.footer``;

Actions.propTypes = {
  children: oneOfType([
    oneOfType([
      typeOf(Button),
      typeOf(Button.Text),
      typeOf(Button.Outline),
      typeOf(Button.Link),
      typeOf(Tag),
      typeOf(Tag.Informative),
    ]),
    arrayOf(
      oneOfType([
        typeOf(Button),
        typeOf(Button.Text),
        typeOf(Button.Outline),
        typeOf(Button.Link),
        typeOf(Tag),
        typeOf(Tag.Informative),
      ]),
    ),
  ]).isRequired,
};

Actions.displayName = 'Card.Actions';

export default Actions;
