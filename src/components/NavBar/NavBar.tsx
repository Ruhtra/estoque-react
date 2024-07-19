import { Link } from "react-router-dom"
import "./NavBar.css"

export function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={'/products'}>
                        Products
                    </Link>
                </li>
                <li>
                    <Link to={'/history'}>
                        History
                    </Link>
                </li>
                <li>
                    <Link to={'/recipe'}>
                        Recipes
                    </Link>
                </li>
            </ul>
        </nav>
    )
}