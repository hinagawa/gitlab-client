import './main.css';
import Header from '../../components/header';


function Main() {
    return (
        <div>
            <Header />
            <h3>3 Groups</h3>
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

export default Main;