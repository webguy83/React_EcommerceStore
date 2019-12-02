import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddSubtractIcon from "./AddSubtractIcon";
import "jest-styled-components";

afterEach(cleanup);

describe("add and subtraction icon tests", () => {
  it("renders without crashing", () => {
    const { asFragment } = render(
      <AddSubtractIcon addIcon addOrSubtract={() => {}} disabled={false} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the + icon", () => {
    const { getByTestId } = render(
      <AddSubtractIcon
        addIcon={true}
        addOrSubtract={() => {}}
        disabled={false}
      />
    );
    expect(getByTestId("span")).toHaveTextContent(/^➕$/);
  });

  it("should render the - icon", () => {
    const { getByTestId } = render(
      <AddSubtractIcon
        addIcon={false}
        addOrSubtract={() => {}}
        disabled={false}
      />
    );
    expect(getByTestId("span")).toHaveTextContent(/^➖$/);
  });

  it("should make the - icon opacity low when disabled", () => {
    const { getByTestId } = render(
      <AddSubtractIcon
        addIcon={false}
        addOrSubtract={() => {}}
        disabled={true}
      />
    );
    expect(getByTestId("container")).toHaveStyleRule("opacity", "0.1");
  });
});
