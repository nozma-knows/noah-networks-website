import { gql } from "@apollo/client";

const projectDocument = gql`
  query Project($name: String!) {
    project(name: $name) {
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
