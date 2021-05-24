import { useQuery } from '@apollo/client';

import './main.css';
import Header from '../../components/header';
import groupInfo from "../../queries/group-info";


function Main() {
    const username = localStorage.getItem('username');
    const { loading, error, data } = useQuery(groupInfo, {
        variables: {
            username: username,
        }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(data.user);
    return (
        <div>
            <Header />
            <h3>{data.user.groupCount} Groups</h3>
            <div className="main__groups">
                <div>
                    <a href={data.user.groupMemberships.nodes[0].group.fullPath}> <h2>{data.user.groupMemberships.nodes[0].group.fullName}</h2></a>
                    <a>{data.user.groupMemberships.nodes[0].group.visibility}</a>
                </div>
                <div>
                    <h2>Group 2</h2>
                    <a>Public</a>
                </div>
                <div>
                    <h2>Group 3</h2>
                    <a>Public</a>
                </div>
            </div>
        </div>
    )
}

export default Main;