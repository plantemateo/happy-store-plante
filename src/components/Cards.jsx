import React from "react";

const Cards = ({dataCard}) => {
    return (
        <div className="body">
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: '500px', minWidth: '500px' }}>
                <div className="card-header">{dataCard.card1.header}</div>
                <div className="card-body">
                    <h4 className="card-title">{dataCard.card1.tittle}</h4>
                    <p className="card-text">{dataCard.card1.text}</p>
                </div>
            </div>
            <div className="card text-white bg-dark mb-3" style={{ maxWidth: '500px', minWidth: '500px' }}>
                <div className="card-header">{dataCard.card2.header}</div>
                <div className="card-body">
                    <h4 className="card-title">{dataCard.card2.tittle}</h4>
                    <p className="card-text">{dataCard.card2.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards;