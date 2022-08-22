import React from "react";

const SearchBar = ({contToSearch}) => {
    return (
        <>
            <form className="formSearchBar">
                <input className="searchBarCustom" type="text" placeholder={contToSearch} />
                <button className="buttonSearchBar" type="submit"></button>
            </form>
        </>
    )
}

export default SearchBar;