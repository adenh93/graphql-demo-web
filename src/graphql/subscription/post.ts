import { gql } from "apollo-boost";
import { postFields } from "../fragments/post";

export const NEW_POST = gql`
  subscription {
    newPost {
      ...postFields
    }
  }
  ${postFields}
`;
