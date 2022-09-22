import ButtonsTrolley from "./ButtonsTrolley";
import { getAllProducts } from '../../services/Firebase';
import { React, useState, useEffect } from "react";

const CardsStore = ({category}) => {
  const [productsCard, setProductsCards] = useState([]);

  useEffect(() => {
    getAllProducts().then(data => {
      const products = data.docs.map(doc => doc.data());
      setProductsCards(products);
    });
  }, [{}])

  return (
    <div>
      <div className="productosTittle">
        <label>PRODUCTOS DESTACADOS</label>
      </div>
      <div className="body">
        {
          category !== undefined ?
          productsCard.map(product => product.categoria === category ?
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
            : 
            undefined
          )
          :
          productsCard.map(product =>
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