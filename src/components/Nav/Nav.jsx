import React from 'react'
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";


const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            {/*активКлассНейм потому что НАВЛИНК*/}
        </div>
        <div className={s.item}>
            <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
}
export default Nav