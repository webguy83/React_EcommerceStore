import Spinner from "./Spinner";
import React from "react";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

describe("default tests for loader", () => {
  afterEach(cleanup);

  it("should render Spinner without errors", () => {
    const { asFragment } = render(<Spinner />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the loader class attached to the div", () => {
    const { getByTestId } = render(<Spinner />);
    expect(getByTestId("loader").className).toBe("loader");
  });
});
