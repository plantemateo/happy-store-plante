
import { React, createContext, useState } from "react";

const CountItemContext = createContext();

const CountItemProvider = (props) => {
    const [countItem, setCountItem] = useState(0);

    const addCountItem = (cantidad) => {
        setCountItem(cantidad);
    }

    return (
        <>
            <CountItemContext.Provider value={{countItem, addCountItem}}>
                {props.children}
            </CountItemContext.Provider>
        </>
    )
  }

export {CountItemContext, CountItemProvider};