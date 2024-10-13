import React, { useEffect } from 'react'
import './Desarrollo.scss'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Accordion from 'react-bootstrap/Accordion'
import basic from '../images/web-basic.jpg';
import estandar from '../images/web-estandar.jpg';
import complete from '../images/web-completo.jpg';
import arrow from '../images/arrow.png';
import { FcCheckmark } from "react-icons/fc";
import { IoIosArrowForward } from "react-icons/io";
import Aos from 'aos';

const Desarrollo = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])


    return (
        <>
            <h1 className='title-soporte'>Desarrollamos tu sitio web</h1>
            <CardGroup>
                <Card >
                    <Card.Img variant="top" className='img-plan' src={basic} />
                    <Card.Body className='body-plan'>
                        <Card.Title className='body-title' >PLAN BÁSICO</Card.Title>
                        <Card.Text className='body-text'>
                            <ul>
                                <li><FcCheckmark /> 4 secciones</li>
                                <li><FcCheckmark /> formato estático con textos y fotos</li>
                                <li><FcCheckmark /> 100% adaptable a todos los dispositivos</li>
                                <li><FcCheckmark /> Enlace con redes sociales</li>
                                <li><FcCheckmark /> Formulario de contacto</li>
                                <li><FcCheckmark /> Hosting gratis por un año</li>
                                <li><FcCheckmark /> Entrega en 20 días</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    <div className='footer-plan'>
                        <Card.Footer>
                            <small className="footer-price">Consulte precio</small>
                        </Card.Footer>
                    </div>
                </Card>
                <Card >
                    <div className='badge-plan'>
                        <Badge pill bg="danger" >RECOMENDADO</Badge>
                    </div>
                    <Card.Img variant="top" className='img-plan' src={estandar} />
                    <Card.Body className='body-plan'>
                        <Card.Title className='body-title'>PLAN ESTANDAR</Card.Title>
                        <Card.Text className='body-text'>
                            <ul>
                                <li><FcCheckmark /> 6 secciones</li>
                                <li><FcCheckmark /> formato dinámico con animaciones y transiciones</li>
                                <li><FcCheckmark /> 100% adaptable a todos los dispositivos</li>
                                <li><FcCheckmark /> Enlace con redes sociales</li>
                                <li><FcCheckmark /> Formulario de contacto</li>
                                <li><FcCheckmark /> Hosting gratis por un año</li>
                                <li><FcCheckmark /> Entrega en 30 días</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    <div className='footer-plan'>
                        <Card.Footer >
                            <small className="footer-price">Consulte precio</small>
                        </Card.Footer>
                    </div>
                </Card>
                <Card >
                    <Card.Img variant="top" className='img-plan' src={complete} />
                    <Card.Body className='body-plan'>
                        <Card.Title className='body-title'>PLAN COMPLETO</Card.Title>
                        <Card.Text className='body-text'>
                            <ul>
                                <li><FcCheckmark /> + de 6 secciones</li>
                                <li><FcCheckmark /> formato dinámico con animaciones y transiciones</li>
                                <li><FcCheckmark /> 100% adaptable a todos los dispositivos</li>
                                <li><FcCheckmark /> Enlace con redes sociales</li>
                                <li><FcCheckmark /> Formulario de contacto</li>
                                <li><FcCheckmark /> Hosting gratis por un año</li>
                                <li><FcCheckmark /> Botón flotante de whatsapp</li>
                                <li><FcCheckmark /> Estilo personalizado</li>
                                <li><FcCheckmark /> Conexión a base de datos</li>
                                <li><FcCheckmark /> Entrega en 45 días según estilo</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    <div className='footer-plan'>
                        <Card.Footer>
                            <small className="footer-price">Consulte precio</small>
                        </Card.Footer>
                    </div>
                </Card>
            </CardGroup>

            <Accordion className='accordion-container' defaultActiveKey="0">
                <Accordion.Item className='accordion-item' eventKey="0">
                    <Accordion.Header>¿QUÉ SON LAS SECCIONES?</Accordion.Header>
                    <Accordion.Body className='accordion-description'>
                        Son las diferentes páginas que contiene el sitio web, se despliegan desde el menú.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='accordion-item' eventKey="1">
                    <Accordion.Header>¿QUIÉN GENERA EL CONTENIDO?</Accordion.Header>
                    <Accordion.Body className='accordion-description'>
                        El contenido propio del sitio web lo recibimos del cliente. Los textos y fotos se envían por email, así como también nombre de las secciones del menú, logo y demás material que se quiera agregar.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='accordion-item' eventKey="2">
                    <Accordion.Header>¿COMO SE ABONA?</Accordion.Header>
                    <Accordion.Body className='accordion-description'>
                        Se puede abonar en efectivo de forma presencial en TESYS, transferencia bancaria o Mercado Pago.
                        Se abona el 50% en forma de seña al iniciar y el otro 50% restante a la entrega del sitio.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className='accordion-item' eventKey="3">
                    <Accordion.Header>¿COMO SE PROCEDE PARA LA CONTRATACIÓN?</Accordion.Header>
                    <Accordion.Body className='accordion-description'>
                        El cliente llena el formulario con algunos datos de contacto para enviar la información relacionada al contenido. Nos contactamos mediante Whatsapp y una vez abonada la seña comenzamos a trabajar.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <a href='#formulario-support'>
                <img className='img-arrow-desa' src={arrow} alt='arrow'></img>
            </a>

            <h3 className='subtitle-soporte'>Escribinos en el formulario de contacto o utiliza el botón de Whatsapp para hablarnos directamente.</h3>


            <div data-aos='fade' className='box-message' id='formulario-support'>
                <h4 className='title-message'>¡Completar el formulario!</h4>
                <form >
                    <div className="form-floating m-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder='name@example.com' name='user_name' required></input>
                        <label className='form-compra'>Nombre</label>
                    </div>
                    <div className="form-floating m-3">
                        <input type="number"
                            className="form-control"
                            id="floatingInput"
                            placeholder='name@example.com'
                            name='user_phone'
                            maxLength={8}
                            required></input>
                        <label className='form-compra'>Whatsapp</label>
                    </div>
                    <div className="form-floating m-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder='name@example.com' name='user_email' required></input>
                        <label className='form-compra'>Email</label>
                    </div>
                    <div className="form-floating m-3">
                        <select className="form-select" id="floatingSelect" name='plan_select' aria-label="Floating label select example" required>
                            <option></option>
                            <option value="osde">BÁSICO</option>
                            <option value="omint">ESTANDAR</option>
                            <option value="galeno">COMPLETO</option>
                        </select>
                        <label className='form-compra'>Plan</label>
                    </div>
                    <div className="form-floating m-3 input-email-support">
                        <textarea className="form-control" id="floatingTextarea" placeholder='name@example.com' name='message' ></textarea>
                        <label className='form-compra'>Mensaje</label>
                    </div>
                    <button className='btnSend mb-5' type='submit'>
                        Enviar <span className='btn-arrow'><IoIosArrowForward /></span>
                    </button>
                </form>
            </div>

        </>



    )
}




export default Desarrollo
