import { gql } from "@apollo/client";

const projectDocument = gql`
  query Project($id: String!) {
    project(id: $id) {
      id
      authorId
      createdAt
      updatedAt
      github
      website
      category
      name
      title
      content
    }
  }
`;

export default projectDocument;
