import { useNavigate } from "react-router-dom";
import { React, useState, useEffect, useContext } from "react";
import { MercadoPagoServices } from "../services/MercadoPagoService";  
import { CarritoStoreContext } from "../context/CarritoStoreContext";
import { SpinnerContext } from "../context/SpinnerContext";
import { addNewCompra, getCompraById } from "../services/Firebase";
import { CountItemContext } from "../context/CountItemContext";

const Compra = () => {
  const navigate = useNavigate(); 
  const {changeState} = useContext(SpinnerContext);
  const {addCountItem} = useContext(CountItemContext);
  const {paymentData, carritoProducts, setCarritoProducts} = useContext(CarritoStoreContext);   
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentSelect, setPaymentSelect] = useState();
  const [cardData, setCardData] = useState({checked: false, name: undefined, number: undefined, expiration: undefined, securityCode: undefined});
  const [checkConfirm, setCheckConfirm] = useState({state: false, msg: undefined});
  const [checksFormData, setChecksFormData] = useState({nameRequired: false, numberRequired: false, expirationRequired: false, securityCodeRequired: false});

  useEffect(() => {
    if(paymentMethods.length === 0){
        changeState(true);
        MercadoPagoServices.getPaymentMethods().then(data => {
            setPaymentMethods(data);
        }).finally(() => {
            changeState(false);
        })
    }
  })

  const saveData = (data) => {
    let dataCard = {
        checked: cardData.checked,
        name: cardData.name,
        number: cardData.number,
        expiration: cardData.expiration,
        securityCode: cardData.securityCode
    }

    let formData = {
        nameRequired: checksFormData.nameRequired,
        numberRequired: checksFormData.numberRequired,
        expirationRequired: checksFormData.expirationRequired,
        securityCodeRequired: checksFormData.securityCodeRequired
    }

    if(data.name !== undefined){
        dataCard.name = data.name.toUpperCase();
        if(checksFormData.nameRequired){
            formData.nameRequired = false;
            setChecksFormData(formData);
        }
    }else if(data.number !== undefined){
        dataCard.number = data.number.toString().match(/.{1,4}/g).join(' ');
        if(checksFormData.numberRequired){
            formData.numberRequired = false;
            setChecksFormData(formData);
        }
    }else if(data.expiration !== undefined){
        dataCard.expiration = data.expiration;
        if(checksFormData.expirationRequired){
            formData.expirationRequired = false;
            setChecksFormData(formData);
        }
    }else if(data.securityCode !== undefined){
        dataCard.securityCode = data.securityCode;
        if(checksFormData.securityCodeRequired){
            formData.securityCodeRequired = false;
            setChecksFormData(formData);
        }
    }

    setCardData(dataCard);
  }

  const saveCardData = () => {
    let formData = {
        nameRequired: checksFormData.nameRequired,
        numberRequired: checksFormData.numberRequired,
        expirationRequired: checksFormData.expirationRequired,
        securityCodeRequired: checksFormData.securityCodeRequired
    }

    if(cardData.name === undefined || cardData.name === ""){
        formData.nameRequired = true;
        setChecksFormData(formData);
    }else if(cardData.number === undefined || cardData.number === ""){
        formData.numberRequired = true;
        setChecksFormData(formData);
    }else if(cardData.expiration === undefined || cardData.expiration === ""){
        formData.expirationRequired = true;
        setChecksFormData(formData);
    }else if(cardData.securityCode === undefined || cardData.securityCode === ""){
        formData.securityCodeRequired = true;
        setChecksFormData(formData);
    }else{
        changeState(true);
        setTimeout(() => {
            changeState(false);
            const dataCard = {
                checked : true,
                name: cardData.name,
                number: cardData.number,
                expiration: cardData.expiration,
                securityCode: cardData.securityCode
            }
            setCardData(dataCard);
        }, 2000)
    }
  }

  const selectPayment = (payment) => {
    setPaymentSelect(payment);
  }

  const volverAtras = (isDataCard) => {
    if(isDataCard){
        setPaymentSelect(undefined);
        setCardData({checked: false, name: undefined, number: undefined, expiration: undefined, securityCode: undefined});
    }else{
        setCardData({checked: false, name: undefined, number: undefined, expiration: undefined, securityCode: undefined});
    }
  }

  const realizarPago = async () => {
    let compraAnterior = undefined;
    await getCompraById("compra1").then(compra => {
        compraAnterior = compra.data();
    })

    const compra = { id: "compra1", data: compraAnterior ? compraAnterior.data.concat(carritoProducts) : carritoProducts };
    changeState(true);
    await addNewCompra(compra);
 
    setTimeout(() => {
        changeState(false);
        const checkConfirm = {
            state: true,
            msg: "¡Pago Realizado con Éxito!"
        }
        setCheckConfirm(checkConfirm);
    }, 2000);
  }

  const closeCheckConfirm = () => {
    addCountItem(0);
    setCarritoProducts([]);
    const checkConfirm = {
        state: false,
        msg: undefined
    }
    setCheckConfirm(checkConfirm);
    navigate("/adquisiciones");
  }

  if(paymentData === undefined || carritoProducts.length === 0){
    navigate("/");
  }

  return (
    <>
        {   
            paymentSelect !== undefined ?
                cardData.checked === false ?
                <div>
                    <div className="containerComprasTittle">
                        Datos de la Tarjeta
                    </div>
                    <div className="containerCompras">
                        <img src={paymentSelect.secure_thumbnail} width="70px" alt="Cargando..."/>
                        <label style={{paddingLeft: '10px', cursor: 'pointer', fontSize: "18px", textDecoration: 'underline'}}>{paymentSelect.name}</label>
                        <div className="containerDataCard">
                            <label style={{marginBottom: '5px'}}>Nombre Titular</label>
                            <input className="cardDataInput" type={'text'} style={{textTransform: 'uppercase'}} placeholder={"LUCIANA SOFIA RAMOS"} onChange={(e) => {saveData({name: e.target.value})}}></input>
                            <label className="labelErrorCompras" style={{display: checksFormData.nameRequired ? "flex" : "none"}}>Este campo es obligatorio</label>
                        </div>
                        <div className="containerDataCard">
                            <label style={{marginBottom: '5px'}}>Número Tarjeta</label>
                            <input className="cardDataInput" type={'number'} style={{textTransform: 'uppercase'}} placeholder={"4522 1223 9166 9024"} maxLength="12" onChange={(e) => {saveData({number: e.target.value})}}></input>
                            <label className="labelErrorCompras" style={{display: checksFormData.numberRequired ? "flex" : "none"}}>Este campo es obligatorio</label>
                        </div>
                        <div className="containerInputFechaCode">
                            <div>
                                <label style={{marginRight: '10px'}}>Fecha Expiración</label>
                                <input className="cardDataInputDate" type={'text'} style={{textTransform: 'uppercase'}} placeholder={"12/27"} maxLength="4" onChange={(e) => {saveData({expiration: e.target.value})}}></input>
                                <label className="labelErrorCompras" style={{display: checksFormData.expirationRequired ? "flex" : "none", position: "relative", marginLeft: "50px"}}>Este campo es obligatorio</label>
                            </div>
                            <div>
                                <label style={{marginLeft: '20px', marginRight: '10px'}}>Código Seguridad</label>
                                <input className="cardDataInputDate" type={'number'} style={{textTransform: 'uppercase'}} placeholder={"416"} maxLength="3" onChange={(e) => {saveData({securityCode: e.target.value})}}></input>
                                <label className="labelErrorCompras" style={{display: checksFormData.securityCodeRequired ? "flex" : "none", position: "relative", marginLeft: "77px"}}>Este campo es obligatorio</label>
                            </div>
                        </div>
                        <div>
                            <button style={{marginTop: '20px', marginRight: '30px', background: "#454d45"}} className="buttonBuy" onClick={() => {volverAtras(true)}}>VOLVER</button>
                            <button style={{marginTop: '20px'}} className="buttonBuy" onClick={() => {saveCardData()}}>CARGAR</button>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div className="containerComprasTittle">
                        Compra a Realizar
                    </div>
                    <div className="containerCompras">
                        <img src={paymentSelect.secure_thumbnail} width="70px" alt="Cargando..."/>
                        <label style={{paddingLeft: '10px', cursor: 'pointer', fontSize: "18px", textDecoration: 'underline'}}>{paymentSelect.name}</label>
                        <div className="containerDataCard">
                            <label style={{marginBottom: '5px'}}>Nombre Titular</label>
                            <label className="labelPaymentSelect">{cardData.name}</label>
                        </div>
                        <div className="containerDataCard">
                            <label style={{marginBottom: '5px'}}>Número Tarjeta</label>
                            <label className="labelPaymentSelect">{cardData.number}</label>
                        </div>
                        <label style={{fontSize: "18px"}}>Total ARS: ${paymentData.montoPagar.toLocaleString()}</label>
                        <div>
                            <button style={{marginTop: '20px', marginRight: '30px', background: "#454d45"}} className="buttonBuy" onClick={() => {volverAtras(false)}}>VOLVER</button>
                            <button style={{marginTop: '20px'}} className="buttonBuy" onClick={() => {realizarPago()}}>PAGAR</button>
                        </div>
                    </div>
                    <div style={{display: checkConfirm.state ? "flex" : "none"}}>
                        <div className="fondoSpinner"></div>
                        <div className="checkConfirm">
                            <img src={"../../img/checkConfirm.gif"} width="130px" alt="Cargando..."></img>
                            <label style={{fontSize: "20px"}}>{checkConfirm.msg}</label>
                            <button style={{marginTop: '20px'}} className="buttonBuy" onClick={() => {closeCheckConfirm()}}>ACEPTAR</button>
                        </div>
                    </div>
                </div>
            :
            <>
                <div className="comprasPaymentTittle">Elige el Metodo de Pago</div>
                 <div className="comprasView">
                    {   
                        paymentMethods.map(pay => 
                            <div className="containerPayment" key={pay.id}>
                                <button className="buttonPayment" onClick={() => {selectPayment(pay)}}>
                                    <img src={pay.secure_thumbnail} width="50px" alt="Cargando..."/>
                                    <label style={{paddingLeft: '10px', cursor: 'pointer'}}>{pay.name}</label>
                                </button>
                            </div>
                        )
                    }
                </div>
            </>
        }
    </>
  )
}

export default Compra;