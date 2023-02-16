import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
})

export const getShips = () =>
  client
    .query({
      query: gql`
        query Ships {
          ships {
            name
            type
            image
            id
          }
        }
      `,
    })
    .then((res) => res.data.ships)
