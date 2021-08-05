import React from 'react';
import { arrayOf, shape } from 'prop-types';
import styled from 'styled-components';

import Tag from '../../Tag';

const TagStyled = styled(Tag.Informative)`
  margin-right: 4px;
`;

const Wrapper = styled.ScrollView`
  display: flex;
  flex-direction: row;

  ${({
    theme: {
      yoga: {
        spacing: { xxsmall },
      },
    },
  }) => `
  margin-top: ${xxsmall}px;
  `}
`;

const ResultTags = ({ items }) => {
  return (
    <Wrapper horizontal showsHorizontalScrollIndicator={false}>
      {items.map(({ ...props }) => {
        return <TagStyled small {...props} />;
      })}
    </Wrapper>
  );
};

ResultTags.displayName = 'Result.Tags';

ResultTags.propTypes = {
  items: arrayOf(shape({})),
};

ResultTags.defaultProps = {
  items: [],
};

export default ResultTags;
