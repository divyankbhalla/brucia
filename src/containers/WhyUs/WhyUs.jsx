import React from 'react';
import './WhyUs.css';

import { Features } from '../../Components';

const WhyUs = () => {
    return (
        <div className='burica__whyUs'>
            <div className='brucia__whyUs-details'>
                <Features title='Secure your data' text="It’s time to start treating data like your property. We are Houm, the privacy experts, " />
                <Features title="Get a Personal Domain" text="It’s time to start treating data like your property. We are Houm, the privacy experts," />
                <Features title="Flexible Storage Plan" text="It’s time to start treating data like your property. We are Houm, the privacy " />
            </div>
            <div className='brucia__whyUs-heading'>
                <h1>Your <a className='red-text'>data privacy</a> and security are a top concern for us.</h1>
            </div>
            <div className='brucia__whyUs-feature'>
                <p>See our Features</p>
            </div>
        </div>
    )
}

export default WhyUs
