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

const getMetaData = (isComponent, component) => {
  if (!isComponent) {
    return {};
  }
  const {
    allComponentMetadata: { edges },
    site: {
      siteMetadata: {
        github: { componentsPath },
      },
    },
  } = DescriptionQuery();

  const {
    node: {
      description: { text: description },
    },
  } = edges.filter(
    ({ node: parentNode }) =>
      parentNode.displayName.toLowerCase() === component.toLowerCase(),
  )[0];

  return { description, componentsPath };
};

const GithubTitle = ({ children = '' }) => {
  const childrenString = typeof children === 'string' ? children : '';
  const isComponent =
    typeof window !== 'undefined' &&
    window.location.href.search(/components\/.+/) > -1;

  const { description = '', componentsPath = '' } = getMetaData(
    isComponent,
    childrenString.replace('.', ''),
  );
  return (
    <>
      <Heading>
        {children}
        {isComponent && (
          <a
            href={`${componentsPath}${children.split('.')[0]}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ScaledGithubLogo />
          </a>
        )}
      </Heading>
      {isComponent && <p>{description}</p>}
    </>
  );
};

GithubTitle.propTypes = {
  children: node.isRequired,
};

export default GithubTitle;
