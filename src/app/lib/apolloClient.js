import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://abrnextjs.local/graphql", // replace with your WordPress site URL
  cache: new InMemoryCache(),
});

export default client;
