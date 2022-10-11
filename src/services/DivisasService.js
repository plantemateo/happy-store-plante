const DivisasServices = {
    getDolarValues: async () => {
        return fetch(process.env.REACT_APP_URL_SERVER_CRYPTOYA + process.env.REACT_APP_ENDPOINT_DOLAR_CRYPTOYA).then(res => {
            return res.json();
        })
    }
}

export { DivisasServices };