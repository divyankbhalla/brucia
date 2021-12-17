import React from 'react';
import './Features.css';

import { Crousel } from '../../Components';
import { AiOutlineMinus } from 'react-icons/ai';
import Bitmap from '../../assets/Bitmap.png'

const Features = () => {
    return (
        <div className='brucia__features'>
            <Crousel title='Personal Photographs' />
            <div className='brucia__features-crousel-middle'>
                <div className='brucia__features-crousel__coulumn'>
                    <div className='brucia__features-crousel__coulumn-heading'>
                        <h1>Share Documents</h1>
                    </div>
                    <div className='brucia__features-crousel__coulumn-description'>
                        <p>To bring back privacy on the internet. To have your data on the internet and yet have it private. Not accessed or owned by any other company. To own a private place on the internet where you can keep your private data actually private.</p>
                        <p>To bring back <strong>privacy on the internet.</strong> To have your data on the internet</p>
                    </div>
                    <button className='brucia__features-crousel__coulumn-button'>Build your Houm</button>
                </div>
                <div className='brucia__features-crousel__image'>
                    <img src={Bitmap} />
                </div>
                <AiOutlineMinus color='#FF1C1A' />
            </div>
            <Crousel title="Your important mails" />
            <Crousel title='Chat with close ones' />
        </div>
    )
}

export default Features
