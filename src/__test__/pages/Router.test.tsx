import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Router from "~/pages/Router";

describe("Router", () => {
  it("Router rendered properly", () => {
    const { container } = render(
      <BrowserRouter>
        <Router />
      </BrowserRouter>,
    );

    expect(container.firstChild?.hasChildNodes()).toBeTruthy();
  });
});
