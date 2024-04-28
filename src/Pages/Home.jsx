import { Link } from "react-router-dom";

function Home() {
    return (
    <div className="App">
        <Link to="/home" style={{ textDecoration: 'none' }}>
            <div id="home" ></div>
        </Link>
    </div>)
}

export default (Home)