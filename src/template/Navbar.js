import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark deep-purple lighten-1 py-0 text-small">
            <NavLink to="/" className="nav-link navbar-brand" href="#"><span>
                <FaHome />
            </span></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            prueba
                                <span className="py-1"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right text-small "
                            aria-labelledby="navbarDropdown">
                            <NavLink className="dropdown-item"
                                to="/recepcionMateriaPrima">
                                <span className="ml-2">prueba</span>
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"
                            to="/recepcionMateriaPrima">
                            <span className="ml-2">prueba</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;