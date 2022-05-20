import React, { useRef } from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import { CheckedFull } from '@Gympass/yoga-icons';
import { advanceBy, advanceTo, clear } from 'jest-date-mock';
import { ThemeProvider, Snackbar } from '../..';
import { Button } from '../../Card/web/PlanCard/Actions';

const FRAME_TIME = 10;

global.requestAnimationFrame = cb => {
  setTimeout(cb, FRAME_TIME);
};

function advanceOneFrame() {
  advanceBy(FRAME_TIME);
  jest.advanceTimersByTime(FRAME_TIME);
}

/**
 * Setup tests for time travel (start date)
 */
function setup(startDate = '') {
  advanceTo(new Date(startDate));
}

/**
 * Travel a specific amount of time (in ms) inside a test
 */
function travel(time = FRAME_TIME) {
  const framesToRun = time / FRAME_TIME;

  for (let i = 0; i < framesToRun; i++) {
    advanceOneFrame();
  }
}

/**
 * End test with time travel
 */
function teardown() {
  clear();
}

describe('<Snackbar />', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    setup();
  });

  afterEach(() => {
    teardown();
  });

  afterAll(() => {
    jest.useRealTimers();
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

    travel(500);

    expect(container).toMatchSnapshot();
  });

  it('should close snackbar and call onAction prop when the action button is pressed', () => {
    const action = jest.fn();

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
            onAction={action}
            variant="informative"
          />
        </ThemeProvider>
      );
    };
    const { getByText } = render(<Component />);

    fireEvent.press(getByText('Tap to open snackbar'));

    travel(500);

    fireEvent.press(getByText('Action'));

    expect(action).toHaveBeenCalled();
  });

  fit('should hide snackbar when the close the function is called', () => {
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
          <Button
            onPress={() => {
              snackbarRef.current.close();
            }}
          >
            Tap to close snackbar
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

    const { container, getByText, getByTestId } = render(<Component />);

    fireEvent.layout(getByTestId('snackbar-children-view'), {
      nativeEvent: { layout: { height: '400' } },
    });

    fireEvent.press(getByText('Tap to open snackbar'));

    travel(500);

    fireEvent.press(getByText('Tap to close snackbar'));

    travel(500);

    expect(container).toMatchSnapshot();
  });
});
