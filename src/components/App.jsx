import './App.css';
import { React, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Store from './Store';
import DetalleProducto from './fragments/DetalleProducto';
import Carrito from './Carrito';
import Footer from './fragments/Footer';
import NavBar from './fragments/NavBar';
import { CountItemContext } from '../context/CountItemContext';

function App() {  
  const {countItem} = useContext(CountItemContext);

  return (
    <>
      <BrowserRouter>
        <NavBar countItem={countItem}></NavBar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/tienda' element={<Store/>}></Route>
          <Route path='/tienda/:categoria' element={<Store/>}></Route>
          <Route path='/detalle-producto/:idProducto' element={<DetalleProducto/>}></Route>
          <Route path='/carrito' element={<Carrito/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
