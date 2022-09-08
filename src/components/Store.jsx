import { React } from "react";
import CardsStore from "./fragments/CardsStore";
import Divisas from "./fragments/Divisas";

const Store = () => {
    return (
        <>
            <Divisas></Divisas>
            <CardsStore></CardsStore>
        </>
    )
}

export default Store;