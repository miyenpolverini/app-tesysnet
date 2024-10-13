import React, { useState } from 'react'
import { AiOutlineCheckCircle } from "react-icons/ai";

const Context = React.createContext()

export const AddNotifContextProvider = ({ children }) => {

    
    const [notifAdd, setNotifAdd] = useState(false)
    const [notifContact, setNotifContact] = useState(false)

    /* ANUNCIO */
    const [show, setShow] = useState(true)
    const handleClose = () => setShow(false)

    /* FUNCIONES */

    const SetNotification = (props) => {

        /*  setTimeout(() => {
             setNotifAdd(false)
             setNotifContact(false)
         }, 5000)   */

        return (
            <>
                {
                    props.message === 'newsletter' ?
                        <div className='notif-add animate__animated animate__slideInUp'>
                            <AiOutlineCheckCircle />
                            <h4 className='notif-name'>Gracias por suscribirte a Tesys. Recibirás todas nuestras novedades por el canal ingresado.</h4>
                        </div>
                        :
                        <div className='notif-add animate__animated animate__slideInUp'>
                            <AiOutlineCheckCircle />
                            <h4 className='notif-name'>Mensaje enviado. ¡En breve nos estaremos contactando!</h4>
                        </div>
                }
            </>

        )


    }

  


    return (
        <Context.Provider value={{ SetNotification, setNotifAdd, notifAdd, notifContact, setNotifContact, show, setShow, handleClose  }}>
            {children}
        </Context.Provider>
    )
}

export default Context
