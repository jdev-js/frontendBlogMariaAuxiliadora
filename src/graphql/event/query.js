import { gql } from '@apollo/client'

export const GET_EVENTS = gql`
query getEvents{
    getEvents{
        id
        title
        description
        imageURL
        date
        hours
        create_at
    }
}
`

export const GET_EVENT = gql`
query getEvent($id: ID!){
    getEvent(id: $id){
        title
        date
        imageURL
        description
        create_at
        hours
    }
}
`