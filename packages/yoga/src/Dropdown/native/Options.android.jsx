import React from 'react';
import styled from 'styled-components';
import { func, arrayOf, string, shape, number, oneOfType } from 'prop-types';
import { ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Text, List } from '@gympass/yoga';

const Option = styled(List.Item)`
  ${({
    isSelected,
    theme: {
      yoga: {
        baseFont,
        components: { dropdown },
      },
    },
  }) => `
    padding:
      ${dropdown.backdrop.content.option.padding.top}px 
      ${dropdown.backdrop.content.option.padding.right}px 
      ${dropdown.backdrop.content.option.padding.bottom}px 
      ${dropdown.backdrop.content.option.padding.left}px;

    border-bottom-width: ${dropdown.option.border.width}px;
    background-color: ${
      isSelected ? `${dropdown.hover.option.backgroundColor}` : 'transparent'
    }; 
  
    font-family: ${baseFont.family};
    font-size: ${dropdown.option.font.size}px;
    line-height: ${dropdown.option.font.lineHeight}px;
    font-weight: ${
      isSelected
        ? `${dropdown.selected.option.font.weight}`
        : `${dropdown.option.font.weight}`
    }; 
    color: ${
      isSelected
        ? `${dropdown.selected.option.font.color}`
        : `${dropdown.option.font.color}`
    };
  `}
`;

const Options = ({ options, selectedOption, onSelect }) => (
  <ScrollView contentContainerStyle={{ width: '100%', height: 60 * 3.6 }}>
    <List
      data={options.map(item => item)}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableWithoutFeedback onPress={() => onSelect(item)}>
          <Option
            key={item.value}
            isSelected={selectedOption && selectedOption.value === item.value}
          >
            <Text>{item.label}</Text>
          </Option>
        </TouchableWithoutFeedback>
      )}
    />
  </ScrollView>
);

const optionShape = {
  label: string,
  value: oneOfType([string, number]),
};

Options.propTypes = {
  options: arrayOf(shape(optionShape)).isRequired,
  selectedOption: shape(optionShape),
  onSelect: func,
};

Options.defaultProps = {
  selectedOption: null,
  onSelect: () => {},
};

export default Options;
