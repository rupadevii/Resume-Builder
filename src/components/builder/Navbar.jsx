import { useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation()
    if(location.pathname==="/") return null;

    return (
        <nav className='bg-black text-white h-18 fixed w-full flex items-center px-40'>
            Resume
        </nav>
    )
}
