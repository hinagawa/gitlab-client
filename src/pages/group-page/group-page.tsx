import React from "react"

import './group-page.css';

import Header from "../../components/header";
import ProjectList from "../../components/project-list";

function GroupPage() {
    var username = localStorage.getItem("username");
    return (
        <>
            <Header />
            <div className="group__avatar">
                <img src="https://happypik.ru/wp-content/uploads/2019/10/zdravstvujte32.jpg" alt="group avatar"></img>
                <p>{username}</p>
            </div>
            <div className="group__inputs">
                <input type="search" placeholder="Search by name..."></input>
                <select>
                    <option>Sort by</option>
                    <option>Name</option>
                    <option>Created at</option>
                </select>
            </div>
            <div className="group__projects">
                <ProjectList />
            </div>
        </>
    )
}

export default GroupPage;