import { environments } from "../environments";

const DivisasServices = {
    getDolarValues: async () => {
        return fetch(environments.URL_SERVER_CRYPTOYA + environments.ENDPOINT_DOLAR_CRYPTOYA).then(res => {
            return res.json();
        })
    }
}

export { DivisasServices };