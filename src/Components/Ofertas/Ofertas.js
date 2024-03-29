import React, { useState } from 'react'
import Loader from '../../Loader'
import './Ofertas.scss'


const Ofertas = () => {

    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 3000)

    return (
        <div>
            {loading ? <Loader /> :

                <div>
                    <p className='parrafo-ofertas'>Próximamente estaremos subiendo las mejores ofertas para vos.</p>

                </div>

            }
        </div>
    )
}

export default Ofertas  