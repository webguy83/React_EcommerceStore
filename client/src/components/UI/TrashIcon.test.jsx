import React from "react";
import TrashIcon from "./TrashIcon";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe("default styles for TrashIcon", () => {
  it("it should render with no errors", () => {
    const { asFragment } = render(<TrashIcon removeItem={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
