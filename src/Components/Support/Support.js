import React, { useEffect } from 'react'
import './Support.scss'
import photo1 from '../images/presupuesto.png';
import photo2 from '../images/garantia.png';
import photo3 from '../images/pago.png';
import photo4 from '../images/backup.png';
import photo5 from '../images/mantenimiento.png';
import arrow from '../images/arrow.png';
import { IoIosArrowForward } from "react-icons/io";
import Aos from 'aos';


const Support = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    

    return (
        <div>
            <h1 className='title-soporte'>Soporte técnico <br></br> para particulares y empresas</h1>
            <h3 className='subtitle-soporte'>Más 100 clientes y empresas confían en nosotros</h3>

            <div className="support-box_main">
                <div className="support-box">
                    <div>
                        <img className='img-support' src={photo1} alt='presupuesto'></img>
                    </div>
                    <div>
                        <h4 className="support__title">Presupuesto</h4>
                        <p className="support__subtitle">Se entrega presupuesto detallando <br></br> el trabajo a realizar  y su costo de acuerdo <br></br> al cuadro tarifario (lista de precios) <br></br> a disposición del usuario.</p>
                    </div>
                </div>
                <div className="support-box-aux">
                    <div>
                        <img className='img-support-aux' src={photo5} alt='presupuesto'></img>
                    </div>
                    <div>
                        <h4 className="support__title">Mantenimiento</h4>
                        <p className="support__subtitle">Se entrega presupuesto detallando <br></br> el trabajo a realizar  y su costo de acuerdo <br></br> al cuadro tarifario (lista de precios) <br></br> a disposición del usuario.</p>
                    </div>
                </div>
                <div className="support-box">
                    <div>
                        <img className='img-support' src={photo4} alt='presupuesto'></img>
                    </div>
                    <div>
                        <h4 className="support__title">Backup</h4>
                        <p className="support__subtitle">Se pone a disposición del usuario <br></br> un respaldo de la información cuyo  <br></br> costo será incluido en el presupuesto general, <br></br> tener en cuenta que pueden existir <br></br>  archivos con virus irreparables.</p>
                    </div>
                </div>
            </div>

            <div className="support-box_main">
                <div className="support-box">
                    <div>
                        <img className='img-support' src={photo3} alt='presupuesto'></img>
                    </div>
                    <div>
                        <h4 className="support__title">Formas de pago</h4>
                        <p className="support__subtitle">El pago debe ser efectuado al momento <br></br> de la finalización del servicio. <br></br> Podrás abonar en efectivo, transferencia <br></br> bancaria, tarjeta de crédito, mercado pago <br></br> y/o MODO.</p>
                    </div>
                </div>
                <div className="support-box">
                    <div>
                        <img className='img-support' src={photo2} alt='presupuesto'></img>
                    </div>
                    <div>
                        <h4 className="support__title">Garantía Hardware</h4>
                        <p className="support__subtitle">Las piezas y/o repuestos <br></br> cuentan  con una garantía máxima de seis <br></br> meses según el fabricante o distribuidor, <br></br> TESYS en muchos casos la extiende hasta <br></br> doce meses según el producto.</p>
                    </div>
                </div>
                <div className="support-box">
                    <div>
                        <img className='img-support' src={photo2} alt='presupuesto'></img>
                    </div>
                    <div>
                        <h4 className="support__title">Garantía Software</h4>
                        <p className="support__subtitle">Las reparaciones y/o configuraciones <br></br> tienen una garantía de seis meses <br></br> dependiendo de no haber sufrido modificaciones <br></br>en las configuraciones generadas por nuestro <br></br> personal técnico.
                        </p>
                    </div>
                </div>
            </div>

            <a href='#formulario-support'>
                <img className='img-arrow' src={arrow} alt='arrow'></img>
            </a>

            <h3 className='subtitle-soporte'>Escribinos en el formulario de contacto o utiliza el botón de Whatsapp para hablarnos directamente.</h3>
  

            <div data-aos='fade' className='box-message' id='formulario-support'>
                <h4 className='title-message'>¡Enviar un mensaje!</h4>
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
                    <div className="form-floating m-1 input-email-support">
                        <textarea className="form-control" id="floatingTextarea" placeholder='name@example.com' name='message' ></textarea>
                        <label className='form-compra'>Mensaje</label>
                    </div>
                    <button className='btnSend mb-5' type='submit'>
                        Enviar mensaje <span className='btn-arrow'><IoIosArrowForward /></span>
                    </button>
                </form>
            </div>
        



        </div>
    )
}

export default Support