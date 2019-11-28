import styled from 'styled-components';
import { Link } from 'gatsby';

const Tab = styled(Link).attrs({
  activeClassName: 'active',
  partiallyActive: true,
})(
  ({
    theme: {
      yoga: {
        colors: { primary, gray },
      },
    },
  }) =>
    `
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  color: ${gray[3]};
  border-top: 2px solid transparent;

  font-size: 12px;

  &.active {
    border-top-color: ${primary[3]};
    color: ${primary[3]};

    svg {
      fill: ${primary[3]};
    }
  }

  svg { 
    width: 32px;
    height: 32px;
    margin-bottom: 4px;
    fill: ${gray[3]};
  }
`,
);

export default Tab;
