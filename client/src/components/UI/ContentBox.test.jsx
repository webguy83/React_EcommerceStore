import React from "react";
import ContentBox from "./ContentBox";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("content box tests", () => {
  let container = null;

  beforeEach(() => {
    container = render(
      <ContentBox title="Canada" textContent="Shop for Photos!" />
    );
  });

  it("should render without crashing", () => {
    const { asFragment } = container;
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render heading text", () => {
    const { getByTestId } = container;
    expect(getByTestId("title")).toHaveTextContent(/^Canada$/);
  });

  it("should render text content text", () => {
    const { getByTestId } = container;
    expect(getByTestId("textContent")).toHaveTextContent(/^Shop for Photos!$/);
  });
});

// describe("css testing", () => {
//   it("should add new custom CSS to styled component", () => {
//     const { getByTestId } = render(
//       <ContentBox
//         title="Canada"
//         textContent="Shop for Photos!"
//         style={{
//           fontWeight: "bold"
//         }}
//       />
//     );
//     expect(getByTestId("content")).toHaveStyleRule("font-weight", "bold");
//   });
// });
