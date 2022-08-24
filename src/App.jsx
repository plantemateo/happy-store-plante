import './App.css';
import Cards from './components/Cards';
import Carousel from './components/fragments/Carousel';
import Footer from './components/fragments/Footer';
import NavBar from './components/NavBar';
import { React, useState, useEffect } from "react";
import Alert from './components/fragments/Alert';

function App() {

  const [dataAlert, setDataAlert] = useState({ text: 'Se ha anadido al carrito!', state: false, color: 'rgba(67, 206, 42, 0.98)' });
  const [countItem, setCountItem] = useState(0);
  const [dataCard, setDataCards] = useState([
    {
      id: 'card1',
      tittle: 'Iphone 13 Pro Max',
      header: 'USD 1100',
      stock: 2,
      cantidad: 0,
      img: 'imgCard1'
    },
    {
      id: 'card2',
      tittle: 'Samsung A32',
      header: 'ARS 75.999',
      stock: 3,
      cantidad: 0,
      img: 'imgCard2'
    },
    {
      id: 'card3',
      tittle: 'Samsung S22 Ultra',
      header: 'ARS 331.999',
      stock: 4,
      cantidad: 0,
      img: 'imgCard3'
    },
    {
      id: 'card4',
      tittle: 'Iphone 13',
      header: 'USD 850',
      stock: 7,
      cantidad: 0,
      img: 'imgCard4'
    }
  ]);

  const addItem = (id) => {
    dataCard.map(card => {
      if (id === card.id && card.stock > 0) {
        card.stock = card.stock - 1;
        card.cantidad = card.cantidad + 1;
        setCountItem(countItem + 1);
        dataAlert.state = true;
        dataAlert.color = 'rgba(67, 206, 42, 0.98)';
        dataAlert.text = 'Se ha anadido al carrito!';
        setDataAlert(dataAlert);
      }
    });
    setDataCards(dataCard);
  }

  const removeItem = (id) => {
    dataCard.map(card => {
      if(id === card.id && countItem > 0 && card.cantidad > 0) {
        card.stock = card.stock + 1;
        card.cantidad = card.cantidad - 1;
        setCountItem(countItem - 1);
        dataAlert.state = true;
        dataAlert.color = '#de3131f7';
        dataAlert.text = 'Se ha eliminado del carrito.';
        setDataAlert(dataAlert);
      }
    });
    setDataCards(dataCard);
  }

  const alertRemove = () => {
    dataAlert.state = false;
    setDataAlert(dataAlert);
  }

  const dataButton = {
    functionAddItem: addItem,
    functionRemoveItem: removeItem
  }

  return (
    <>
      <NavBar countItem={countItem}></NavBar>
      <Alert alertData={dataAlert} removeAlert={alertRemove}></Alert>
      <Carousel></Carousel>
      <Cards dataCards={dataCard} dataButtons={dataButton}></Cards>
      <Footer></Footer>
    </>
  )
}

export default App;
