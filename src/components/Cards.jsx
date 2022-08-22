import React from "react";

const Cards = ({ dataCards }) => {
    return (
        <div>
            <div className="productosTittle">
                <label>PRODUCTOS DESTACADOS</label>
            </div>
            <div className="body">
                <div className="containerCard">
                    <div className="cotainerImgs">
                        <div className="imgCard1"></div>
                    </div>
                    <div className="tittleCard">
                        <h4>{dataCards.card1.tittle}</h4>
                    </div>
                    <div className="headerCard">{dataCards.card1.header}</div>
                    <div className="containerButtonsCard">
                        <button className="buttonCard">ANADIR AL CARRITO</button>
                        <button className="buttonCard2">VER MAS INFORMACION</button>
                    </div>
                </div>
                <div className="containerCard">
                    <div className="cotainerImgs">
                        <div className="imgCard2"></div>
                    </div>
                    <div className="tittleCard">
                        <h4>{dataCards.card2.tittle}</h4>
                    </div>
                    <div className="headerCard">{dataCards.card2.header}</div>
                    <div className="containerButtonsCard">
                        <button className="buttonCard">ANADIR AL CARRITO</button>
                        <button className="buttonCard2">VER MAS INFORMACION</button>
                    </div>
                </div>
                <div className="containerCard">
                    <div className="cotainerImgs">
                        <div className="imgCard3"></div>
                    </div>
                    <div className="tittleCard">
                        <h4>{dataCards.card3.tittle}</h4>
                    </div>
                    <div className="headerCard">{dataCards.card3.header}</div>
                    <div className="containerButtonsCard">
                        <button className="buttonCard">ANADIR AL CARRITO</button>
                        <button className="buttonCard2">VER MAS INFORMACION</button>
                    </div>
                </div>
                <div className="containerCard">
                    <div className="cotainerImgs">
                        <div className="imgCard4"></div>
                    </div>
                    <div className="tittleCard">
                        <h4>{dataCards.card4.tittle}</h4>
                    </div>
                    <div className="headerCard">{dataCards.card4.header}</div>
                    <div className="containerButtonsCard">
                        <button className="buttonCard">ANADIR AL CARRITO</button>
                        <button className="buttonCard2">VER MAS INFORMACION</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;