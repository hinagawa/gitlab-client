import React from 'react';

import './groups-page.css';
import Header from '../../components/header';

class GroupsPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <img className="groups__img" src="https://klike.net/uploads/posts/2019-06/1559800028_35.jpg" alt="Group image"></img>
                <a className="groups__a">Group name</a>
                <div className="groups__search_select">
                    <input type="search" id="search-project" placeholder="Search by name..."></input>
                    <select>
                        <option value="" className="groups__option_def">Sort by</option>
                        <option value="name"> By name</option>
                        <option value="datae"> By date </option>
                    </select>
                </div>
                <div className="groups__project">
                    <div>
                        <img className="groups__project_img" src="https://st37.stpulscen.ru/images/product/126/871/177_big.jpg" alt="Project image"></img>
                        <h2>Project 1</h2>
                        <h2>Author</h2>
                        <h2>12-02-2021</h2>
                    </div>

                    <div>
                        <img className="groups__project_img" src="https://st37.stpulscen.ru/images/product/126/871/177_big.jpg" alt="Project image"></img>
                        <h2>Project 2</h2>
                        <h2>Author</h2>
                        <h2>12-02-2021</h2>
                    </div>
                    <div>
                        <img className="groups__project_img" src="https://st37.stpulscen.ru/images/product/126/871/177_big.jpg" alt="Project image"></img>
                        <h2>Project 3</h2>
                        <h2>Author</h2>
                        <h2>12-02-2021</h2>
                    </div>
                </div>
            </div>
        )
    }

}

export default GroupsPage;