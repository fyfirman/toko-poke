import React, { Suspense } from "react";
import styled from "@emotion/styled";
import { Route, Redirect, Switch } from "react-router-dom";
import Navbar from "~/components/organisms/Navbar";
import Loading from "~/components/atoms/Loading";

const Home = React.lazy(() => import("./Home"));
const MyPokemon = React.lazy(() => import("./MyPokemon"));
const PokemonDetail = React.lazy(() => import("./pokemon-detail/PokemonDetail"));

const Container = styled.div`
  min-height: 100vh;
  @media only screen and (min-width: 600px) {
    margin: auto;
    max-width: 600px;
  }
`;

/**
 * This file purpose is to maintain what page
 * to view on each url.
 */
const Router = () => {
  return (
    <Container>
      <Navbar />
      <Suspense fallback={<Loading full />}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route component={Home} path="/home" />
          <Route component={PokemonDetail} path="/pokemon/:name" />
          <Route component={MyPokemon} path="/my-pokemon" />
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};

export default Router;
