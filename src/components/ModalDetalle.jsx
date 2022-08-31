import { React } from "react";

const ModalDetalle = ({data, openModal}) => {
    
    return (
        <>  
            <div className="modalDetalle" style={{display: data.isVisible ? 'flex' : 'none'}}>
                <div className="containerButton"><button type="button" style={{ width: '0.6em', height: '0.6em', color: 'black' }} className="btn-close" onClick={() => openModal(data.id)} data-bs-dismiss="alert" /></div>
                <div className="cotainerImgDetalle">
                    <div className={data.img} style={{width: '250px', height: '300px'}}></div>
                </div>
                <div className="tittleDetalle">
                    <label>{data.tittle}</label>
                </div>
                <div className="grillaDetalle">
                    <label className="detalleTittle">Detalle</label>
                    <label>Precio:&nbsp;&nbsp;{data.header}</label>
                    <label>Color:&nbsp;&nbsp;{data.detalle.color}</label>
                    <label>Memoria:&nbsp;&nbsp;{data.detalle.memory}</label>
                    <label>Micro Procesador:&nbsp;&nbsp;{data.detalle.micro}</label>
                    <label>Pantalla:&nbsp;&nbsp;{data.detalle.display}</label>
                    <label>Ram:&nbsp;&nbsp;{data.detalle.ram}</label>
                    <label>Bateria:&nbsp;&nbsp;{data.detalle.bateria}</label>
                    <label>Sistema Operativo:&nbsp;&nbsp;{data.detalle.os}</label>
                </div>
            </div>
        </>
    )
}

export default ModalDetalle;