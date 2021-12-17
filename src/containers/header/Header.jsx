import React from 'react';
import './header.css';

import { AiFillPlayCircle, AiOutlineDown } from 'react-icons/ai';
import headingImage from '../../assets/heading-image.png';


const Header = () => {
    return (
        <div className='brucia__header'>
            <div className='brucia__header-info'>
                <div className='brucia__header-info__heading'>
                    <h1>WHAT'S <a className='red-text'>PRIVACY</a><br/> WITHOUT BEING<br/> PRIVATE?</h1>
                    <button className='brucia__header-info__button'>Build your Houm</button>
                </div>
                <div className='brucia__header-info__para'>
                    <p>It’s time to start treating data like your property. We are Houm, the privacy experts, and we’re here to tell you all about your data.</p>
                </div>
            </div>
            <div className='brucia__header-illust'>
                <div className='brucia__header-illust__meetHoum'>
                    <div className='brucia__header-illust__meetHoum-heading'>
                        <AiFillPlayCircle color="red" />
                        <p className='red-text'>Meet Houm</p>
                    </div>
                    <div className='brucia__header-illust__meetHoum-para'>
                        <p>See Houm in action with all the features</p>
                    </div>
                </div>
                <div className='bucia__header-illust__image'>
                    <img src={headingImage} />
                </div>
                <div className='brucia__header-illust-scroll'>
                    <p>Scroll down</p>
                    <a>
                        <AiOutlineDown color='#BEBEBE' />
                        <AiOutlineDown color='#000' />
                        <AiOutlineDown color='#BEBEBE' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
