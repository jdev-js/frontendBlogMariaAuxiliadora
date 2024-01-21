import { gql } from "@apollo/client";

export const GET_DONATIONS = gql`
    query getDonations{
        getDonations{
            id
            nameDonation
            create_at
        }
    }
`