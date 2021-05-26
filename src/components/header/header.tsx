import React from 'react';
import { useQuery } from '@apollo/client';

import './header.css';

import userInfo from '../../queries/user-info';
import Loading from "../loading/loading";
import history from "../../const/history";

const Header = () => {
    const username = localStorage.getItem('username');
    const { loading, error, data } = useQuery(userInfo, {
        variables: {
            username: username,
        },
    });
    function quit() {
        localStorage.clear();
        history.push('/sign-in');
        window.location.reload();
    }
    if (loading) return <><Loading /></>
    if (error) return <p>Error: {error.message}</p>
    return (
        <div className="header">
            <img
                className="header__img"
                src={data.user.avatarUrl}
                alt='Avatar'
            >
            </img>
            <a href="http://localhost:3000/">
                <h4 className="header__h4">
                    {data.user.name}
                </h4>
            </a>
            <button onClick={quit}>Quit</button>
        </div>
    )
}

export default Header;