import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
const Header = () => {
  return (
    <header className={s.header}>
      <div className={`container ${s.headerContainer}`}>
        <NavLink to="/">
          <img src="" alt="Logo" />
        </NavLink>
        <div className={s.menu}>
          <ul>
            <li className={s.item}>
              <NavLink to="/">Поиск вакансий</NavLink>
            </li>
            <li className={s.item}>
              <NavLink to="/selected">Избранное</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
