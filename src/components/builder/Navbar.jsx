import { Link, useLocation } from "react-router-dom";
import { dummyData } from "../../data/dummy";
import { useInfo } from "../../context/InfoContext";

export default function Navbar() {
    const location = useLocation()
    const {setInfo} = useInfo()
    if(location.pathname==="/" || location.pathname==="/home") return null;

    return (
        <nav className='bg-black z-100 text-white h-18 fixed w-full flex items-center px-40 justify-between'>
            <Link to="/build">Resume</Link>
            <div className="flex gap-3">
                <button onClick={() => setInfo(dummyData)}>Mock</button>
                <Link to="/preview"><button>Compare</button></Link>
            </div>
        </nav>
    )
}
