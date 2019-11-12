import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import ThemeProvider from '../../ThemeProvider';
import Card from '..';

const data = {
  plan: {
    name: 'Basic',
    price: 'U$ 19.90',
    period: 'month',
    gyms: '1,239',
  },
  ribbonDefault: { label: 'Upgrade' },
  ribbonSecondary: { label: 'Upgrade', secondary: true },
};

describe('<Card />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default Card', () => {
      const { container } = render(
        <ThemeProvider>
          <Card>
            <Text>Hello World</Text>
          </Card>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });

  describe.skip('Card Plan Tests', () => {
    it('should match texts with Plan Card', () => {
      console.log(CardPlan);
      const { getByText } = render(
        <ThemeProvider>
          <Card.Plan plan={data.plan} />
        </ThemeProvider>,
      );
      expect(getByText(data.plan.name)).toBeTruthy();
      expect(getByText(data.plan.price)).toBeTruthy();
      expect(getByText(`/${data.plan.period}`)).toBeTruthy();
      expect(getByText(`${data.plan.gyms} gyms`)).toBeTruthy();
    });

    it('should match text Plan Card with ribbon default', () => {
      const { getByText } = render(
        <ThemeProvider>
          <Card.Plan plan={data.plan} ribbon={data.ribbonDefault} />
        </ThemeProvider>,
      );
      expect(getByText(data.ribbonDefault.label)).toBeTruthy();
    });

    it('should match text Plan Card with ribbon secondary', () => {
      const { getByText } = render(
        <ThemeProvider>
          <Card.Plan plan={data.plan} ribbon={data.ribbonSecondary} />
        </ThemeProvider>,
      );
      expect(getByText(data.ribbonSecondary.label)).toBeTruthy();
    });

    it('should match snapshot Plan Card with selected boolean prop', () => {
      const { container } = render(
        <ThemeProvider>
          <Card.Plan selected plan={data.plan} />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should call onCardPress function when press on Card.Plan', () => {
      const onCardPressMock = jest.fn();
      const { getByTestId } = render(
        <ThemeProvider>
          <Card.Plan
            plan={data.plan}
            onPress={onCardPressMock}
            testID="touchable"
          />
        </ThemeProvider>,
      );
      fireEvent.press(getByTestId('touchable'));
      expect(onCardPressMock).toHaveBeenCalled();
    });
  });
});
