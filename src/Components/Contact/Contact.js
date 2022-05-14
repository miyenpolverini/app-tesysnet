import React, { useEffect } from 'react'
import './Contact.scss'
import { IoIosArrowForward } from "react-icons/io";
import Aos from 'aos';



const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <div>
            <div className='containerIndex '>
                <div data-aos='fade-right' className='box-contact'>
                    <h4 className='contacto-tit'>CONTACTO</h4>
                    <p className='contacto-subtit'>Estamos para ayudarte, esperamos tu consulta.</p>
                    <form >
                        <div className='contForm'>
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
                                    <label className='form-compra'>Celular</label>
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
                        <div className="form-floating m-1">
                            <textarea className="form-control" id="floatingTextarea" placeholder='name@example.com' name='message' ></textarea>
                            <label className='form-compra'>Mensaje</label>
                        </div>
                        <button className='btnFinish mt-4 mb-5' type='submit'>
                            Enviar mensaje <span className='btn-arrow'><IoIosArrowForward /></span>
                        </button>
                    </form>
                </div>

                <div data-aos='fade-left' className='box-contact'>
                    <h4 className='contacto-tit'>NEWSLETTER</h4>
                    <p className='contacto-subtit'>Completa tus datos para recibir nuestras ofertas.</p>
                    <form >
                        <div className='contForm'>
                            <div>
                                <div className="form-floating m-1 input-email">
                                    <input type="email" className="form-control" id="floatingInput" placeholder='name@example.com' name='user_email' required></input>
                                    <label for="floatingInput" className='form-compra'>Email</label>
                                </div>
                            </div>
                            <div>
                                <button className='btnFinish btn-newesletter' type='submit'>
                                    Suscribirse<span className='btn-arrow'><IoIosArrowForward /></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <iframe className='contacto-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8697428998535!2d-58.95479738435637!3d-34.607455165203724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc8fbb03c23647%3A0xe5401c6d17102c8b!2sTesysNet%20Computacion!5e0!3m2!1ses!2sar!4v1651979162637!5m2!1ses!2sar" loading="lazy" title='como llegar'></iframe>
            </div>


        </div>
    )
}

export default Contact