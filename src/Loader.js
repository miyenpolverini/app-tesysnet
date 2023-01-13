import React from 'react';
import './Loader.css'
import { Waveform } from '@uiball/loaders'



const Loader = (props) => {
    return (
        <>
            <Waveform
                size={40}
                lineWeight={3.5}
                speed={1}
                color="black"
            />
        </>
    )
}

export default Loader;