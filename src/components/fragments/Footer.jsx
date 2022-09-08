import React from "react";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <a className="nameApp" style={{paddingTop: "50px"}}>HAPPY STORE</a>
                <div style={{display: "grid"}}>
                    <a className="labelFooter" style={{marginBottom: "unset", paddingTop: "18px"}}>Politicas de privacidad</a>
                    <label className="labelFooter" style={{marginBottom: "unset"}}>Av. San Martin 2655</label>
                    <label className="labelFooter" >Florida Oeste, Buenos Aires.</label>
                </div>
                <div>
                    <label className="labelFooter" style={{paddingTop: "18px"}}>Contacto:</label>
                    <div className="containerFooterData" ><img width={"30px"} src={"../../img/whatsapp.png"}></img>&nbsp;&nbsp;+54 3543 625698</div>
                    <div className="containerFooterData" ><img width={"30px"} src={"../../img/email.png"}></img>&nbsp;&nbsp;happystore@gmail.com</div>
                </div>
                <div>
                    <label className="labelFooter" style={{paddingTop: "18px"}}>Buscanos en redes:</label>
                    <div className="containerFooterData" ><img width={"30px"} src={"../../img/instagram.png"}></img>&nbsp;&nbsp;@happystore</div>
                    <div className="containerFooterData" ><img width={"30px"} src={"../../img/facebook.png"}></img>&nbsp;&nbsp;Happy Store</div>
                </div>
            </div>
        </>
    )
}

export default Footer;