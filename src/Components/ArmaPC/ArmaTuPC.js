import React, { useState } from 'react'
import Loader from '../../Loader'

const ArmaTuPC = () => {

    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 3000)


    return (
        <div>
            {loading ? <Loader /> :
                <p className='parrafo-ofertas'>PRÓXIMAMENTE</p>
            }
        </div>
    )
}

export default ArmaTuPC