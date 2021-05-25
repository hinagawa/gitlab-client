import React from 'react';
import { useQuery } from '@apollo/client';
import './header.css';

import userInfo from '../queries/user-info';

const Header = () => {
    const username = localStorage.getItem('username');
    const { loading, error, data } = useQuery(userInfo, {
        variables: {
            username: username,
        },
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
        <div className="header">
            <img className="header__img" src={data.user.avatarUrl} alt='Avatar'></img>
            <h4 className="header__h4">{data.user.name}</h4>

        </div>
    )
}

export default Header;