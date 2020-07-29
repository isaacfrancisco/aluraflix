import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink';
function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="AluraFlix logo"></img>
            </a>

            <Button href="/"> Novo Video</Button>
        </nav>
    );
}

export default Menu;