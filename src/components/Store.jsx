import { React } from "react";
import { useParams } from "react-router-dom";
import CardsStore from "./fragments/CardsStore";
import CategoriasTienda from "./fragments/CategoriasTienda";
import Divisas from "./fragments/Divisas";

const Store = () => {
    const { categoria } = useParams();

    return (
        <>
            <Divisas></Divisas>
            <CategoriasTienda tittle={"Categorias Tienda"}></CategoriasTienda>
            <CardsStore category={categoria}></CardsStore>
        </>
    )
}

export default Store;