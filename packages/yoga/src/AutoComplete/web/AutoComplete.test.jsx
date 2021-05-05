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
    it('should filter the options', () => {
      const { container, getByDisplayValue } = render(
        <ThemeProvider>
          <AutoComplete value="secon" options={['first', 'second', 'third']} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByDisplayValue('secon'));

      expect(container.querySelector('ul').firstChild.textContent).toBe(
        'second',
      );
    });

    it('should close options list when clean button is clicked', () => {
      const { container, getByDisplayValue, getByRole } = render(
        <ThemeProvider>
          <AutoComplete value="secon" options={['first', 'second', 'third']} />
        </ThemeProvider>,
      );

      fireEvent.focus(getByDisplayValue('secon'));

      fireEvent.click(getByRole('button'));

      expect(container.querySelector('ul')).toBe(null);
    });
  });

  describe('Event listeners', () => {
    it('should call onChangeMock', () => {
      const onChangeMock = jest.fn();
      const onCleanMock = jest.fn();
      const onSelectMock = jest.fn();

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
      expect(onSelectMock).not.toHaveBeenCalled();
      expect(onCleanMock).not.toHaveBeenCalled();
    });

    it('should call onCleanMock', () => {
      const onCleanMock = jest.fn();
      const onSelectMock = jest.fn();
      const onChangeMock = jest.fn();

      const { getByDisplayValue, getByRole } = render(
        <ThemeProvider>
          <AutoComplete
            value="New"
            options={['New York']}
            onClean={onCleanMock}
            onSelect={onSelectMock}
            onChange={onChangeMock}
          />
        </ThemeProvider>,
      );

      fireEvent.focus(getByDisplayValue('New'));
      fireEvent.click(getByRole('button'));

      expect(onCleanMock).toHaveBeenCalledWith('');
      expect(onSelectMock).not.toHaveBeenCalled();
      expect(onChangeMock).toHaveBeenCalled();
    });

    it('should call onSelectMock', () => {
      const onSelectMock = jest.fn();
      const onCleanMock = jest.fn();
      const onChangeMock = jest.fn();

      const { getByDisplayValue, getByRole } = render(
        <ThemeProvider>
          <AutoComplete
            value="New"
            options={['New York']}
            onSelect={onSelectMock}
            onClean={onCleanMock}
            onChange={onChangeMock}
          />
        </ThemeProvider>,
      );

      fireEvent.focus(getByDisplayValue('New'));
      fireEvent.click(getByRole('option'));

      expect(onSelectMock).toHaveBeenCalledWith('New York');
      expect(onCleanMock).not.toHaveBeenCalled();
      expect(onChangeMock).toHaveBeenCalled();
    });
  });
});
