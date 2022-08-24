import React from "react";
import ButtonsTrolley from "./ButtonsTrolley";

const Cards = ({ dataCards, dataButtons }) => {
    return (
        <div>
            <div className="productosTittle">
                <label>PRODUCTOS DESTACADOS</label>
            </div>
            <div className="body">
                { dataCards.map(card =>
                    <div className="containerCard" key={card.id}>
                        <div className="cotainerImgs">
                            <div className={card.img}></div>
                        </div>
                        <div className="tittleCard">
                            <h4>{card.tittle}</h4>
                        </div>
                        <div className="headerCard">{card.header}</div>
                        <ButtonsTrolley dataButton={dataButtons} dataCard={card}></ButtonsTrolley>
                    </div>
                  )
                }
            </div>
        </div>
    )
}

export default Cards;