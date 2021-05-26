import React from "react";
import { useQuery } from "@apollo/client";

import './group-page.css';

import GroupInfoId from "../../queries/group-info-by-id";
import Header from "../../components/header";
import ProjectList from "../../components/project-list";

function GroupPage() {
    var username = localStorage.getItem("username");
    var fullPath = document.location.pathname.substr(1,);
    const { loading, error, data } = useQuery(GroupInfoId, {
        variables: {
            fullPath: fullPath
        }
    })
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(data.group.avatarUrl);
    return (
        <>
            <Header />
            <div className="group__avatar">
                {
                    data.group.avatarUrl &&
                    <img src={data.group.avatarUrl} alt="group avatar">

                    </img>
                }
                  {
                    !data.group.avatarUrl &&
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/1024px-Grey_Square.svg.png" alt="group avatar">

                    </img>
                }
                <p>
                    {data.group.name}
                </p>
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