import React from 'react';
import PropTypes from 'prop-types';
import StyledHeading, { Button } from './StyledHeading';
import Box from '../../Box';
import Title from './Title';
import BackButton from './BackButton';
import RightButton from './RightButton';

const Heading = ({ children }) => {
  let backButton = null;
  let title = null;
  const rightButtons = [];

  if (!children) throw new Error('Heading needs at least one child');

  const defineComponent = child => {
    if (child.type.displayName === Title.displayName) title = child;
    if (child.type.displayName === BackButton.displayName) backButton = child;
    if (child.type.displayName === RightButton.displayName)
      rightButtons.push(child);
  };

  if (Array.isArray(children)) {
    children.forEach(child => defineComponent(child));
  } else {
    defineComponent(children);
  }

  return (
    <StyledHeading>
      {backButton || <Button />}
      {title || <Box w="100%" />}
      <Box display="flex" justify-content="space-between" alignItems="center">
        {rightButtons.length > 0 ? rightButtons : <Button />}
      </Box>
    </StyledHeading>
  );
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Heading.defaultProps = {};

export default Heading;
