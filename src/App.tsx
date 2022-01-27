import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import theme from "./lib/theme";
import Router from "./pages/Router";
import "~/styles/global.css";
import apolloClient from "./lib/ApolloClient";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
