import { gql } from '@apollo/client'

export const DELETES_DONATIONS = gql`
   mutation deletesDonations{
      deletesDonations
   }
`

export const DELETE_DONATION = gql`
   mutation deleteDonation($id: ID!){
      deleteDonation(id: $id)
   }
`

export const CREATE_DONATION = gql`
 mutation createDonation($input: DonationInput){
    createDonation(input: $input)
 }
`
