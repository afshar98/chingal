import {useContext, useState} from "react";
import {createContext} from "react";

const SearchContext = createContext();

const SearchProvider = ({children}) => {

    const [search, setSearch] = useState(localStorage.getItem('search-key') || '');

    const value = {
        search,
        setSearch,
    }

    return <SearchContext.Provider value={value}>
        {children}
    </SearchContext.Provider>
}

const useSearchContext = () => {
    return useContext(SearchContext);
}

export {useSearchContext, SearchProvider}