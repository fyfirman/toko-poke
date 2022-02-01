import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import theme from "./lib/theme";
import Router from "./pages/Router";
import "~/styles/global.css";
import apolloClient from "./lib/ApolloClient";
import { MyPokemonProvider } from "./hooks/MyPokemonProvider";
import ErrorBoundary from "./components/templates/ErrorBoundary";

function App() {
  console.log(`process.env`, process.env);

  return (
    <ErrorBoundary>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <MyPokemonProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </MyPokemonProvider>
        </ThemeProvider>
      </ApolloProvider>
    </ErrorBoundary>
  );
}

export default App;
