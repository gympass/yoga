import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';
import DescriptionQuery from './DescriptionQuery';

const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;
  word-break: break-all;
`;

const getMetaData = (isComponent, component) => {
  if (!isComponent) {
    return {};
  }
  const {
    allComponentMetadata: { edges },
  } = DescriptionQuery();

  const {
    node: {
      description: { text: description },
    },
  } = edges.filter(({ node: parentNode }) => {
    const path = window.location.pathname.split('/');
    const { length: len, [len - 2]: comp } = path;

    return (
      parentNode.displayName.toLowerCase() === comp.toLowerCase() ||
      parentNode.displayName.toLowerCase() === component.toLowerCase()
    );
  })[0];

  return { description };
};

const ComponentTitle = ({ children = '' }) => {
  const childrenString = typeof children === 'string' ? children : '';

  const isComponent =
    typeof window !== 'undefined' &&
    window.location.href.search(/components\/.+/) > -1;

  const { description = '' } = getMetaData(
    isComponent,
    childrenString.replace('.', ''),
  );

  return (
    <>
      <Heading>{isComponent ? `<${children} />` : children}</Heading>
      {isComponent && <p>{description}</p>}
    </>
  );
};

ComponentTitle.propTypes = {
  children: node.isRequired,
};

export default ComponentTitle;
