import { gql } from '@apollo/client'

export const CREATE_POST = gql`
    mutation createPost($input: PostInput){
        createPost(input: $input)
    }
`

export const DELETE_POST = gql`
    mutation deletePost($id: ID!){
        deletePost(id: $id)
    }
`

export const UPDATE_POST = gql`
    mutation updatePost($id: ID!, $input: PostInput){
        updatePost(id: $id, input: $input)
    }
`