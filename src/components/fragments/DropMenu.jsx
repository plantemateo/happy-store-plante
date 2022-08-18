import React from "react";

const DropMenu = () => {
    return (
        <div>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Menu</a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Galeria</a>
                    <a className="dropdown-item" href="#">Opciones</a>
                    <a className="dropdown-item" href="#">Contacto</a>
                </div>
            </li>
        </div>
    )
}

export default DropMenu;