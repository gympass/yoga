import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { ThemeProvider, Input } from '../..';

const numbersFormats = [
  {
    country: 'BR',
    base: '+5511959112508',
    expected: '+55 (11) 959112508',
  },
  {
    country: 'US',
    base: '+12025550134',
    expected: '+1 (202) 555-0134',
  },
  {
    country: 'PT',
    base: '+351911803423',
    expected: '+351 911 803 423',
  },
];

describe('<Input.Phone />', () => {
  describe('Snapshots', () => {
    it('should match with default input', () => {
      const { container } = render(
        <ThemeProvider>
          <Input.Phone />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with disabled input', () => {
      const { container } = render(
        <ThemeProvider>
          <Input.Password disabled />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with error', () => {
      const { container } = render(
        <ThemeProvider>
          <Input error="Error message" />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match with full width', () => {
      const { container } = render(
        <ThemeProvider>
          <Input.Password label="Label" full />
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Behaviour', () => {
    numbersFormats.forEach(spec => {
      it(`Should render number in ${spec.country} format according to phone value`, () => {
        const { getByDisplayValue } = render(
          <ThemeProvider>
            <Input.Phone value={spec.base} />
          </ThemeProvider>,
        );

        expect(getByDisplayValue(spec.expected)).toBeInTheDocument();
      });
    });

    it(`Should only format and show countries numbers when props is given`, () => {
      const USPhone = numbersFormats[1];

      const { queryByDisplayValue } = render(
        <ThemeProvider>
          <Input.Phone countries={['br', 'pt']} value={USPhone.base} />
        </ThemeProvider>,
      );

      expect(queryByDisplayValue(USPhone.expected)).not.toBeInTheDocument();
    });

    it(`Should return all countries validation if countries equals to empty array`, () => {
      const USPhone = numbersFormats[1];

      const { getAllByRole } = render(
        <ThemeProvider>
          <Input.Phone countries={[]} value={USPhone.base} />
        </ThemeProvider>,
      );

      fireEvent.click(getAllByRole('button')[0]);
      expect(getAllByRole('option').length).toBe(13);
    });

    it(`Should call onblur event`, () => {
      const USPhone = numbersFormats[1];
      const onBlur = jest.fn();
      const { getAllByRole } = render(
        <ThemeProvider>
          <Input.Phone onBlur={onBlur} countries={[]} value={USPhone.base} />
        </ThemeProvider>,
      );

      const inputPhone = getAllByRole('textbox')[0];

      fireEvent.blur(inputPhone);

      expect(onBlur).toHaveBeenCalled();
    });

    it('should prefix the phone number with newly selected country dial code', async () => {
      const { getByRole, getByText, getByDisplayValue } = render(
        <ThemeProvider>
          <Input.Phone defaultCountry="us" />
        </ThemeProvider>,
      );

      await waitFor(() => {
        fireEvent.click(getByRole('button'));
        fireEvent.click(getByText('Portugal'));
      });

      expect(getByDisplayValue('+351')).toBeInTheDocument();
    });
  });
});
