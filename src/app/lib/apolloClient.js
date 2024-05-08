import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://webangon.com/abr/graphql", // replace with your WordPress site URL
  cache: new InMemoryCache(),
});

export default client;
