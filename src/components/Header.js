import { Link } from "react-router-dom"
function Header() {
    return (
        <header>
            <div className="nav-name">
                <h1> Maxim Bleeker</h1>
            </div>

            <Link to="/">
                <div className="menu-item">
                    Home
                </div>
            </Link>
            <Link to="/projects">
                <div className="menu-item">
                    Projects
                </div>
            </Link>
            <Link to="/about">
                <div className="menu-item">
                    About
                </div>
            </Link>
        </header>
    )
}

export default Header