import { React, useState, useEffect } from "react";
import { ProductosServices } from "../../services/ProductosService";

const Carousel = () => {
    const [img, setImg] = useState({ id: 1, name: "hplaptop11.webp" });
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        if (imagenes.length === 0) {
            ProductosServices.getAllImagenes
                .then(imagens => {
                    setImagenes(imagens.sort((a, b) => a.id - b.id));
                })
        }
    }, [{}])

    const changeImage = (isNext) => {
        if (isNext && img.id <= (imagenes.length - 1)) {
            setImg(imagenes.find(pick => pick.id === (img.id + 1)));
        } else if (!isNext && img.id > 1) {
            setImg(imagenes.find(pick => pick.id === (img.id - 1)));
        } else if(isNext && img.id === imagenes.length){
            setImg(imagenes[0]);
        } else if(!isNext && img.id === 1){
            setImg(imagenes[imagenes.length - 1]);
        }
    }

    return (
        <>
            <div className="fondoHome">
                <label className="labelCarousel">NUEVO Iphone 13 Pro Max 256GB</label>
            </div>
            <div className="fondoCarousel">
                <button className="buttonFlecha" onClick={() => changeImage(false)}><img width={"30px"} src={"../../img/flecha-izquierda.png"}></img></button>
                <div className="imagenesCarusel" style={{backgroundImage: `url('../../img/${img.name}')`}}></div>
                <button style={{ marginLeft: "0px", marginRight: "145px" }} className="buttonFlecha" onClick={() => changeImage(true)}><img width={"30px"} src={"../../img/flecha-derecha.png"}></img></button>
            </div>
        </>
    )
}

export default Carousel;