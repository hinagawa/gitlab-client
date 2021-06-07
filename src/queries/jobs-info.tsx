import { gql } from "@apollo/client";

const jobs = gql`
query group_id($fullPath: ID! ) {
  
  project(fullPath:$fullPath){
    
    jobs{
        nodes {
          name,
     stage{
      name
    },
          status,
          refName,
          tags
          
      }
     
    }
  }
  
}
`
export default jobs;