import { React, useContext }  from "react";
import { SpinnerContext } from "../../context/SpinnerContext";

const Spinner = () => {
    const {isVisible} = useContext(SpinnerContext);

    return(
        <>  
            <div style={{display: isVisible ? "flex" : "none"}}>
                <div className="fondoSpinner"></div>
                <div className="containerSpinner">
                    <img src={"../../img/spinner.gif"} width="450px" alt="Cargando..."></img>
                </div>
            </div>
        </>
    )
}

export default Spinner;