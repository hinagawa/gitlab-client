import { gql } from '@apollo/client';

const profile = gql`
query ($username: String!) {
    user(username:$username){
        name,
        avatarUrl
    }
}`;

export default profile;



