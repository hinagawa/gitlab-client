import { gql } from "@apollo/client";

const pipeline = gql`
query group_id($fullPath: ID! ) {
  
  project(fullPath:$fullPath){
    
  pipelines{
    nodes{
      commitPath,
      status,
      user{
        avatarUrl,
        username
      },
      duration
      
    }
  }
  }
}
`

export default pipeline;