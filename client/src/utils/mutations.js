import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($input: AddUserInput) {
    addUser(input: $input) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql``;

export const REMOVE_BOOK = gql``;