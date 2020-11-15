import React from 'react'
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://proprikol.ru/wp-content/uploads/2019/07/smeshnye-kartinki-spyashhih-5.jpg'/>
        <div className={s.loginBlock}>
            {props.isAuth?props.login:
            <NavLink to={'/login'}>LOGIN</NavLink>}
        </div>

    </header>
}
export default Header