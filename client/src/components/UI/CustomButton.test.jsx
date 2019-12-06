import React from "react";
import CustomButton from "./CustomButton";
import "jest-styled-components";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("default tests for CustomButton", () => {
  afterEach(cleanup);

  it("should render without errors", () => {
    const { asFragment } = render(<CustomButton />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with a value specified", () => {
    const { getByTestId } = render(<CustomButton value="MyButton" />);
    expect(getByTestId("container")).toHaveTextContent(/^MyButton$/);
  });

  it("should be a submit button type when specified", () => {
    const { getByTestId } = render(<CustomButton type="submit" />);
    expect(getByTestId("container").type).toBe("submit");
  });

  it("should show a google colour for google sign in", () => {
    const { getByTestId } = render(<CustomButton google={true} />);
    expect(getByTestId("container")).toHaveStyleRule(
      "background-color",
      "#4285f4"
    );
  });

  it("should show a default colour of black for the button", () => {
    const { getByTestId } = render(<CustomButton google={false} />);
    expect(getByTestId("container")).toHaveStyleRule(
      "background-color",
      "var(--prim)"
    );
  });
});
