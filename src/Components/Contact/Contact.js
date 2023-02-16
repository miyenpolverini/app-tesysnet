import React, { useState, useEffect, useContext } from 'react'
import './Contact.scss'
import { IoIosArrowForward } from "react-icons/io";
import Aos from 'aos';
import emailjs from '@emailjs/browser'
import NotifContext from '../../Context/NotifContext'


const Contact = () => {

    const { SetNotification, setNotifAdd, notifAdd, notifContact, setNotifContact } = useContext(NotifContext)
    const [btnInputWhats, setBtnInputWhats] = useState(false)
    const [btnInputEmail, setBtnInputEmail] = useState(false)


    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])


    const sendEmail = (e) => {
        e.preventDefault()
        setNotifContact(true);

        emailjs.sendForm('service_jlkmshj', 'template_35e308t', e.target,
            'user_PV0m0dEni12RzE54FTAhJ')
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    const sendSuscription = (e) => {
        e.preventDefault()
        setNotifAdd(true);

        emailjs.sendForm('service_jlkmshj', 'template_2q8v6ve', e.target,
            'user_PV0m0dEni12RzE54FTAhJ')
            .then((result) => {
                console.log(result.text);

                setBtnInputEmail(false)
                setBtnInputWhats(false)

            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };


    const handleInputChange = (event) => {
        console.log(event.target.value)

        if (event.target.value === '1') {
            setBtnInputWhats(true)
            setBtnInputEmail(false)
        }
        else if (event.target.value === '2') {
            setBtnInputEmail(true)
            setBtnInputWhats(false)
        }
        else {
            setBtnInputEmail(false)
            setBtnInputWhats(false)
        }


    }

    const ButtonInputEmail = () => {
        return (
            <div className='contForm'>
                <div>
                    <input class="form-control" type="email" aria-label="default input example" name='canal' required></input>
                </div>
                <div>
                    <button className='btnFinish btn-newesletter' type='submit'>
                        Suscribirse<span className='btn-arrow'><IoIosArrowForward /></span>
                    </button>
                </div>
            </div>

        )
    }

    const ButtonInputWhats = () => {
        return (
            <div className='contForm'>
                <div>
                    <input class="form-control" type="number" aria-label="default input example" name='canal' required></input>
                </div>
                <div>
                    <button className='btnFinish btn-newesletter' type='submit'>
                        Suscribirse<span className='btn-arrow'><IoIosArrowForward /></span>
                    </button>
                </div>
            </div>

        )
    }



    return (
        <div>
            <div className='containerIndex '>
                <div data-aos='fade-right' className='box-contact'>
                    <h4 className='contacto-tit'>CONTACTO</h4>
                    <p className='contacto-subtit'>Estamos para ayudarte, esperamos tu consulta.</p>
                    <form onSubmit={sendEmail}>
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

                    <form onSubmit={sendSuscription}>
                        <div class="form-floating mb-2">
                            <select class="form-select form-compra" id="floatingSelect" aria-label="Floating label select example" onChange={handleInputChange} >
                                <option value="0" selected></option>
                                <option value="1">WhatsApp</option>
                                <option value="2">Email</option>
                            </select>
                            <label className='form-compra' >Elija el canal de contacto</label>
                        </div>
                        {btnInputWhats && <ButtonInputWhats />}
                        {btnInputEmail && <ButtonInputEmail />}
                    </form>
                </div>
            </div>
            <div>
                <iframe className='contacto-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.8697428998535!2d-58.95479738435637!3d-34.607455165203724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc8fbb03c23647%3A0xe5401c6d17102c8b!2sTesysNet%20Computacion!5e0!3m2!1ses!2sar!4v1651979162637!5m2!1ses!2sar" loading="lazy" title='como llegar'></iframe>
            </div>

            {notifAdd && <SetNotification message='newsletter' />}
            {notifContact && <SetNotification />}
           
        </div>
    )
}

export default Contact