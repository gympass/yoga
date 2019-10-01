import React from 'react';
import styled from 'styled-components';
import GithubLogo from '../../images/github-logo.svg';

const ScaledGithubLogo = styled(GithubLogo)`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  opacity: 0.5;
  transition: all 0.3s ease-out;

  path {
    fill: #333333;
  }

  &:hover {
    opacity: 1;
  }
`;

const GithubTitle = ({ children }) => {
  const isComponent = window.location.href.search(/components\/.+/) > -1;

  return (
    <h1>
      {children}
      {isComponent && (
        <a
          href={`https://github.com/Gympass/design-system/blob/master/packages/design-system/src/${children}/${children}.jsx`}
          target="_blank"
          rel="noopener noreferer"
        >
          <ScaledGithubLogo />
        </a>
      )}
    </h1>
  );
};

export default GithubTitle;
