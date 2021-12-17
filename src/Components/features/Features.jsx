import React from 'react';
import './Feature.css'

const Features = ( {title, text} ) => {
    return (
        <div className='brucia__features-whyUs'>
            <div className='brucia__features-whyUs__heading'>
                <h1>{title}</h1>
            </div>
            <div className='brucia__features-whyUs__description'>
                {text}
            </div>
        </div>
    )
}

export default Features
