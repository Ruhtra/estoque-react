import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { ArchiveIcon, HomeIcon, ReaderIcon } from "@radix-ui/react-icons";

export function NavBar() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav>
            <ul>
                <li className={currentPath === '/' ? 'selected' : ''}>
                    <Link to={'/'}>
                        <HomeIcon className="icon" width={'100%'} height={'100%'}/>
                    </Link>
                </li>
                <li className={currentPath === '/products' ? 'selected' : ''}>
                    <Link to={'/products'}>
                        <ArchiveIcon className="icon" width={'100%'} height={'100%'}/>
                    </Link>
                </li>
                <li className={currentPath === '/history' ? 'selected' : ''}>
                    <Link to={'/history'}>
                        <ReaderIcon className="icon" width={'100%'} height={'100%'}/>
                    </Link>
                </li>
                {/* <li className={currentPath === '/history' ? 'selected' : ''}>
                    <Link to={'/recipe'}>
                        Recipes
                    </Link>
                </li> */}
            </ul>
        </nav>
    );
}
