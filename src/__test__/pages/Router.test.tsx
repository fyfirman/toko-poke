import { BrowserRouter } from "react-router-dom";
import Router from "~/pages/Router";
import { renderWithTheme } from "../renderWithTheme";

describe("Router", () => {
  it("Router rendered properly", () => {
    const { container } = renderWithTheme(
      <BrowserRouter>
        <Router />
      </BrowserRouter>,
    );

    expect(container.firstChild?.hasChildNodes()).toBeTruthy();
  });
});
