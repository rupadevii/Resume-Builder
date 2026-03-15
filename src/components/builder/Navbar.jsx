import { Link, useLocation } from "react-router-dom";
import { dummyData } from "../../data/dummy";
import { useInfo } from "../../context/InfoContext";

export default function Navbar() {
    const location = useLocation()
    const {setInfo, clearMockData} = useInfo()
    if(location.pathname==="/" || location.pathname==="/home") return null;

    return (
        <nav className='bg-black z-100 text-white h-18 fixed w-full flex items-center px-40 justify-between'>
            <Link to="/build"><div className="text-lg">Resume</div></Link>
            <div className="flex gap-5 items-center">
                <button onClick={() => setInfo(dummyData)} className="border border-white px-3 py-1 rounded-md hover:bg-stone-800">Fill Mock</button>
                <button onClick={clearMockData} className="border border-white px-3 py-1 rounded-md hover:bg-stone-800">Clear Mock</button>
                <Link to="/preview"><button>Compare</button></Link>
            </div>
        </nav>
    )
}
