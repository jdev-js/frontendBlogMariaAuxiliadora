import { gql } from '@apollo/client'

export const CREATE_PARROCO = gql`
mutation createParroco($input: ParrocoInput){
    createParroco(input: $input)
}
`

export const UPDATE_PARROCO = gql`
mutation updateParroco($id: ID!,$input: ParrocoInput){
    updateParroco(id: $id, input: $input)
}
`

export const DELETE_PARROCO = gql`
mutation deleteParroco($id: ID!){
    deleteParroco(id: $id)
}
`