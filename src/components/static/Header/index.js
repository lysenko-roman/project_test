import React from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';



function Header() {
    console.log('render header');
    return (
        <header className='header'>
            <ul className='header__menu'>
                <li> <NavLink className='header__link' to='/clients'exact>Список клиентов</NavLink></li>
                <li> <NavLink className='header__link' to='/registration'exact>Форма регистрации</NavLink></li>
                <li> <NavLink className='header__link' to='/author'exact >Информация об авторе</NavLink></li>
            </ul>
        </header>

    );
}

export default Header;