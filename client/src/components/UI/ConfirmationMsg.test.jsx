import React from "react";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import ConfirmationMsg from "./ConfirmationMsg";

afterEach(cleanup);

const defaultStatusMessage = {
  success: "You have submitted without error!",
  fail: "You have failed!",
  sending: "Loading..."
};

describe("confirmation box - success messages", () => {
  it("should render without crashing", () => {
    const { asFragment } = render(
      <ConfirmationMsg status="success" statusMessages={defaultStatusMessage} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render success message when successful", () => {
    const { getByTestId } = render(
      <ConfirmationMsg status="success" statusMessages={defaultStatusMessage} />
    );
    expect(getByTestId("statusMsg")).toHaveTextContent(
      /^You have submitted without error!$/
    );
  });

  it("should render fail message when failed", () => {
    const { getByTestId } = render(
      <ConfirmationMsg status="fail" statusMessages={defaultStatusMessage} />
    );
    expect(getByTestId("statusMsg")).toHaveTextContent(/^You have failed!$/);
  });

  it("should render loading message when loading", () => {
    const { getByTestId } = render(
      <ConfirmationMsg status="sending" statusMessages={defaultStatusMessage} />
    );
    expect(getByTestId("statusMsg")).toHaveTextContent(/^Loading...$/);
  });
});

describe("confirmation box - status background colour", () => {
  it("should set background colour of status bar to green when success", () => {
    const { getByTestId } = render(
      <ConfirmationMsg status="success" statusMessages={defaultStatusMessage} />
    );
    expect(getByTestId("container")).toHaveStyleRule(
      "background-color",
      "var(--success)"
    );
  });

  it("should set background colour of status bar to red when failed", () => {
    const { getByTestId } = render(
      <ConfirmationMsg status="fail" statusMessages={defaultStatusMessage} />
    );
    expect(getByTestId("container")).toHaveStyleRule(
      "background-color",
      "var(--fail)"
    );
  });

  it("should set background colour of status bar to yellow when loading", () => {
    const { getByTestId } = render(
      <ConfirmationMsg status="sending" statusMessages={defaultStatusMessage} />
    );
    expect(getByTestId("container")).toHaveStyleRule(
      "background-color",
      "var(--warning)"
    );
  });
});
