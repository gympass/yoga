import React, { useState } from 'react';
import styled from 'styled-components';
import { string, node } from 'prop-types';
import { ChevronDown } from '@gympass/yoga-icons';
import { paddings } from '@gympass/yoga-system';
import { Text } from '@gympass/yoga';

const Accordion = ({ title, subtitle, children }) => {
  const [open, setOpen] = useState(false);

  const AccordionWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid #d7d7e0;

    ${({
      theme: {
        yoga: { spacing },
      },
    }) => `
      padding: ${spacing.large}px ${spacing.medium}px;
    `}

    ${paddings}
  `;

  const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Title = styled.div``;

  const AccordionContent = styled.div``;

  const ArrowWrapper = styled.div`
    ${({ isOpen }) => isOpen && 'transform: rotate(180deg);'}
  `;

  return (
    <AccordionWrapper>
      <Header>
        <Title>
          <Text>{title}</Text>

          <Text color="deep">{subtitle}</Text>
        </Title>

        <ArrowWrapper isOpen={open}>
          <ChevronDown
            stroke="#D8385E"
            width={24}
            height={24}
            onClick={() => {
              setOpen(!open);
            }}
          />
        </ArrowWrapper>
      </Header>

      {open && <AccordionContent>{children}</AccordionContent>}
    </AccordionWrapper>
  );
};

Accordion.propTypes = {
  title: string.isRequired,
  subtitle: string,
  children: node.isRequired,
};

Accordion.defaultProps = {
  subtitle: undefined,
};

export default Accordion;
