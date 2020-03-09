import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { ThemeProvider, AutoComplete } from '../..';

describe('<AutoComplete />', () => {
  describe('Snapshots', () => {
    it('should match with default component', () => {
      const { container } = render(
        <ThemeProvider>
          <AutoComplete />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with a full width component', () => {
      const { container } = render(
        <ThemeProvider>
          <AutoComplete full />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with options list', () => {
      const { getByDisplayValue, container } = render(
        <ThemeProvider>
          <AutoComplete value="s" options={['first', 'second']} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByDisplayValue('s'));

      expect(container).toMatchSnapshot();
    });

    it('should match with full width options list', () => {
      const { getByDisplayValue, container } = render(
        <ThemeProvider>
          <AutoComplete value="s" full options={['first', 'second']} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByDisplayValue('s'));

      expect(container).toMatchSnapshot();
    });
  });

  describe('Options list', () => {
    it('should show the list when autocomplete has a value and focus', () => {
      const { getByDisplayValue, getByText } = render(
        <ThemeProvider>
          <AutoComplete value="New" options={['New York']} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByDisplayValue('New'));
      expect(getByText('York')).toBeTruthy();
    });

    it('should filter the options', () => {
      const { container, getByDisplayValue } = render(
        <ThemeProvider>
          <AutoComplete value="second" options={['first', 'second', 'third']} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByDisplayValue('second'));

      expect(container.querySelector('ul').firstChild.textContent).toBe(
        'second',
      );
    });

    it('should close options list when clean button is clicked', () => {
      const { container, getByDisplayValue, getByRole } = render(
        <ThemeProvider>
          <AutoComplete value="second" options={['first', 'second', 'third']} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByDisplayValue('second'));

      fireEvent.click(getByRole('button'));

      expect(container.querySelector('ul')).toBe(null);
    });
  });

  describe('Event listeners', () => {
    it('should call onChangeMock', () => {
      const onChangeMock = jest.fn();

      const { getByDisplayValue } = render(
        <ThemeProvider>
          <AutoComplete
            value="New"
            options={['New York']}
            onChange={onChangeMock}
          />
        </ThemeProvider>,
      );

      fireEvent.change(getByDisplayValue('New'), { target: { value: 'a' } });

      expect(onChangeMock).toHaveBeenCalled();
    });

    it('should call onCleanMock', () => {
      const onCleanMock = jest.fn();

      const { getByDisplayValue, getByRole } = render(
        <ThemeProvider>
          <AutoComplete
            value="New"
            options={['New York']}
            onClean={onCleanMock}
          />
        </ThemeProvider>,
      );

      fireEvent.focus(getByDisplayValue('New'));
      fireEvent.click(getByRole('button'));

      expect(onCleanMock).toHaveBeenCalledWith('');
    });
  });

  describe('keyDown events', () => {
    it('should change selected item when arrow down key is pressed', () => {
      const { container, getByDisplayValue } = render(
        <ThemeProvider>
          <AutoComplete value="New" options={['New A', 'New B', 'New C']} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByDisplayValue('New'));
      fireEvent.keyDown(getByDisplayValue('New'), { key: 'ArrowDown' });
      fireEvent.keyDown(getByDisplayValue('New'), { key: 'ArrowDown' });

      expect(document.activeElement).toBe(
        container.querySelector('ul').children[1],
      );
    });

    it('should change selected item when arrow up key is pressed', () => {
      const { container, getByDisplayValue } = render(
        <ThemeProvider>
          <AutoComplete value="New" options={['New A', 'New B', 'New C']} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByDisplayValue('New'));
      fireEvent.keyDown(getByDisplayValue('New'), { key: 'ArrowDown' });
      fireEvent.keyDown(getByDisplayValue('New'), { key: 'ArrowDown' });
      fireEvent.keyDown(getByDisplayValue('New'), { key: 'ArrowUp' });

      expect(document.activeElement).toBe(
        container.querySelector('ul').children[0],
      );
    });
  });

  describe('onSelect event', () => {
    it('should select an option when click on it', () => {
      const onSelectMock = jest.fn();

      const { container, getByDisplayValue } = render(
        <ThemeProvider>
          <AutoComplete
            value="New"
            options={['New A', 'New B', 'New C']}
            onSelect={onSelectMock}
          />
        </ThemeProvider>,
      );

      fireEvent.focus(getByDisplayValue('New'));
      const { firstChild } = container.querySelector('ul');
      const selectedText = firstChild.textContent;

      fireEvent.click(firstChild);

      expect(onSelectMock).toHaveBeenCalledWith(selectedText);
    });

    it('should select an option when enter key is pressed on it', () => {
      const onSelectMock = jest.fn();

      const { getByDisplayValue } = render(
        <ThemeProvider>
          <AutoComplete
            value="New"
            options={['New A', 'New B', 'New C']}
            onSelect={onSelectMock}
          />
        </ThemeProvider>,
      );

      const input = getByDisplayValue('New');

      fireEvent.focus(input);
      fireEvent.keyDown(input, { key: 'ArrowDown' });

      const selectedOption = document.activeElement;

      fireEvent.keyDown(selectedOption, { key: 'Enter' });

      expect(onSelectMock).toHaveBeenCalledWith(selectedOption.textContent);
    });
  });
});
