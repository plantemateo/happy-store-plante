import { React } from "react";

const ButtonsTrolley = ({dataButton, dataCard}) => {
    
    return (
        <>
            <div className="countItemButtons">
                <label>Cant.&nbsp;{dataCard.cantidad}</label>
            </div>
            <div className="containerButtonsCard">
                <button className="buttonCard" onClick={() => dataButton.functionAddItem(dataCard.id)}>ANADIR AL CARRITO</button>
                <button className="buttonCard" onClick={() => dataButton.functionRemoveItem(dataCard.id)}>REMOVER DEL CARRITO</button>
                <button className="buttonCard2" onClick={() => dataButton.functionOpenModal(dataCard.id)}>VER MAS INFORMACION</button>
            </div>
        </>
    )
}

export default ButtonsTrolley;