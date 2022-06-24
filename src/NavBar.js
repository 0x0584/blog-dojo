import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="nav-bar">
            <table id="blog-header">
                <tbody>
                    <tr>
                        <td id="blog-title"><Link to="/">Blog</Link></td>
                        <td id="blog-create"><Link to="/create"> New Blog </Link></td>
                    </tr>
                </tbody>
            </table>
        </nav>
    );
}

export default NavBar;