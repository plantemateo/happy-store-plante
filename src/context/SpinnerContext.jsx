
import { React, createContext, useState } from "react";

const SpinnerContext = createContext();

const SpinnerProvider = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const changeState = (state) => {
        setIsVisible(state);
    }

    return (
        <>
            <SpinnerContext.Provider value={{isVisible, changeState}}>
                {props.children}
            </SpinnerContext.Provider>
        </>
    )
  }

export {SpinnerContext, SpinnerProvider};