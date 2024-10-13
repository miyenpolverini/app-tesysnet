import React, { useState } from 'react'
import Loader from '../../Loader'
import { TiInputChecked } from "react-icons/ti";
import notebookimage from '../images/notebookhp.jpeg'
import cartuchosimage from '../images/cartuchoshp.png'
import tonersimage from '../images/toners.jpg'
import './Ofertas.scss'


const Ofertas = () => {

    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 1000)

    return (
        <>
            {loading ? <Loader /> :

                <div >
                    <a href="https://wa.me/5491167910891" target="_blank" rel='noreferrer'>
                        <div className="tarjetas">
                            <div className="tarjeta">
                                <div>
                                    <img src={notebookimage} alt='notebook hp en oferta'></img>
                                </div>
                                <p className="tituloProd">NOTEBOOK HP</p>
                                <p className="subTituloProd">*usada en perfecto estado</p>
                                <p className="detalleProd"><TiInputChecked />Procesador Intel I5</p>
                                <p className="detalleProd"><TiInputChecked />8gb de Memoria RAM DDR4</p>
                                <p className="detalleProd"><TiInputChecked />500gb disco rígido</p>
                                <p className="detalleProd"><TiInputChecked />Windows + Paquete Office</p>
                                <div className="tarjeta-contenido-detalle">
                                    <h6 className="tarjetaPrecio">$ 580.000</h6>
                                    <h6 className="tarjetaPrecio2">15% OFF ABONANDO EN EFECTIVO O TRANSFERENCIA</h6>
                                </div>
                                <button className='tarjeta-boton'>ME INTERESA</button>
                            </div>
                        </div>
                    </a>

                    <a href="https://wa.me/5491167910891" target="_blank" rel='noreferrer'>
                        <div className="tarjetas">
                            <div className="tarjeta">
                                <div>
                                    <img src={cartuchosimage} alt='cartuchos en oferta'></img>
                                </div>
                                <p className="tituloProd">CARTUCHOS HP</p>
                                <p className="detalleProd"><TiInputChecked />Llevando 2 unidades de cualquier modelo</p>
                                <div className="tarjeta-contenido-detalle">
                                    <h6 className="tarjetaPrecio2">15% OFF ABONANDO EN EFECTIVO O TRANSFERENCIA</h6>
                                </div>
                                <button className='tarjeta-boton'>ME INTERESA</button>
                            </div>
                        </div>
                    </a>

                    <a href="https://wa.me/5491167910891" target="_blank" rel='noreferrer'>
                        <div className="tarjetas">
                            <div className="tarjeta">
                                <div>
                                    <img src={tonersimage} alt='toners en oferta'></img>
                                </div>
                                <p className="tituloProd">TONERS</p>
                                <p className="detalleProd"><TiInputChecked />Llevando 2 unidades de cualquier modelo</p>
                                <div className="tarjeta-contenido-detalle">
                                    <h6 className="tarjetaPrecio2">15% OFF ABONANDO EN EFECTIVO O TRANSFERENCIA</h6>
                                </div>
                                <button className='tarjeta-boton'>ME INTERESA</button>
                            </div>
                        </div>
                    </a>
                </div>



            }
        </>
    )
}

export default Ofertas  