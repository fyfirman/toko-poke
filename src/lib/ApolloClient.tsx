import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // TODO: extract this to env
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

export default client;
