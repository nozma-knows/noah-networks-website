import { gql } from "@apollo/client";

const deleteProjectDocument = gql`
  mutation DeleteProject($id: String!) {
    deleteProject(id: $id) {
      id
    }
  }
`;

export default deleteProjectDocument;
