import React from 'react';
import { Pinwheel } from '@uiball/loaders'



const Loader = (props) => {
    return (
        <>
            <Pinwheel
                size={35}
                lineWeight={3.5}
                speed={1}
                color="black"
            />
        </>
    )
}

export default Loader;
