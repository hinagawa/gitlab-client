import { useQuery } from '@apollo/client';

import './main.css';

import Header from '../../components/header';
import groupInfo from "../../queries/group-info";
import GroupList from "../../components/group-list";
import Loading from "../../components/loading";

function Main() {
    const username = localStorage.getItem('username');
    const { loading, error, data } = useQuery(groupInfo, {
        variables: {
            username: username,
        }
    });
    if (loading) return <><Loading /></>
    if (error) return <p>Error: {error.message}</p>
    return (
        <div>
            <Header />
            <h3>{data.user.groupCount} Groups</h3>
            <hr></hr>
            <div className="main__groups">
                <GroupList />
            </div>
        </div>
    )
}

export default Main;