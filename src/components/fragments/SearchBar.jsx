import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({contToSearch}) => {
    const [dataInput, setDataInput] = useState();
    const navigate = useNavigate();

    return (
        <>
            <form className="formSearchBar">
                <input className="searchBarCustom" type="text" onChange={(event) => {setDataInput(event.target.value)}} onSubmit={() => { navigate(`/tienda/${dataInput}`) }} placeholder={contToSearch}/>
                <button className="buttonSearchBar" type="submit" onClick={() => { navigate(`/tienda/${dataInput}`) }}></button>
            </form>
        </>
    )
}

export default SearchBar;