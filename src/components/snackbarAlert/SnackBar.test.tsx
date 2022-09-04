import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import SnackbarAlert from "./SnackbarAlert";

describe("renders the snackbar alert elements", () => {
  test("should show the alert message if 'show' is true", () => {
    render(
      <SnackbarAlert
        message="success"
        status="success"
        show={true}
        onClose={jest.fn()}
      />
    );
    const messageEl = screen.getByText("success");
    expect(messageEl).toBeInTheDocument();
  });
  test("should hide the alert message if 'show' is false", () => {
    render(
      <SnackbarAlert
        message="success"
        status="success"
        show={false}
        onClose={jest.fn()}
      />
    );
    const messageEl = screen.queryByText("success");
    expect(messageEl).not.toBeInTheDocument();
  });
});
describe("renders the snackbar alert funtionality", () => {
  test("should call the 'onClose' method if the alert close button is clicked", () => {
    const onClickMock = jest.fn();
    render(
      <SnackbarAlert
        message="success"
        status="success"
        show={true}
        onClose={onClickMock}
      />
    );
    const snackbarEl = screen.getByRole("presentation");
    expect(snackbarEl).toBeInTheDocument();
    const closeButtonEl = snackbarEl.getElementsByTagName("button");
    expect(closeButtonEl).toHaveLength(1);
    fireEvent.click(closeButtonEl[0]);
    expect(onClickMock).toHaveBeenCalledTimes(1);
    expect(onClickMock).toHaveBeenCalled();
  });
});
