import React from 'react';
import './main.css';
import Header from '../../components/header';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h3>3 Groups</h3>

                <hr></hr>
                <div className="main__groups">
                    <div>
                        <h2>Group 1</h2>
                        <a>Private</a>
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



}

export default Main;