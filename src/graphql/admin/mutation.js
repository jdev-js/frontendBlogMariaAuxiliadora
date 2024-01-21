import {gql} from '@apollo/client'

export const LOGIN_ADMIN = gql`
mutation loginAdmin($input: LoginAdminInput) {
    loginAdmin(input: $input) {
      name
      username
      password
    }
  }
`