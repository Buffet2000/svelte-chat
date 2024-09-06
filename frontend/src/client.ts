import pkg, { ApolloClient, InMemoryCache } from "@apollo/client/core";
const { createHttpLink } = pkg;

const link = createHttpLink({
  uri: 'http://localhost:3000/graphql'
})

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});

export default client;
