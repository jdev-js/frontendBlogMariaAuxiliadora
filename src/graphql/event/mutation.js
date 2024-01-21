import { gql } from "@apollo/client";

export const CREATE_EVENT = gql`
mutation createEvent($input: EventInput){
    createEvent(input: $input)
}
`

export const UPDATE_EVENT = gql`
mutation updateEvent($id: ID!, $input: EventInput){
    updateEvent(id: $id, input: $input)
}
`

export const DELETE_EVENT = gql`
mutation deleteEvent($id: ID!){
    deleteEvent(id: $id)
}
`