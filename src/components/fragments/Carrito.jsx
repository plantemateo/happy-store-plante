import { React } from "react";

const Carrito = ({countItem}) => {

  return (
    <>
      <div className="countItems">{countItem ? countItem : 0}</div>
      <div className="carrito"></div>
    </>
  )
}

export default Carrito;