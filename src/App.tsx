import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import theme from "./lib/theme";
import Router from "./pages/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
