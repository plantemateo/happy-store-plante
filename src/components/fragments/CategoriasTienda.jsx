import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoriasTienda = ({tittle}) => {
    const navigate = useNavigate();
    const [slidePrice, setSlicePrice] = useState(1);

    return (
        <>
            <div className="tittleCategorias">
                <label>{tittle}</label>
            </div>
            <div className="containerCategories">
                <button className="buttonCategory" onClick={() => {navigate('/tienda/celulares')}}>Celulares</button>
                <button className="buttonCategory" onClick={() => {navigate('/tienda/monitores')}}>Monitores</button>
                <button className="buttonCategory" onClick={() => {navigate('/tienda/parlantes')}}>Parlantes</button>
                <button className="buttonCategory" onClick={() => {navigate('/tienda/sillas-gamers')}}>Sillas Gamers</button>
                <button className="buttonCategory" onClick={() => {navigate('/tienda/notebooks')}}>Notebooks</button>
                <button className="buttonCategory" onClick={() => {navigate('/tienda/televisores')}}>Televisores</button>
                <button className="buttonCategory" onClick={() => {navigate('/tienda/camaras')}}>Camaras</button>
                <button className="buttonCategory" onClick={() => {navigate('/tienda/tablets')}}>Tablets</button>
                <button className="buttonCategory" onClick={() => {navigate('/tienda')}}>Todos</button>
            </div>
            {/**
                <div className="containerSlider">
                    <label className="form-label">Filtrar por precio</label>
                    <input type="range" className="form-range" onChange={(event) => {setSlicePrice(event.target.value)}} value={slidePrice}/>
                </div>
            */}

        </>
    )
}

export default CategoriasTienda;