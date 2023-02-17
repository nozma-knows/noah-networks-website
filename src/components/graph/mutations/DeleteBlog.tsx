import { gql } from "@apollo/client";

const deleteBlogDocument = gql`
  mutation DeleteBlog($id: String!) {
    deleteBlog(id: $id) {
      id
    }
  }
`;

export default deleteBlogDocument;
