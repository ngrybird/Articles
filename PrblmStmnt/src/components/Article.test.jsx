import React from "react";
import Article from "./Article";
import { fireEvent, render } from "@testing-library/react";
import { articles } from "../utils/Data";

describe("<Article/>", () => {
  it("render Article component with sample data", () => {
    const { container, getAllByRole } = render(
      <Article articleData={articles[0]} />
    );
    expect(container).toMatchSnapshot();
  });
});
