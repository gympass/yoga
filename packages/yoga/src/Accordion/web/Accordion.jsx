import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { string, node, bool } from 'prop-types';
import { ChevronDown } from '@gympass/yoga-icons';
import { Text } from '@gympass/yoga';
import Divider from '../../Divider';

const Accordion = ({ title, subtitle, children, disabled }) => {
  const [open, setOpen] = useState(false);

  const AccordionWrapper = styled.div`
    width: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    position: relative;

    ${({
      theme: {
        yoga: {
          colors: { white },
        },
      },
    }) => {
      return `
      background: ${white}
    `;
    }}

    hr {
      position: absolute;
      left: 0;
      bottom: 0;
      margin: 0;
    }
  `;

  const Header = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border: none;
    background-color: transparent;

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

    &:focus {
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
    `}
  `;

  const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${({
      theme: {
        yoga: {
          components: { accordion },
        },
      },
    }) => {
      return `
      margin: ${accordion.paddingArrow.total}px 0;
      gap: ${subtitle ? accordion.gap.header : 0}px;
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
    overflow: hidden;
    height: auto;
    transition: max-height 200ms ease-in-out;
    max-height: ${({ isOpen }) => (isOpen ? '9999px' : '0')};
  `;

  const ArrowWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      transition: all 200ms ease-out 0s;
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
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
    <AccordionWrapper>
      <Header
        disabled={disabled}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Title>
          <Text color={disabled && 'deep'}>{title}</Text>

          <Text color="deep">{subtitle}</Text>
        </Title>

        <ArrowWrapper isOpen={open}>
          <ChevronDown
            fill={disabled ? '#6B6B78' : '#D8385E'}
            width={24}
            height={24}
          />
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
  children: node.isRequired,
  disabled: bool,
};

Accordion.defaultProps = {
  subtitle: undefined,
  disabled: false,
};

export default Accordion;
