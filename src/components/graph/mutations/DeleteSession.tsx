import { gql } from "@apollo/client";

// const deleteSessionDocument = gql`
//   mutation logout($input: LogoutInput!) {
//     logout(input: $input) {
//       id
//       token
//     }
//   }
// `;
const deleteSessionDocument = gql`
  mutation logout {
    logout {
      id
      token
    }
  }
`;

export default deleteSessionDocument;
