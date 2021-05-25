import { useQuery } from '@apollo/client';

import './main.css';

import Header from '../../components/header';
import groupInfo from "../../queries/group-info";
import GroupList from "../../components/group-list";

function Main() {
    const username = localStorage.getItem('username');
    const { loading, error, data } = useQuery(groupInfo, {
        variables: {
            username: username,
        }
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
        <div>
            <Header />
            <h3>{data.user.groupCount} Groups</h3>
            <div className="main__groups">
                <GroupList />
            </div>
        </div>
    )
}

export default Main;