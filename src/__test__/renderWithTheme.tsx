import { ThemeProvider } from "@emotion/react";
import theme from "~/lib/theme";
import { render, RenderOptions } from "@testing-library/react";

function MockTheme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const renderWithTheme = (ui: React.ReactElement, options?: Omit<RenderOptions, "queries">) =>
  render(<MockTheme>{ui}</MockTheme>, options);

export { MockTheme, renderWithTheme };
