import ButtonsTrolley from "./ButtonsTrolley";
import { ProductosServices } from '../../services/ProductosService';
import { React, useState, useEffect } from "react";

const CardsStore = () => {
  const [productsCard, setProductsCards] = useState([]);

  useEffect(() => {
    ProductosServices.getAllProducts.then((products) => {
      setProductsCards(products);
    }).catch((err) => {
      //dataMain.functionOpenAlert('No hay mas stock para este producto, disculpe las molestias.', true, '#32a881');
    })
  }, [{}])

  return (
    <div>
      <div className="productosTittle">
        <label>PRODUCTOS DESTACADOS</label>
      </div>
      <div className="body">
        {productsCard.map(product =>
          <div className="containerCard" key={product.id}>
            <div className="cotainerImgs">
              <div className="imgCard" style={{backgroundImage: `url('../../img/${product.img}')`}}></div>
            </div>
            <div className="tittleCard">
              <h4>{product.tittle}</h4>
            </div>
            <div className="headerCard">{product.header}</div>
            <ButtonsTrolley idProduct={product.id}></ButtonsTrolley>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default CardsStore;