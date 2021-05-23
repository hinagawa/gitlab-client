import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

import token from './token';

const httpLink = {
    uri: 'https://gitlab.com/api/graphql',
    headers: {
        authorization: `Bearer ${token}`,
    },
};

const client = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: new InMemoryCache()
});

export default client;