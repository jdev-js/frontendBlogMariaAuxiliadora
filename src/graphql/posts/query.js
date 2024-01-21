import { gql } from '@apollo/client'

export const GET_POSTS = gql`
    query getPosts($typePost: String){
        getPosts(typePost: $typePost){
            id
            title
            description
            body
            imageURL
            create_at
        }
    }
`

export const GET_POST = gql`
 query getPost($id: ID!){
    getPost(id: $id){
        title
        description
        body
        imageURL
        create_at
    }
 }
`

export const SEARCH_POSTS = gql`
 query searchPost($search: String, $typePost: String){
    searchPost(search: $search, typePost: $typePost){
        title
        description
        body
        imageURL
        create_at
    }
 }
`