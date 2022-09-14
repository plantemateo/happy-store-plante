import Carousel from './fragments/Carousel';
import { Link } from 'react-router-dom';
import { React } from "react";
import CategoriasTienda from './fragments/CategoriasTienda';

const Home = () => {
  return (
    <>
      <CategoriasTienda tittle={"Acceso Rapido Categorias Tienda"}></CategoriasTienda>
      <Carousel></Carousel>
    </>
  )
}

export default Home;
