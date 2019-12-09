import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import DescriptionQuery from './DescriptionQuery';

const Heading = styled.h1`
  display: flex;
  align-items: center;
  word-break: break-all;
`;

const getMetaData = isComponent => {
  if (!isComponent) {
    return {};
  }
  const {
    allComponentMetadata: { edges },
  } = DescriptionQuery();

  const filteredEdges = edges.filter(({ node: { displayName } }) => {
    const [, component, compound = ''] = window.location.pathname
      .split('/')
      .filter(l => l);

    const componentName = `${component}${
      compound === 'default' ? '' : compound
    }`;

    return (
      displayName.replace('.', '').toLowerCase() === componentName.toLowerCase()
    );
  });

  const [
    {
      node: {
        description: { text: description },
      },
    },
  ] = filteredEdges;

  return { description };
};

const ComponentTitle = ({ children = '' }) => {
  const isComponent =
    typeof window !== 'undefined' &&
    window.location.href.search(/components\/.+/) > -1;

  const { description = '' } = getMetaData(isComponent);

  return (
    <>
      <Heading>{children}</Heading>
      {isComponent && <p>{description}</p>}
    </>
  );
};

ComponentTitle.propTypes = {
  children: node.isRequired,
};

export default ComponentTitle;
