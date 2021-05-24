import React from "react"

import './group-page.css';
import Header from "../../components/header";
class GroupPage extends React.Component {
    username = localStorage.getItem("username");
    render() {
        return (
            <>
                <Header />
                <div className="group__avatar">
                    <img src="https://happypik.ru/wp-content/uploads/2019/10/zdravstvujte32.jpg" alt="group avatar"></img>
                    <p>{this.username}</p>
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
                    <div className="group__project"></div>
                </div>
            </>
        )
    }

}

export default GroupPage;