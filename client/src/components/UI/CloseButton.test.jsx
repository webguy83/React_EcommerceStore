import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CloseButton from "./CloseButton";
import "jest-styled-components";

afterEach(cleanup);

describe("Close Button default tests", () => {
  it("should render without crashing", () => {
    const { asFragment } = render(<CloseButton closeElm={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the X symbol for close button", () => {
    const { getByTestId } = render(<CloseButton closeElm={() => {}} />);
    expect(getByTestId("container")).toHaveTextContent(/^×$/);
  });
});
