import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Home