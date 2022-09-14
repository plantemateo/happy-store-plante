import { React } from "react";
import { useNavigate } from "react-router-dom";

const CategoriasTienda = ({tittle}) => {
    const navigate = useNavigate();

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
                <button className="buttonCategory" onClick={() => {navigate('/tienda')}}>Todos</button>
            </div>
        </>
    )
}

export default CategoriasTienda;