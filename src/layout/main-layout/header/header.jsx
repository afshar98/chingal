import React from 'react';
import Logo from '../../../assets/images/chingal-logo.svg';
import {Link, useLocation} from "react-router-dom";
import {FiSearch} from "react-icons/fi";
import {useSearchContext} from "../../../contexts/search-context.jsx";

function Header() {

    const {search,setSearch} = useSearchContext();
    const location = useLocation();

    const searchHandler = (e) => {
        localStorage.setItem('search-key', e.target.value);
        setSearch(e.target.value);
    }
    return (
        <nav
            className="min-h-[60px] flex flex-row justify-between bg-surface-100 text-surface-500 px-2 border-b-2 border-surface-300">
            <Link to='/'>
                <img src={Logo} alt="chingal" width={200} height={100}/>
            </Link>

            <div className="flex items-center justify-center">
                {
                    location.pathname==='/' &&
                    <div className="flex items-center justify-center relative">
                        <input
                            type="text"
                            value={search}
                            className="pr-8 bg-gradient-to-t from-surface-300 to-surface-100 border border-surface-300 h-14 w-[512px] p-4 rounded-2xl placeholder:pr-4"
                            placeholder="جستجو"
                            onChange={searchHandler}
                        />
                        <span className="absolute right-3 text-surface-500"><FiSearch/></span>
                    </div>
                }
            </div>
        </nav>
    );
}

export default Header;