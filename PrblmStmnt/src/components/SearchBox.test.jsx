import React from "react";
import SearchBox from "./SearchBox";
import { fireEvent, render } from "@testing-library/react";

describe("<SearchBox/>", () => {
  const callbackFn = jest.fn();
  it("render Article component with sample data", () => {
    const { container, getByText } = render(
      <SearchBox getAuthorCallback={callbackFn} />
    );
    fireEvent.click(getByText("Fetch"));
    setTimeout(() => {
      expect(callbackFn).toHaveBeenCalled();
      expect(container).toMatchSnapshot();
    }, 500);
  });
});
