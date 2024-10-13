import React from 'react';
import { zoomies } from 'ldrs'



const Loader = (props) => {

    zoomies.register()

    return (
        <>
            <l-zoomies
                size="80"
                stroke="5"
                bg-opacity="0.1"
                speed="1.4"
                color="black"
            ></l-zoomies>
        </>
    )
}

export default Loader;






