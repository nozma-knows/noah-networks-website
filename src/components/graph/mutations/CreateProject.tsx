import { gql } from "@apollo/client";

export const createProjectDocument = gql`
  mutation CreateProject($input: ProjectInput!) {
    createProject(input: $input) {
      id
      createdAt
      updatedAt
      authorId
      website
      github
      category
      name
      title
      content
    }
  }
`;

export default createProjectDocument;
