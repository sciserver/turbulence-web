import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { env } from './config/environment';
import { ACCESS_TOKEN_KEY } from './src/utils/keys';


const httpLink = createHttpLink({
  uri: env.GRAPHQL_BASE_URL
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem(ACCESS_TOKEN_KEY);
  return {
    headers: {
      ...headers,
      authorization: token || ''
    }
  }
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;