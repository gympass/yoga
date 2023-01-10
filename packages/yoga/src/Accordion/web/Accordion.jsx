import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { string, node, bool } from 'prop-types';
import { ChevronDown } from '@gympass/yoga-icons';
import { Text, Divider } from '@gympass/yoga';

const Accordion = ({ title, subtitle, children, disabled, expanded, testId }) => {
  const [open, setOpen] = useState(expanded);

  const AccordionWrapper = styled.div`
    border: none;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    z-index: 1;

    ${({
      theme: {
        yoga: {
          colors: { white, elements },
        },
      },
    }) => {
      return `
      background: ${disabled ? elements.backgroundAndDisabled : white}
    `;
    }}

    hr {
      bottom: 0;
      left: 0;
      margin: 0;
      position: absolute;
      z-index: -1;
    }
  `;

  const Header = styled.button`
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    width: 100%;

    ${({
      theme: {
        yoga: {
          components: { accordion },
        },
      },
    }) => {
      return `
      padding: ${
        subtitle
          ? `${accordion.padding.standard}px`
          : `${accordion.padding.large}px ${accordion.padding.standard}px`
      };
    `;
    }}

    &:focus-visible {
      ${({
        theme: {
          yoga: {
            colors: { elements },
          },
        },
      }) => {
        return `
        background: ${elements.backgroundAndDisabled};

      `;
      }}
    }

    ${disabled &&
    css`
      cursor: not-allowed;
    `}
  `;

  const Title = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    text-align: start;

    ${({
      theme: {
        yoga: {
          components: { accordion },
        },
      },
    }) => {
      return `
      gap: ${subtitle ? accordion.gap.header : 0}px;
      margin: ${subtitle ? 0 : `${accordion.paddingArrow.total}px 0`};

      p {
        font-weight: ${accordion.fontWeight.title};
      }
    `;
    }}

    ${disabled &&
    css`
      ${({
        theme: {
          yoga: {
            colors: { text },
          },
        },
      }) => {
        return `
          color: ${text.secundary};
        `;
      }}
    `}
  `;

  const AccordionContent = styled.div`
    height: auto;
    max-height: ${({ isOpen }) => (isOpen ? '9999px' : '0')};
    overflow: hidden;
    transition: max-height 200ms ease-in-out;
  `;

  const ArrowWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;

    svg {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
      transition: all 200ms ease-out 0s;

      ${({
        theme: {
          yoga: {
            colors: { primary, text },
          },
        },
      }) => {
        return `
          fill: ${disabled ? text.secondary : primary};
        `;
      }}
    }

    ${({
      theme: {
        yoga: {
          components: { accordion },
        },
      },
    }) => {
      return `
      padding: ${accordion.paddingArrow.total}px;
    `;
    }}
  `;

  return (
    <AccordionWrapper data-testid={testId}>
      <Header
        disabled={disabled}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Title>
          <Text color={disabled ? 'deep' : undefined}>{title}</Text>

          <Text.Small color="deep">{subtitle}</Text.Small>
        </Title>

        <ArrowWrapper isOpen={open}>
          <ChevronDown width={24} height={24} />
        </ArrowWrapper>
      </Header>

      <AccordionContent isOpen={open}>{children}</AccordionContent>
      <Divider />
    </AccordionWrapper>
  );
};

Accordion.propTypes = {
  title: string.isRequired,
  subtitle: string,
  testId: string,
  children: node.isRequired,
  disabled: bool,
  expanded: bool,
};

Accordion.defaultProps = {
  subtitle: undefined,
  disabled: false,
  testId: undefined,
  expanded: false,
};

export default Accordion;
