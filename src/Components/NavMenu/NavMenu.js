import React from 'react'
import './NavMenu.scss'
import './Styles.scss'
import logo from '../../../src/logo.png';
import { Link } from 'react-router-dom';
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { FaFacebookF, FaMapMarkerAlt, FaClock, FaCode, FaPhoneAlt, FaNetworkWired } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";


const NavMenu = () => {
    return (
        <>
            <div className="boxed-container">
                <header className="header">
                    <div className="container">
                        <div className="logo">
                            <Link to={'/'}>
                                <img src={logo} alt="logo principal" className="img-responsive" />
                            </Link>
                        </div>
                        <div className="header-widgets  header-widgets-desktop">
                            <div className="widget  widget-icon-box">
                                <div className="icon-box">
                                    <div className='icon-map'>
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="icon-box__text">
                                        <span className="icon-box__subtitle">Llamanos</span>
                                        <h4 className="icon-box__title">(0237) 485-2300</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="widget  widget-icon-box">
                                <div className="icon-box">
                                    <div className='icon-map'>
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="icon-box__text">
                                        <span className="icon-box__subtitle">Ubicación</span>
                                        <h4 className="icon-box__title">Pedro Whelan 128</h4>
                                        <h4 className="icon-box__title">General Rodriguez</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="widget  widget-icon-box">
                                <div className="icon-box">
                                    <div className='icon-map'>
                                        <FaClock />
                                    </div>
                                    <div className="icon-box__text">
                                        <span className="icon-box__subtitle">Atención al público</span>
                                        <h4 className="icon-box__title">Lunes a Viernes 9 a 13 HS y 15.30 a 19.30HS</h4>
                                        <h4 className="icon-box__title">Sabados 9 a 13 HS</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="widget  widget-social-icons">
                                <a className="social-icons__link" href="https://wa.me/5491167910891" target="_blank" rel='noreferrer'><SiWhatsapp /></a>
                                <a className="social-icons__link" href="https://www.instagram.com/tesysnet" target="_blank" rel='noreferrer'><SiInstagram /></a>
                                <a className="social-icons__link" href="https://www.facebook.com/tesys/" target="_blank" rel='noreferrer'><FaFacebookF /></a>
                            </div>
                        </div>

                        {/* Toggle Button for Mobile Navigation  */}
                        <button className=" navbar-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggle__text">MENÚ</span>
                            <span className="navbar-toggler-icon">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </span>
                        </button>

                    </div>

                    <div class="sticky-offset js-sticky-offset"></div>

                    {/* Barra de navegación */}

                    <div className="container">
                        <div className="navigation">
                            <nav className="navbar navbar-expand-lg navbar-light ">
                                <div className="container-fluid">
                                    {/* <div class="collapse navbar-collapse" id="navbarNavDropdown"> */}
                                    <div className="navbar-collapse collapse " id="navbarNavDropdown">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <Link to={'/nosotros'}>
                                                    NOSOTROS
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    TIENDA
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                    <li>
                                                        <Link className="dropdown-item" to={'/tienda'}>
                                                            Hardware
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to={'/armaTuPC'}>
                                                            Armá tu PC!
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={'/ofertas'}>
                                                    OFERTAS
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    SERVICIOS
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                    <li>
                                                        <Link className="dropdown-item" to={'/soporteTecnico'}>
                                                            <span className='icon-submenu'><FcSupport /></span>
                                                            Soporte técnico
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to={'/redes'}>
                                                            <span className='icon-submenu'><FaNetworkWired /></span>
                                                            Instalación de redes
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to={'/desarrolloWeb'}>
                                                            <span className='icon-submenu'><FaCode /></span>
                                                            Desarrollo de sitios web
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className=" dropdown-toggle" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    EDUCACIÓN
                                                </a>
                                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                                    <li>
                                                        <Link className="dropdown-item" to={'/cursosPresenciales'}>
                                                            Cursos presenciales
                                                        </Link>
                                                    </li>
                                                    <li><a className="dropdown-item" target='_blank' rel="noreferrer" href="http://www.isiv.edu.ar">Cursos a distancia</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <Link to={'/contacto'}>
                                                    CONTACTO
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>



                    {/* Mobile */}

                    <div className="container container-mobile">
                        <div className="header-widgets  hidden-md  hidden-lg">
                            <div className="widget  widget-icon-box">
                                <div className="icon-box">
                                    <div className='icon-map'>
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="icon-box__text">
                                        <span className="icon-box__subtitle">Llamanos</span>
                                        <h4 className="icon-box__title">(0237) 485-2300</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="widget  widget-icon-box">
                                <div className="icon-box">
                                    <div className='icon-map'>
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="icon-box__text">
                                        <span className="icon-box__subtitle">Ubicación</span>
                                        <h4 className="icon-box__title">Pedro Whelan 128</h4>
                                        <h4 className="icon-box__title">General Rodriguez</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="widget  widget-icon-box">
                                <div className="icon-box">
                                    <div className='icon-map'>
                                        <FaClock />
                                    </div>
                                    <div className="icon-box__text">
                                        <span className="icon-box__subtitle">Atención al público</span>
                                        <h4 className="icon-box__title">Lunes a Viernes 9 a 13 HS y 15.30 a 19.30HS</h4>
                                        <h4 className="icon-box__title">Sabados 9 a 13 HS</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="widget  widget-social-icons">
                                <a className="social-icons__link" href="https://wa.me/5491167910891" target="_blank" rel='noreferrer'><SiWhatsapp /></a>
                                <a className="social-icons__link" href="https://www.instagram.com/tesysnet" target="_blank" rel='noreferrer'><SiInstagram /></a>
                                <a className="social-icons__link" href="https://www.facebook.com/tesys/" target="_blank" rel='noreferrer'><FaFacebookF /></a>
                            </div>
                        </div>
                    </div>


                </header>
            </div>

        </>
    )
}

export default NavMenu