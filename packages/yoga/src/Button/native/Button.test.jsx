import React from 'react';
import { render, fireEvent, toJSON } from '@testing-library/react-native';
import ThemeProvider from '../../Theme';
import Button from '..';

describe('<Button />', () => {
  describe('Snapshots', () => {
    describe('Without props', () => {
      it('should match snapshot with default Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with outline Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Outline />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with text Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Text />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with link Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Link />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });
    });

    describe('With inverted prop', () => {
      it('should match snapshot with default Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button inverted />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with outline Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Outline inverted />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with text Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Text inverted />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with link Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Link inverted />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });
    });

    describe('With small prop', () => {
      it('should match snapshot with default Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button small />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with outline Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Outline small />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with text Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Text small />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });
    });

    describe('With full prop', () => {
      it('should match snapshot with default Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button full />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with outline Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Outline full />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with text Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Text full />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });
    });

    describe('With disabled prop', () => {
      it('should match snapshot with default Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button disabled />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with outline Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Outline disabled />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with text Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Text disabled />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });

      it('should match snapshot with link Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Link disabled />
          </ThemeProvider>,
        );
        expect(toJSON(container)).toMatchSnapshot();
      });
    });
  });

  describe('onPress prop', () => {
    it('should call onPress function when click on Button', () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <ThemeProvider>
          <Button onPress={onPressMock}>Button</Button>
        </ThemeProvider>,
      );

      fireEvent.press(getByText('Button'));

      expect(onPressMock).toHaveBeenCalled();
    });

    it('should call onPress function when press on Button.Outline', () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <ThemeProvider>
          <Button.Outline onPress={onPressMock}>Button.Outline</Button.Outline>
        </ThemeProvider>,
      );

      fireEvent.press(getByText('Button.Outline'));

      expect(onPressMock).toHaveBeenCalled();
    });

    it('should call onPress function when press on Button.Text', () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <ThemeProvider>
          <Button.Text onPress={onPressMock}>Button.Text</Button.Text>
        </ThemeProvider>,
      );

      fireEvent.press(getByText('Button.Text'));

      expect(onPressMock).toHaveBeenCalled();
    });

    it('should not call onPress function when press on Button disabled', () => {
      const onPressMock = jest.fn();
      const { getByText } = render(
        <ThemeProvider>
          <Button disabled onPress={onPressMock}>
            Button
          </Button>
        </ThemeProvider>,
      );

      fireEvent.press(getByText('Button'));

      expect(onPressMock).not.toHaveBeenCalled();
    });
  });
});
