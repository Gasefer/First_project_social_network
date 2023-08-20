import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cLqUN-dw6vfML-EnxRt6Y90sjdWd20sSLg&usqp=CAU' alt=''>
        </img>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
            <NavLink to={"/login"}>Login</NavLink>}
        </div>
    </header>
}

export default Header