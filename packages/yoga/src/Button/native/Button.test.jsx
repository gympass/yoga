import React from 'react';

import { render, fireEvent, toJSON } from '@testing-library/react-native';
import { Booking } from '@gympass/yoga-icons';

import ThemeProvider from '../../Theme';
import Button from '..';

describe('<Button />', () => {
  describe('Snapshots', () => {
    describe('primary buttons', () => {
      describe('Without props', () => {
        it('should match snapshot with default Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button />
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

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button icon={Booking} />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text icon={Booking} />
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

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text inverted />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button inverted icon={Booking} />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text inverted icon={Booking} />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with icon Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon icon={Booking} inverted />
            </ThemeProvider>,
          );
          expect(container).toMatchSnapshot();
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

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text small />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button small icon={Booking} />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text small icon={Booking} />
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

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text full />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button full icon={Booking} />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text full icon={Booking} />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });
      });

      describe('With large prop', () => {
        it('should match snapshot icon Button with large prop', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon icon={Booking} large />
            </ThemeProvider>,
          );
          expect(container).toMatchSnapshot();
        });
      });
    });

    describe('secondary buttons', () => {
      describe('Without props', () => {
        it('should match snapshot with default Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with link Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Link secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with icon Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon icon={Booking} secondary />
            </ThemeProvider>,
          );
          expect(toJSON(container)).toMatchSnapshot();
        });
      });

      describe('With inverted prop', () => {
        it('should match snapshot with default Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button inverted secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text inverted secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button inverted icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text inverted icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with icon Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon inverted icon={Booking} secondary />
            </ThemeProvider>,
          );
          expect(toJSON(container)).toMatchSnapshot();
        });
      });

      describe('With small prop', () => {
        it('should match snapshot with default Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button small secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text small secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button small icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text small icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });
      });

      describe('With full prop', () => {
        it('should match snapshot with default Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button full secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text full secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button full icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text full icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });
      });

      describe('With large prop', () => {
        it('should match snapshot icon Button with large prop', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon large icon={Booking} secondary />
            </ThemeProvider>,
          );
          expect(container).toMatchSnapshot();
        });
      });
    });

    describe('disabled buttons', () => {
      describe('With disabled prop', () => {
        it('should match snapshot with default Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button disabled />
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

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button disabled icon={Booking} />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text disabled icon={Booking} />
            </ThemeProvider>,
          );

          expect(toJSON(container)).toMatchSnapshot();
        });

        it('should match snapshot with icon Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon disabled icon={Booking} />
            </ThemeProvider>,
          );
          expect(toJSON(container)).toMatchSnapshot();
        });
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

    it('should call onPress function when press on Button.Icon', () => {
      const onPressMock = jest.fn();
      const { getByRole } = render(
        <ThemeProvider>
          <Button.Icon onPress={onPressMock} icon={Booking} />
        </ThemeProvider>,
      );

      fireEvent.press(getByRole('button'));

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
