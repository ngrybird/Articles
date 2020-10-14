import React from "react";
import ArticleList from "./ArticleList";
import { fireEvent, render } from "@testing-library/react";
import { articles } from "../utils/Data";

describe("<ArticleList/>", () => {
  it("render Article component with sample data", () => {
    const { container, getByText } = render(
      <ArticleList articles={articles} />
    );

    expect(
      getByText("Harry Potter and the Sorcerer’s Stone Review")
    ).toBeInTheDocument();

    expect(getByText("56")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
