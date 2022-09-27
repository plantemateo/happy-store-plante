import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../../services/Firebase";
import Store from "../Store";

const DetalleProducto = () => {
    const [data, setData] = useState({detalle:{}});
    const {idProducto} = useParams();

    useEffect(() => {
        if(data.id === undefined){
            getProductById(idProducto).then((prod) => {
                let product = prod.data();
                product.isVisible = true;
                setData(product);
            }).catch((err) => {
            })
        }
    }, [{}])

    return (
        <>  
            <Store></Store>
            <div className="modalDetalle" style={{display: data.isVisible ? 'flex' : 'none'}}>
                <div className="containerButton"><Link style={{textDecoration: "none", color: "#F8F7FF"}} to={'/tienda'}><button type="button" style={{ width: '0.6em', height: '0.6em', color: 'black' }} className="btn-close" data-bs-dismiss="alert" /></Link></div>
                <div className="cotainerImgDetalle">
                    <div className="imgCard" style={{width: '250px', height: '370px', backgroundImage: `url('../../img/${data.img}')`}}></div>
                </div>
                <div className="tittleDetalle">
                    <label>{data.tittle}</label>
                </div>
                <div className="grillaDetalle">
                    <label className="detalleTittle">Detalle Unidad</label>
                    <label>Precio:&nbsp;&nbsp;{data.header}</label>
                    <label>Color:&nbsp;&nbsp;{data.detalle.color}</label>
                    <label>Memoria:&nbsp;&nbsp;{data.detalle.memory}</label>
                    <label>Micro Procesador:&nbsp;&nbsp;{data.detalle.micro}</label>
                    <label>Pantalla:&nbsp;&nbsp;{data.detalle.display}</label>
                    <label>Ram:&nbsp;&nbsp;{data.detalle.ram}</label>
                    <label>Bateria:&nbsp;&nbsp;{data.detalle.bateria}</label>
                    <label>Sistema Operativo:&nbsp;&nbsp;{data.detalle.os}</label>
                    <br></br>
                    <label>Cantidad Añadida:&nbsp;&nbsp;{data.cantidad}</label>
                </div>
            </div>
        </>
    )
}

export default DetalleProducto;