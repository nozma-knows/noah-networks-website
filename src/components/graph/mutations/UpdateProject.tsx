import { gql } from "@apollo/client";

export const updateProjectDocument = gql`
  mutation UpdateProject($id: String!, $input: ProjectInput!) {
    updateProject(id: $id, input: $input) {
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

export default updateProjectDocument;
