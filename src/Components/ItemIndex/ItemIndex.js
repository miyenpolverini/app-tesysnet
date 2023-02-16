import React from 'react'
import './ItemIndex.scss'
import slider2 from '../images/slider_04.jpg';
import slider3 from '../images/slider_03.jpg';
import slider5 from '../images/slider_05.jpg';
import marca1  from '../images/1.png'
import marca2  from '../images/2.png'
import marca3  from '../images/3.png'
import marca4  from '../images/4.png'
import marca5  from '../images/5.png'
import marca6  from '../images/6.png'
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom'

const ItemIndex = () => {
    return (
        <div>
            {/* CAROUSEL */}
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <Link to={'/soporteTecnico'}>
                            <img src={slider5} className="d-block carousel-img" alt="desarrollo web" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='tit-slider'>SOPORTE TÉCNICO</h5>
                                <p className='tit-slider'>para particulares y empresas</p>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <Link to={'/ofertas'}>
                            <img src={slider2} className="d-block carousel-img" alt="ofertas" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='tit-slider'>OFERTAS</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <Link to={'/cursosPresenciales'}>
                            <img src={slider3} className="d-block carousel-img" alt="cursos" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className='tit-slider'>CURSOS</h5>
                            </div>
                        </Link>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className='carousel-flecha' aria-hidden="true">
                        <MdArrowBackIosNew />
                    </span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className='carousel-flecha' aria-hidden="true">
                        <MdArrowForwardIos />
                    </span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="panel-grid" id="pg-7-5">
                <div className="container">
                    <div className="panel widget row">
                        <div className="col-md-12">
                            <div className="motivational-text">
                                MÁS DE 30 AÑOS VIVIENDO LA PASIÓN POR LA INFORMÁTICA
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="panel-grid">
					<div className="panel container">
						<h3 className="widget-title">Nuestras marcas</h3>
						<div className="textwidget">
							<div className="logo-panel">
								<div className="row">
									<div className="col-xs-12 col-sm-2"><img src={marca1} alt="Client"
											width="208" height="98" /></div>
									<div className="col-xs-12 col-sm-2"><img src={marca2} alt="Client"
											width="208" height="98" /></div>
									<div className="col-xs-12 col-sm-2"><img src={marca3} alt="Client"
											width="208" height="98" /></div>
									<div className="col-xs-12 col-sm-2"><img src={marca4} alt="Client"
											width="208" height="98" /></div>
									<div className="col-xs-12 col-sm-2"><img src={marca5} alt="Client"
											width="208" height="98" /></div>
									<div className="col-xs-12 col-sm-2"><img src={marca6} alt="Client"
											width="208" height="98" /></div>
								</div>
							</div>
						</div>
				    </div>
			</div>







        </div>



    )
}

export default ItemIndex