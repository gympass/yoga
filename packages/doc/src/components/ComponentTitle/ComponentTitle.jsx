import React from 'react';
import styled from 'styled-components';
import { node, bool } from 'prop-types';
import DescriptionQuery from './DescriptionQuery';

const Heading = styled.h1`
  display: flex;
  align-items: center;
  word-break: break-all;

  margin: 0;

  font-size: 48px;
  font-weight: 300;

  + p {
    margin-top: 10px;

    color: #6b6b78;
    font-weight: 300;
  }

  @media (max-width: 900px) {
    font-size: 26px;
  }
`;

export const SubHeading2 = styled.h2`
  display: flex;
  align-items: center;
  margin: 45px 0 20px;

  color: #333;
  font-size: 30px;
  font-weight: 300;

  &:hover {
    .anchor {
      display: flex;
    }
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }
`;
export const SubHeading3 = styled(SubHeading2).attrs({
  as: 'h3',
})`
  font-size: 22px;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const SubHeading4 = styled(SubHeading2).attrs({
  as: 'h4',
})`
  font-size: 20px;

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.8;

  @media (max-width: 900px) {
    font-size: 14px;
  }
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
      {description && <Paragraph>{description}</Paragraph>}
    </>
  );
};

ComponentTitle.propTypes = {
  children: node.isRequired,
  prefix: bool.isRequired,
};

export default ComponentTitle;
