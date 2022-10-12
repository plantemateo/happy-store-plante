import ButtonsTrolley from "./ButtonsTrolley";
import { getAllProducts } from '../../services/Firebase';
import { React, useState, useEffect, useContext } from "react";
import { SpinnerContext } from "../../context/SpinnerContext";

const CardsStore = ({category}) => {
  const {changeState} = useContext(SpinnerContext);
  const [productsCard, setProductsCards] = useState([]);

  useEffect(() => {
    if(productsCard.length === 0){
      changeState(true);
      getAllProducts().then(data => {
        const products = data.docs.map(doc => doc.data());
        setProductsCards(products);
      }).finally(() => {
        changeState(false);
      });
    }
  }, [{}])

  return (
    <div style={{minHeight: "500px"}}>
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