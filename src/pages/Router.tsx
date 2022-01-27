import styled from "@emotion/styled";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "~/components/molecules/navbar/Navbar";
import Home from "./Home";
import MyPokemon from "./MyPokemon";
import NotFound from "./NotFound";
import PokemonDetail from "./PokemonDetail";

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.mirage};
  min-height: 100vh;
`;

/**
 * This file purpose is to maintain what page
 * to view on each url.
 */
const Router = () => {
  return (
    <Container>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route component={Home} path="/home" />
        <Route component={PokemonDetail} path="/pokemon/:id" />
        <Route component={MyPokemon} path="/my-pokemon" />
        <Route component={NotFound} path="*" />
      </Switch>
    </Container>
  );
};

export default Router;
