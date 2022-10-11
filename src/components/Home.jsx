import Carousel from './fragments/Carousel';
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
