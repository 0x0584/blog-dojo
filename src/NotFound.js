import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <p> Not Found <Link to="/"> Home Page </Link> </p>
        </div>
    )
}

export default NotFound;