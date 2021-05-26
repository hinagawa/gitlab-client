import { gql } from "@apollo/client";

const members = gql`
query($fullPath: ID!) {
    project(fullPath:$fullPath) {
      projectMembers {
        nodes {
          accessLevel{
            stringValue
          },
          user{
            name,
            avatarUrl
          }
        }
      }
    }
  }
`
export default members;