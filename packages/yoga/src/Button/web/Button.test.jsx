import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider, Button } from '@gympass/yoga';

describe('<Button />', () => {
  describe('Snapshots', () => {
    describe('Without props', () => {
      it('should match snapshot with default Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button />
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

      it('should match snapshot with text Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Text />
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

      it('should match snapshot with outline Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Outline inverted />
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

      it('should match snapshot with link Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Link inverted />
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
    });

    describe('With variant prop', () => {
      it('should match snapshot with link Button', () => {
        const { container } = render(
          <ThemeProvider>
            <Button.Link variant="primary" />
            <Button.Link variant="secondary" />
          </ThemeProvider>,
        );
        expect(container).toMatchSnapshot();
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
