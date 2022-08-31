import ButtonsTrolley from "./ButtonsTrolley";
import ModalDetalle from "./ModalDetalle";
import { getAllProducts } from '../services/ProductosService';
import { React, useState, useEffect, useCallback } from "react";

const Cards = ({ dataMain }) => {
  const [dataCard, setDataCards] = useState([]);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const addItem = (id) => {
    dataCard.forEach(card => {
      if (id === card.id) {
        if (card.stock > 0) {
          card.stock = card.stock - 1;
          card.cantidad = card.cantidad + 1;
          dataMain.functionIncrementCountItem(true);
        } else {
          dataMain.functionOpenAlert('No hay mas stock para este producto, disculpe las molestias.', true, '#32a881');
        }
      }
    });
  }

  const removeItem = (id) => {
    dataCard.forEach(card => {
      if (id === card.id && dataMain.valueCountItem > 0 && card.cantidad > 0) {
        card.stock = card.stock + 1;
        card.cantidad = card.cantidad - 1;
        dataMain.functionIncrementCountItem(false);
      } else if (id === card.id && card.cantidad === 0) {
        dataMain.functionOpenAlert(undefined, false, undefined);
      }
    });
  }

  useEffect(() => {
    getAllProducts.then((res) => {
      setDataCards(res);
    }).catch((err) => {
      //dataMain.functionOpenAlert('No hay mas stock para este producto, disculpe las molestias.', true, '#32a881');
    })
  }, [{}])

  const openModal = (idCard) => {
    dataCard.forEach(card => {
      if(idCard === card.id){
        card.isVisible = !card.isVisible;
      }
    })
    forceUpdate();
  }

  const dataButton = {
    functionAddItem: addItem,
    functionRemoveItem: removeItem,
    functionOpenModal: openModal
  }

  return (
    <div>
      <div className="productosTittle">
        <label>PRODUCTOS DESTACADOS</label>
      </div>
      <div className="body">
        {dataCard.map(card =>
          <div className="containerCard" key={card.id}>
            <div className="cotainerImgs">
              <div className={card.img}></div>
            </div>
            <div className="tittleCard">
              <h4>{card.tittle}</h4>
            </div>
            <div className="headerCard">{card.header}</div>
            <ButtonsTrolley dataButton={dataButton} dataCard={card}></ButtonsTrolley>
            <ModalDetalle data={card} openModal={openModal}></ModalDetalle>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Cards;