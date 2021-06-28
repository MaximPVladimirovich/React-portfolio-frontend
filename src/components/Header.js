import { Link } from "react-router-dom"
function Header() {
    return (
        <header>
            <h1> My Portfolio Page</h1>
            <Link to="/">
                <div >
                    HOME
                </div>
            </Link>
            <Link to="/projects">
                <div >
                    Projects
                </div>
            </Link>
            <Link to="/about">
                <div >
                    About
                </div>
            </Link>
        </header>
    )
}

export default Header