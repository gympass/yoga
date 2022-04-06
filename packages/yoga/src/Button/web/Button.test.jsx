import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Booking, Close } from '@gympass/yoga-icons';

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

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with link Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Link />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with icon Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });
      });

      describe('With inverted prop', () => {
        it('should match snapshot with default Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button inverted />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button inverted icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline inverted />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline inverted icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text inverted />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline inverted icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with icon Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon inverted icon={Booking} />
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

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline small />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text small />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button small icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline icon={Booking} small />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text icon={Booking} small />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with icon Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon icon={Booking} small />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });
      });

      describe('With full prop', () => {
        it('should match snapshot with default Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button full />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline full />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text full />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button full icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline full icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text full icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });
      });

      describe('With disabled prop', () => {
        it('should match snapshot with default Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button disabled />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline disabled />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text disabled />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with link Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Link disabled />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button disabled icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline disabled icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text disabled icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with icon Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon disabled icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });
      });

      it('Link Button rendering as an anchor (default)', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Link href="http://www.gympass.com" target="blank">
              Link as an anchor
            </Button.Link>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
      });

      it('Link Button rendering as an button (as=button)', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Link as="button" target="blank">
              Link as an anchor
            </Button.Link>
          </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
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

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button secondary icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text secondary icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with link Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Link secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with icon Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });
      });

      describe('With inverted prop', () => {
        it('should match snapshot with default Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button inverted secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button inverted icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline inverted secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline inverted icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text inverted secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text inverted icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text inverted icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with icon Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon inverted icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });
      });

      describe('With small prop', () => {
        it('should match snapshot with default Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button small secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline small secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text small secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button small icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline icon={Booking} small secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text icon={Booking} small secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with icon Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon icon={Booking} small secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });
      });

      describe('With full prop', () => {
        it('should match snapshot with default Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button full secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline full secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text full secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button full icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline full icon={Booking} secondary />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text full icon={Booking} secondary />
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

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline disabled />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text disabled />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with link Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Link disabled />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with default Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button disabled icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with outline Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Outline disabled icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with text Button with Icon', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Text disabled icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });

        it('should match snapshot with icon Button', () => {
          const { container } = render(
            <ThemeProvider>
              <Button.Icon disabled icon={Booking} />
            </ThemeProvider>,
          );

          expect(container).toMatchSnapshot();
        });
      });
    });
  });

  describe('onClick prop', () => {
    it('should call onClick function when click on Button', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(
        <ThemeProvider>
          <Button onClick={onClickMock}>Button</Button>
        </ThemeProvider>,
      );

      fireEvent.click(getByText('Button'));

      expect(onClickMock).toHaveBeenCalled();
    });

    it('should call onClick function when click on Button.Outline', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(
        <ThemeProvider>
          <Button.Outline onClick={onClickMock}>Button.Outline</Button.Outline>
        </ThemeProvider>,
      );

      fireEvent.click(getByText('Button.Outline'));

      expect(onClickMock).toHaveBeenCalled();
    });

    it('should call onClick function when click on Button.Text', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(
        <ThemeProvider>
          <Button.Text onClick={onClickMock}>Button.Text</Button.Text>
        </ThemeProvider>,
      );

      fireEvent.click(getByText('Button.Text'));

      expect(onClickMock).toHaveBeenCalled();
    });

    it('should call onClick function when click on Button.Icon', () => {
      const onClickMock = jest.fn();
      const { getByRole } = render(
        <ThemeProvider>
          <Button.Icon icon={Close} onClick={onClickMock} />
        </ThemeProvider>,
      );

      fireEvent.click(getByRole('button'));

      expect(onClickMock).toHaveBeenCalled();
    });

    it('should not call onClick function when click on Button disabled', () => {
      const onClickMock = jest.fn();
      const { getByText } = render(
        <ThemeProvider>
          <Button disabled onClick={onClickMock}>
            Button
          </Button>
        </ThemeProvider>,
      );

      fireEvent.click(getByText('Button'));

      expect(onClickMock).not.toHaveBeenCalled();
    });
  });
});
