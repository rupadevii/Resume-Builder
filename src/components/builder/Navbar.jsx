import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation()
    if(location.pathname==="/" || location.pathname==="/home") return null;

    return (
        <nav className='bg-black z-100 text-white h-18 fixed w-full flex items-center px-40 justify-between'>
            <Link to="/build">Resume</Link>
            <div>
                <Link to="/preview"><button>Preview</button></Link>
                
            </div>
        </nav>
    )
}
