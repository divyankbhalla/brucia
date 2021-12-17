import React from 'react';
import './HowItWorks.css';

import howItWorksImage from '../../assets/howItWorksImage.png';

const HowItWorks = () => {
    return (
        <div className='brucia__howItWorks'>
            <div className='brucia__howItWorks-heading'>
                <h1><a className='red-text'>HOW</a> IT WORKS</h1>
            </div>
            <div className='brucia__howItWorks-image'>
                <img src={howItWorksImage} />
            </div>
        </div>
    )
}

export default HowItWorks
