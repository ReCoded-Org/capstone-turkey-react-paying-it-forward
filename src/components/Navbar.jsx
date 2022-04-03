import { useState } from "react";
import { Link } from "react-router-dom";
import iconProfile from "../assets/profile.svg";

function Navbar() {

    // This is temporary state as we will work next with redux
    const [lang, setLang] = useState("en");
    const [search, setSearch] = useState("");
    const isLogin = false;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search...: ", search);
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return <nav className="bg-primary">
        <div className="px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                    <button type="button" id="toggle-navbar" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 6.25C12.5 9.70178 9.70178 12.5 6.25 12.5C2.79822 12.5 0 9.70178 0 6.25C0 2.79822 2.79822 0 6.25 0C9.70178 0 12.5 2.79822 12.5 6.25Z" fill="white" />
                            <path d="M12.5 25C12.5 28.4518 9.70178 31.25 6.25 31.25C2.79822 31.25 0 28.4518 0 25C0 21.5482 2.79822 18.75 6.25 18.75C9.70178 18.75 12.5 21.5482 12.5 25Z" fill="white" />
                            <path d="M6.25 50C9.70178 50 12.5 47.2018 12.5 43.75C12.5 40.2982 9.70178 37.5 6.25 37.5C2.79822 37.5 0 40.2982 0 43.75C0 47.2018 2.79822 50 6.25 50Z" fill="white" />
                            <path d="M31.25 6.25C31.25 9.70178 28.4518 12.5 25 12.5C21.5482 12.5 18.75 9.70178 18.75 6.25C18.75 2.79822 21.5482 0 25 0C28.4518 0 31.25 2.79822 31.25 6.25Z" fill="white" />
                            <path d="M25 31.25C28.4518 31.25 31.25 28.4518 31.25 25C31.25 21.5482 28.4518 18.75 25 18.75C21.5482 18.75 18.75 21.5482 18.75 25C18.75 28.4518 21.5482 31.25 25 31.25Z" fill="white" />
                            <path d="M31.25 43.75C31.25 47.2018 28.4518 50 25 50C21.5482 50 18.75 47.2018 18.75 43.75C18.75 40.2982 21.5482 37.5 25 37.5C28.4518 37.5 31.25 40.2982 31.25 43.75Z" fill="white" />
                            <path d="M43.75 12.5C47.2018 12.5 50 9.70178 50 6.25C50 2.79822 47.2018 0 43.75 0C40.2982 0 37.5 2.79822 37.5 6.25C37.5 9.70178 40.2982 12.5 43.75 12.5Z" fill="white" />
                            <path d="M50 25C50 28.4518 47.2018 31.25 43.75 31.25C40.2982 31.25 37.5 28.4518 37.5 25C37.5 21.5482 40.2982 18.75 43.75 18.75C47.2018 18.75 50 21.5482 50 25Z" fill="white" />
                            <path d="M43.75 50C47.2018 50 50 47.2018 50 43.75C50 40.2982 47.2018 37.5 43.75 37.5C40.2982 37.5 37.5 40.2982 37.5 43.75C37.5 47.2018 40.2982 50 43.75 50Z" fill="white" />
                        </svg>
                    </button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/">
                            <h5 className="block lg:hidden text-4xl font-bold text-center text-white">PayingIt</h5>
                            <h5 className="hidden lg:block text-4xl font-bold text-center text-white">PayingIt</h5>
                        </Link>
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-2 items-center">
                            <Link to="/" className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                            {isLogin && <>
                                <div className="dropdown inline-block relative">
                                    <button className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium py-2 rounded inline-flex items-center">
                                        <span className="mr-1">Donation For</span>
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                    </button>
                                    <ul className="dropdown-menu absolute z-40 hidden text-white pt-1 flex flex-row">
                                        <li><Link className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap" to={`/donation`}>Books</Link></li>
                                        <li><Link className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap" to={`/donation`}>Stationery</Link></li>
                                        <li><Link className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap" to={`/donation`}>Furniture</Link></li>
                                        <li><Link className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap" to={`/donation`}>School books</Link></li>
                                        <li><Link className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap" to={`/donation`}>Novels</Link></li>
                                        <li><Link className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap" to={`/donation`}>Exam Books</Link></li>
                                    </ul>
                                </div>
                                <div className="dropdown inline-block relative">
                                    <button className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium py-2 rounded inline-flex items-center">
                                        <span className="mr-1">Request For</span>
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                    </button>
                                    <ul className="dropdown-menu absolute z-40 hidden text-white pt-1 flex flex-row">
                                        <li><Link className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap" to={`/request`}>Books</Link></li>
                                        <li><Link className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap" to={`/request`}>Stationery</Link></li>
                                        <li><Link className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap" to={`/request`}>Furniture</Link></li>
                                        <li><Link className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap" to={`/request`}>School books</Link></li>
                                        <li><Link className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap" to={`/request`}>Novels</Link></li>
                                        <li><Link className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap" to={`/request`}>Exam Books</Link></li>
                                    </ul>
                                </div>
                            </>}

                            <Link to="/how-it-works" className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">How it works?</Link>
                            <Link to="/aboutus" className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                            {!isLogin && <Link to="/signup" className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign up</Link>}
                            <div className="text-white px-3 py-2 rounded-md text-sm font-medium search-container">
                                <form onSubmit={handleSearch}>
                                    <input type="search" className="search expandright" placeholder="Search" id="searchright" onChange={handleChange} value={search} />
                                    <label className="searchbutton" htmlFor="searchright">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10 2.25C5.71979 2.25 2.25 5.71979 2.25 10C2.25 14.2802 5.71979 17.75 10 17.75C11.87 17.75 13.5853 17.0877 14.9242 15.9848L20.4697 21.5303L20.5538 21.6029C20.8474 21.8208 21.2641 21.7966 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L15.9848 14.9242C17.0877 13.5853 17.75 11.87 17.75 10C17.75 5.71979 14.2802 2.25 10 2.25ZM10 3.75C13.4518 3.75 16.25 6.54822 16.25 10C16.25 13.4518 13.4518 16.25 10 16.25C6.54822 16.25 3.75 13.4518 3.75 10C3.75 6.54822 6.54822 3.75 10 3.75Z" fill="#FFFBFB" />
                                        </svg>
                                    </label>
                                </form>
                            </div>

                            {isLogin && <div className="dropdown inline-block relative">
                                <button className="text-white hover:bg-amber-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium rounded inline-flex items-center">
                                    <img src={iconProfile} alt="user-icon" />
                                </button>
                                <ul className="dropdown-menu absolute z-40 hidden text-white flex flex-row">
                                    <li><Link className="bg-yellow-500 hover:bg-yellow-600 py-2 px-4 block whitespace-no-wrap" to={`/logout`}>Logout</Link></li>
                                </ul>
                            </div>}
                            <div className="text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => {
                                if (lang === "en") {
                                    setLang("tr");
                                } else {
                                    setLang("en");
                                }
                            }}>
                                <span className={lang === "en" ? `font-bold bg-green-300 p-1 rounded` : null}>EN</span> | <span className={lang === "tr" ? `font-bold bg-green-300 p-1 rounded` : null}>TR</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                {isLogin && <>
                    <Link to="/" className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Donation For</Link>
                    <Link to="/" className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Request For</Link>
                </>}
                <Link to="/how-it-works" className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">How it works?</Link>
                <Link to="/aboutus" className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
                {!isLogin && <Link to="/signup" className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign up</Link>}
                {isLogin && <Link to="/logout" className="text-white hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Logout</Link>}
            </div>
        </div>
    </nav>;
}
export default Navbar;
