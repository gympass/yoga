import React, { useRef } from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { CheckedFull } from '@gympass/yoga-icons';
import { ThemeProvider, Snackbar } from '../..';
import { Button } from '../../Card/web/PlanCard/Actions';

describe('<Snackbar />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  it('should match snapshot when snackbar is default', () => {
    const { container } = render(
      <ThemeProvider>
        <Snackbar message="Default snackbar." />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when have an icon and action', () => {
    const { container } = render(
      <ThemeProvider>
        <Snackbar
          message="Snackbar with an icon."
          icon={CheckedFull}
          actionLabel="Action"
          onAction={() => {}}
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when have a long text', () => {
    const { container } = render(
      <ThemeProvider>
        <Snackbar
          message="Lorem Ipsum is simply dummy text of the printing and types."
          icon={CheckedFull}
          actionLabel="Action"
          onAction={() => {}}
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when have a variant informative or attention prop', () => {
    const { container } = render(
      <ThemeProvider>
        <Snackbar
          message="Feedback Message"
          icon={CheckedFull}
          actionLabel="Action"
          onAction={() => {}}
          variant="informative"
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should show snackbar when the open function is called', () => {
    const Component = () => {
      const snackbarRef = useRef();

      return (
        <ThemeProvider>
          <Button
            onPress={() => {
              snackbarRef.current.open();
            }}
          >
            Tap to open snackbar
          </Button>
          <Snackbar
            ref={snackbarRef}
            message="Feedback Message"
            icon={CheckedFull}
            actionLabel="Action"
            onAction={() => {}}
            variant="informative"
          />
        </ThemeProvider>
      );
    };

    const { container, getByText } = render(<Component />);

    fireEvent.press(getByText('Tap to open snackbar'));

    expect(container).toMatchSnapshot();
  });
});
