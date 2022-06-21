import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9jnc019y401xr0u4rhl8k/master',
  cache: new InMemoryCache()
})