import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { string, node, bool } from 'prop-types';
import { ChevronDown } from '@gympass/yoga-icons';
import { Text, Divider } from '@gympass/yoga';
import Content from './Content';

const AccordionWrapper = styled.div`
  background: ${({ theme }) => theme.yoga.colors.white};
  border: none;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  z-index: 1;

  ${({
    disabled,
    theme: {
      yoga: {
        colors: { elements },
      },
    },
  }) =>
    disabled &&
    css`
      background: ${elements.backgroundAndDisabled};
    `}

  hr {
    bottom: 0;
    left: 0;
    margin: 0;
    position: absolute;
    z-index: -1;
  }
`;

const getVerticalPadding = (accordion, small) => {
  if (small) return accordion.padding.small;
  return accordion.padding.large;
};

const getHorizontalPadding = (accordion, hasHorizontalPadding) => {
  if (hasHorizontalPadding) return accordion.padding.standard;
  return accordion.padding.zero;
};

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
    small,
    hasHorizontalPadding,
  }) => {
    return `
  padding:${getVerticalPadding(accordion, small)}px ${getHorizontalPadding(
      accordion,
      hasHorizontalPadding,
    )}px;
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

  ${({ disabled }) =>
    disabled &&
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
    subtitle,
  }) => {
    return `
  gap: ${subtitle ? accordion.gap.header : 0}px;
  margin: ${subtitle ? 0 : `${accordion.paddingArrow.total}px 0`};
`;
  }}

  ${({ disabled }) =>
    disabled &&
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

  ${({
    theme: {
      yoga: {
        components: { accordion },
      },
    },
    small,
  }) =>
    small &&
    css`
      ${Content} {
        padding-bottom: ${accordion.padding.small}px;
      }
    `}

  ${({ hasHorizontalPadding }) =>
    !hasHorizontalPadding &&
    css`
      ${Content} {
        padding-left: 0;
        padding-right: 0;
      }
    `}
`;

const ArrowWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  svg {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: all 200ms ease-out 0s;

    ${({
      theme: {
        yoga: {
          colors: { primary, text },
        },
      },
      disabled,
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

const Accordion = ({
  title,
  subtitle,
  children,
  disabled,
  expanded,
  small,
  hasHorizontalPadding,
  ...props
}) => {
  const [open, setOpen] = useState(expanded);

  return (
    <AccordionWrapper disabled={disabled} {...props}>
      <Header
        disabled={disabled}
        onClick={() => {
          setOpen(o => !o);
        }}
        small={small}
        hasHorizontalPadding={hasHorizontalPadding}
      >
        <Title subtitle={subtitle}>
          {small ? (
            <Text.Small color={disabled ? 'deep' : undefined}>
              {title}
            </Text.Small>
          ) : (
            <Text.Medium
              color={disabled ? 'deep' : undefined}
              lineHeight="medium"
            >
              {title}
            </Text.Medium>
          )}

          <Text.Small color="deep">{subtitle}</Text.Small>
        </Title>

        <ArrowWrapper isOpen={open} disabled={disabled}>
          <ChevronDown width={24} height={24} />
        </ArrowWrapper>
      </Header>

      <AccordionContent
        isOpen={open}
        small={small}
        hasHorizontalPadding={hasHorizontalPadding}
      >
        {children}
      </AccordionContent>
      <Divider />
    </AccordionWrapper>
  );
};

Accordion.propTypes = {
  title: string.isRequired,
  subtitle: string,
  children: node.isRequired,
  disabled: bool,
  expanded: bool,
  small: bool,
  hasHorizontalPadding: bool,
};

Accordion.defaultProps = {
  subtitle: undefined,
  disabled: false,
  expanded: false,
  small: false,
  hasHorizontalPadding: true,
};

export default Accordion;
