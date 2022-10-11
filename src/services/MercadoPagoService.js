const MercadoPagoServices = {
    getPaymentMethods: async () => {
        return fetch(process.env.REACT_APP_URL_BASE_SERVER_MERCADO_PAGO + "/v1/payment_methods", {
            headers:{ 'Authorization': 'Bearer ' + process.env.REACT_APP_ACCESS_TOKEN_MERCADO_PAGO }
        }).then(res => {
            return res.json();
        })
    }
}

export { MercadoPagoServices };