import React, {useState} from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/fingerprint.svg';

const Menu = () =>(
    <>
        <p><a href='#features'>Features</a></p>
        <p><a href='#pricing'>Pricing</a></p>
        <p><a href='#resources'>Resources</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    
    return (
        <div className='brucia__navbar'>
            <div className='brucia__links'>
                <div className='brucia__links-logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='brucia__links-menu'>
                    <Menu />
                </div>
            </div>
            <div className='brucia__navbar-mobile-menu'>
                {toggleMenu 
                    ? <RiCloseLine color='var(--red)' size="27" onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='var(--red)' size="27" onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='brucia__navbar-menu_container scale-up-center'>
                        <div className='brucia__navbar-menu_container-links'>
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
