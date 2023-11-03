import React, {useState} from 'react';
import Logo from '../../../assets/images/chingal-logo.svg';
import {Link, useLocation} from "react-router-dom";
import {FiSearch} from "react-icons/fi";
import {useSearchContext} from "../../../contexts/search-context.jsx";
import {LuSunDim} from "react-icons/lu";
import {PiMoonFill} from "react-icons/pi";

function Header() {

    const {search, setSearch} = useSearchContext();
    const location = useLocation();
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

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
                    location.pathname === '/' &&
                    <div className="flex items-center justify-center relative">
                        <input
                            type="text"
                            value={search}
                            className="pr-8 bg-gradient-to-t from-surface-300 to-surface-100 border border-surface-300 h-14 w-[512px] p-4 rounded-2xl"
                            placeholder="جستجو"
                            onChange={searchHandler}
                        />
                        <span className="absolute right-3 text-surface-500"><FiSearch/></span>
                    </div>
                }

                <label className='themeSwitcherThree relative inline-flex cursor-pointer select-none items-center'>
                    <input
                        type='checkbox'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className='sr-only'
                    />
                    <div className='shadow-card flex h-14 w-20 items-center justify-center rounded-2xl mr-4 bg-white bg-gradient-to-t from-surface-300 to-surface-100 border border-surface-300'>
                        <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-2xl ${!isChecked ? 'bg-primary-500 text-surface-900' : 'text-body-color'}`}><LuSunDim/></span>
                        <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-2xl ${isChecked ? 'bg-primary-500 text-surface-900' : 'text-body-color'}`}><PiMoonFill/></span>
                    </div>
                </label>
            </div>
        </nav>
    );
}

export default Header;