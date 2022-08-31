import './App.css';
import Cards from './components/Cards';
import Carousel from './components/fragments/Carousel';
import Footer from './components/fragments/Footer';
import NavBar from './components/NavBar';
import { React, useState, useCallback } from "react";
import Alert from './components/fragments/Alert';
import Divisas from './components/fragments/Divisas';

function App() {

  const [dataAlert, setDataAlert] = useState({ text: 'Se ha anadido al carrito!', state: false, color: 'rgba(67, 206, 42, 0.98)' });
  const [countItem, setCountItem] = useState(0);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const incrementCountItem = (isIncrement) => {
    if (isIncrement) {
      setCountItem(countItem + 1);
      openAlert('Se ha anadido al carrito!', true, 'rgba(67, 206, 42, 0.98)');
    } else {
      setCountItem(countItem - 1);
      openAlert('Se ha eliminado del carrito.', true, '#de3131f7');
    }
  }

  const openAlert = (msj, state, color) => {
    forceUpdate();
    dataAlert.text = msj;
    dataAlert.state = state;
    dataAlert.color = color;
    setDataAlert(dataAlert);
  }

  const dataMain = {
    functionIncrementCountItem: incrementCountItem,
    functionOpenAlert: openAlert,
    valueCountItem: countItem
  }

  return (
    <>
      <NavBar countItem={countItem}></NavBar>
      <Alert alertData={dataAlert} removeAlert={dataMain}></Alert>
      <Carousel></Carousel>
      <Divisas></Divisas>
      <Cards dataMain={dataMain}></Cards>
      <Footer></Footer>
    </>
  )
}

export default App;
