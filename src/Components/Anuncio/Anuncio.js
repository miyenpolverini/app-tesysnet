import { useContext } from 'react';
import './Anuncio.scss';
import anuncio from '../images/anunciopc.jpeg'
import context from '../../Context/NotifContext';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom'

const Anuncio = () => {
    
    const { show, handleClose } = useContext(context)

    return (
        <>

            <Modal className='modal' show={show} onHide={handleClose} centered >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {/*  <h4>OFERTA</h4> */}

                    </Modal.Title>
                </Modal.Header>
                <Link to={'/ofertas'}>
                    <Modal.Body>
                        <img src={anuncio} className='anuncio' alt="anuncio" />

                    </Modal.Body>
                </Link>
            </Modal>

        </>
    );
}

export default Anuncio;