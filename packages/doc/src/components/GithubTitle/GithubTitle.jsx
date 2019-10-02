import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import GithubLogo from '../../images/github-logo.svg';
import DescriptionQuery from './DescriptionQuery';

const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ScaledGithubLogo = styled(GithubLogo)`
  display: flex;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  transition: all 0.3s ease-out;
  margin-top: 7px;

  path {
    fill: #333;
  }
`;

const getDescription = component => {
  const {
    allComponentMetadata: { edges },
  } = DescriptionQuery();

  const {
    node: {
      description: { text: description },
    },
  } = edges.filter(
    ({ node: parentNode }) =>
      parentNode.displayName.toLowerCase() === component.toLowerCase(),
  )[0];

  return description;
};

const GithubTitle = ({ children }) => {
  const isComponent = window.location.href.search(/components\/.+/) > -1;

  return (
    <>
      <Heading>
        {children}
        {isComponent && (
          <a
            href={`https://github.com/Gympass/design-system/blob/master/packages/design-system/src/${children}/${children}.jsx`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ScaledGithubLogo />
          </a>
        )}
      </Heading>
      {isComponent && <p>{getDescription(children)}</p>}
    </>
  );
};

GithubTitle.propTypes = {
  children: node.isRequired,
};

export default GithubTitle;
