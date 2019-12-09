import CustomInput, { shrinkText, normalText } from "./CustomInput";
import React from "react";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

describe("default tests for Custom Input", () => {
  afterEach(cleanup);

  it("should render without crashing and input as default", () => {
    const { asFragment, getByTestId } = render(
      <CustomInput
        type="text"
        name="firstName"
        handleChange={() => {}}
        value="Curtis"
        label="First Name"
        labelToInputLink="firstName"
        required
      />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(getByTestId("input").value).toBe("Curtis");
  });

  it("should include a label element if label is defined", () => {
    const { getByTestId } = render(
      <CustomInput
        type="text"
        name="firstName"
        handleChange={() => {}}
        value="Curtis"
        label="First Name"
        labelToInputLink="firstName"
        required
      />
    );
    expect(getByTestId("label")).toHaveTextContent("First Name");
  });

  it("should not include a label element if label is not defined", () => {
    const { queryByTestId } = render(
      <CustomInput
        type="text"
        name="firstName"
        handleChange={() => {}}
        value="Bob"
        required
      />
    );
    expect(queryByTestId("label")).toBeNull();
  });

  it("should render a textarea", () => {
    const { getByTestId } = render(
      <CustomInput
        type="textarea"
        name="comments"
        label="comments"
        labelToInputLink="comments"
        handleChange={() => {}}
        value="Bob is fun"
        required
      />
    );
    expect(getByTestId("textarea")).toHaveTextContent("Bob is fun");
  });
});

describe("CSS testing", () => {
  afterEach(cleanup);

  it("should shrink label text if text in value field", () => {
    const { getByTestId } = render(
      <CustomInput
        type="text"
        name="firstName"
        handleChange={() => {}}
        value="Curtis"
        label="First Name"
        labelToInputLink="firstName"
        required
      />
    );
    expect(getByTestId("label")).toHaveStyle(shrinkText[0]);
  });

  it("should not shrink label text if no text in value field", () => {
    const { getByTestId } = render(
      <CustomInput
        type="text"
        name="firstName"
        handleChange={() => {}}
        value=""
        label="First Name"
        labelToInputLink="firstName"
        required
      />
    );
    expect(getByTestId("label")).toHaveStyle(normalText[0]);
  });
});
