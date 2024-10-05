import { useState, useRef } from 'react';
import { FiMenu } from 'react-icons/fi'; 
import { FaSignOutAlt } from 'react-icons/fa'; 
import { AiOutlineFilter } from 'react-icons/ai'; 
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom'; 
import { useSorting } from '../components/ShortingContext'; 

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState(''); 
    const navigate = useNavigate(); 
    const { toggleSort } = useSorting(); 

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search?q=${searchTerm}`); 
        setSearchTerm(''); 
    };

    return (
        <div className='border-b-2 h-20 p-2 fixed top-0 left-0 w-full bg-white shadow-md z-10'>
            <div className='flex items-center justify-between w-full h-full'>
                <Link to={"/"}>
                    <h1 className="text-3xl font-bold px-2">Yummly</h1>
                </Link>

                <form onSubmit={handleSearch} className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search recipes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border p-3 rounded-lg bg-light-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-500 border-orange-500"
                    />
                    <button type="submit" className="ml-2 bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600">Search</button>
                    <button type="button" onClick={toggleSort} className="ml-2 bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 text-2xl">
                        <AiOutlineFilter />
                    </button>
                </form>

                <div className="flex items-center">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-xl">
                        <FiMenu />
                    </button>
                   <Link to={"/login"}>
                   <button className="ml-4 text-xl">
                        <FaSignOutAlt />
                    </button>
                    </Link>
                </div>
            </div>
            <div className='mt-[9px] -ms-2' ref={sidebarRef}>
                {sidebarOpen && <Sidebar />}
            </div>
        </div>
    );
};

export default Header;
