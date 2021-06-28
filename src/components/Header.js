import { Link } from "react-router-dom"
function Header() {
    return (
        <header>
            <h1> Maxim Bleeker</h1>
            <Link to="/">
                <div >
                    Home
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