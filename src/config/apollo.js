import { ApolloClient,InMemoryCache,HttpLink } from '@apollo/client'

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: "https://api-blog-zb0g.onrender.com/" }),
})