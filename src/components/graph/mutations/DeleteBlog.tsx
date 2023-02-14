import { gql } from "@apollo/client";

const deleteBlogDocument = gql`
  mutation DeleteBlog($title: String!) {
    deleteBlog(title: $title) {
      id
    }
  }
`;

export default deleteBlogDocument;
