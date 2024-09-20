import { gql } from "@apollo/client";

export const AUTH_APP_USER = gql`
  mutation AuthenticateAppUser($email: String!, $pwd: String!) {
    authenticateAppUser(email: $email, pwd: $pwd)
  }
`;
