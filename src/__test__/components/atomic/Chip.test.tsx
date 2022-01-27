import { screen } from "@testing-library/react";
import Chip from "~/components/atoms/Chip";
import { renderWithTheme } from "~/__test__/renderWithTheme";

describe("Chip", () => {
  it("renders content depends on children", () => {
    renderWithTheme(<Chip>content</Chip>);

    expect(screen.getByText("content")).toBeInTheDocument();
  });
});
