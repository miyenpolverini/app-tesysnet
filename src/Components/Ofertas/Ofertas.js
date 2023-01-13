import React, { useState } from 'react'
import Loader from '../../Loader'
import './Ofertas.scss'


const Nosotros = () => {

    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 3000)

    return (
        <div>
            {loading ? <Loader /> :
                <p className='parrafo-ofertas'>Próximamente estaremos subiendo las mejores ofertas para vos.</p>
            }
        </div>
    )
}

export default Nosotros  