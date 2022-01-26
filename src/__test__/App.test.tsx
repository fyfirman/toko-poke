import { render } from "@testing-library/react";
import App from "~/App";

describe("App", () => {
  it("App rendered properly", () => {
    const { container } = render(<App />);

    expect(container.firstChild?.hasChildNodes()).toBeTruthy();
  });
});
