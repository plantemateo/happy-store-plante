import { Environments } from "../Environments";

const DivisasServices = {
    getDolarValues: () => {
        return fetch(Environments.URL_SERVER_CRYPTOYA + Environments.ENDPOINT_DOLAR_CRYPTOYA)
    }
}

export { DivisasServices };