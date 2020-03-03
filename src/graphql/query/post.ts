import { gql } from "apollo-boost";
import { postFields } from "../fragments/post";

export const GET_POSTS = gql`
  query {
    posts {
      ...postFields
    }
  }
  ${postFields}
`;

export const GET_POST = gql`
  query($id: ID!) {
    post(id: $id) {
      ...postFields
    }
  }
  ${postFields}
`;
