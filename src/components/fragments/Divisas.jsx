import { React, useEffect, useState } from "react";
import { DivisasServices } from "../../services/DivisasService";

const Divisas = () => {

    const [divisaData, setDivisaData] = useState();
    
    useEffect(() => {
        setInterval(() => {
            DivisasServices.getDolarValues()
            .then(res => {
                return res.json();
            }).then(data => {
                const dolars = <><div>Cotizacion Dolar&nbsp;&nbsp;-&nbsp;&nbsp;{new Date().toLocaleString()}</div><div>Dolar Blue:&nbsp;&nbsp;${data.blue}, &nbsp; Dolar Mep:&nbsp;&nbsp;${data.mep}, &nbsp; Dolar Solidario:&nbsp;&nbsp;${data.solidario}</div></>;
                setDivisaData(dolars);
            })
        }, 5000)
    }, [])

    return (
        <div className="containerDolars">
            {divisaData === undefined ? "Cargando Cotizacion Dolar..." : divisaData}
        </div>
    )
}

export default Divisas;