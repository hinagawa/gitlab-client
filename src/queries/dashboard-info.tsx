import { gql } from "@apollo/client";

const pipeline = gql`
query group_id($fullPath: ID! ) {
    project(fullPath:$fullPath){
      pipelines{
        nodes {
          active,
          commitPath,
          complete,
          user{
            name
          
          }
          
      }
    }
      }
}
`

export default pipeline;