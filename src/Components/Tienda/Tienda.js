import React, { useEffect } from 'react'
import './Tienda.scss'
import arrow from '../images/arrow.png';
import { IoIosArrowForward } from "react-icons/io";
import { TiInputChecked } from "react-icons/ti";
import Aos from 'aos';


const Support = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    

    return (
        <div>

            <ul className='tienda'>
                <li><TiInputChecked /> Equipos gamer de alto rendimiento</li>
                <li><TiInputChecked /> Armado de CPU</li>
                <li><TiInputChecked /> Teclado y Mouse</li>
                <li><TiInputChecked /> Cartuchos</li>
            </ul>

            <a href='#formulario-support'>
                <img className='img-arrow' src={arrow} alt='arrow'></img>
            </a>

            <h3 className='subtitle-soporte'>Escribinos en el formulario de contacto o utiliza el botón de Whatsapp para hablarnos directamente.</h3>


            <div data-aos='fade' className='box-message' id='formulario-support'>
                <h4 className='title-message'>Solicitá tu presupuesto</h4>
                <form >
                    <div className='contFormTienda'>
                        <div>
                            <div className="form-floating m-1">
                                <input type="text" className="form-control" id="floatingInput" placeholder='name@example.com' name='user_name' required></input>
                                <label className='form-compra'>Nombre</label>
                            </div>
                            <div className="form-floating m-1">
                                <input type="number"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder='name@example.com'
                                    name='user_phone'
                                    maxLength={8}
                                    required></input>
                                <label className='form-compra'>Whatsapp</label>
                            </div>
                        </div>
                        <div>
                            <div className="form-floating m-1  ">
                                <input type="email" className="form-control" id="floatingInput" placeholder='name@example.com' name='user_email' required></input>
                                <label className='form-compra'>Email</label>
                            </div>
                            <div className="form-floating m-1 ">
                                <input type="text" className="form-control" id="floatingInput" placeholder='name@example.com' name='subject' required></input>
                                <label className='form-compra'>Asunto</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-floating m-1 input-email-m">
                        <textarea className="form-control" id="floatingTextarea" placeholder='name@example.com' name='message' ></textarea>
                        <label className='form-compra'>Mensaje</label>
                    </div>
                    <button className='btnSend mb-5' type='submit'>
                        Enviar <span className='btn-arrow'><IoIosArrowForward /></span>
                    </button>
                </form>
            </div>




        </div>
    )
}

export default Support