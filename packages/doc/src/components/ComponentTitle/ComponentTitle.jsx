import React from 'react';
import styled from 'styled-components';
import { node, bool } from 'prop-types';
import DescriptionQuery from './DescriptionQuery';

const Heading = styled.h1`
  display: flex;
  align-items: center;
  word-break: break-all;
`;

const getMetaData = (isComponent, prefix) => {
  if (!isComponent) {
    return {};
  }
  const {
    allComponentMetadata: { edges },
  } = DescriptionQuery();

  const [, component, compound = ''] = window.location.pathname
    .split('/')
    .filter(path => (prefix ? path && path !== 'yoga' : path));

  const filteredEdges = edges.filter(({ node: { displayName } }) => {
    const componentName = `${component}${
      compound === 'default' ? '' : compound
    }`;

    const normalizedDisplayName = displayName.replace('.', '').toLowerCase();

    return (
      normalizedDisplayName === componentName.toLowerCase() ||
      normalizedDisplayName === compound.toLowerCase()
    );
  });

  const [currentNode] = filteredEdges;

  return currentNode ? { description: currentNode.node.description.text } : '';
};

const ComponentTitle = ({ prefix, children = '' }) => {
  const isComponent =
    typeof window !== 'undefined' &&
    window.location.href.search(/components\/.+/) > -1;

  const { description = '' } = getMetaData(isComponent, prefix);

  return (
    <>
      <Heading>{children}</Heading>
      {isComponent && <p>{description}</p>}
    </>
  );
};

ComponentTitle.propTypes = {
  children: node.isRequired,
  prefix: bool.isRequired,
};

export default ComponentTitle;
