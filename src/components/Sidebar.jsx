import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const [FirstMenu, setFirstMenu] = useState(true);
    const [SecondMenu, setSecondMenu] = useState(false);

    return (
        <div className="w-64 bg-white h-full p-4 border fixed ">


            <div>
                <button
                    className="text-xl font-semibold mb-4 w-full text-left"
                    onClick={() => setFirstMenu(!FirstMenu)}
                >
                    Recipes {FirstMenu ? '-' : '+'}
                </button>
                {FirstMenu && (
                    <ul className="ml-4">
                        <li className="mb-4">
                            <Link to={"/myfeed"} className="text-gray-700 hover:text-orange-500">My Feed</Link>
                        </li>
                        <li className="mb-4">
                            <Link to={"/browse"} className="text-gray-700 hover:text-orange-500">Browse</Link>
                        </li>
                        <li className="mb-4">
                            <Link to={"/prorecipe"} className="text-gray-700 hover:text-orange-500">Pro Recipes</Link>
                        </li>
                        <li className="mb-4">
                            <Link to={"/guidedrecipe"} className="text-gray-700 hover:text-orange-500">Guided Recipes</Link>
                        </li>
                    </ul>
                )}
            </div>
            <hr />
            <div className="mt-2">
                <button
                    className="text-xl font-semibold mb-4 w-full text-left"
                    onClick={() => setSecondMenu(!SecondMenu)}
                >
                    Saved Recipes {SecondMenu ? '-' : '+'}
                </button>
                {SecondMenu && (
                    <ul className="ml-4">
                        <li className="mb-4">
                            <Link to={"/allcollection"} className="text-gray-700 hover:text-orange-500">All Collection</Link>
                        </li>
                        <li className="mb-4">
                            <Link to={"/allpersonal"} className="text-gray-700 hover:text-orange-500">All Yums</Link>
                        </li>
                        <li className="mb-4">
                            <Link to={"/allyums"} className="text-gray-700 hover:text-orange-500">All Personal Recipes </Link>
                        </li>
                        <li className="mb-4">
                            <Link to={"/breakfast"} className="text-gray-700 hover:text-orange-500">Breakfasts</Link>
                        </li>
                    </ul>
                )}
            </div>
            <div>
                <button className="text-gray-700 hover:text-orange-500 text-xl font-semibold mb-4 w-full text-left">
                    <Link to="/your-recipes">
                        View Your Recipes
                    </Link>
                </button>
            </div>
        </div>


    );
};

export default Sidebar;
