import { gql } from '@apollo/client'

export const GET_PARROCOS = gql`
 query getParrocos{
    getParrocos{
        id
        name
        type
        imageURL
        description
        create_at
    }
 }
`

export const GET_PARROCO = gql`
query getParroco($id: ID!){
    getParroco(id: $id){
        name
        type
        imageURL
        description
        create_at
    }
}
`