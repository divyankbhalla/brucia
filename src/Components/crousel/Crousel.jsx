import React from 'react';
import './Crousel.css';

import { AiOutlinePlus } from 'react-icons/ai'

const Crousel = ( {title} ) => {
    return (
        <div className='brucia__features-crousel'>
            <div className='brucia__features-crousel_heading'>
                {title}
            </div>
            <div>
                <AiOutlinePlus size='24px' />
            </div>
        </div>
    )
}

export default Crousel
