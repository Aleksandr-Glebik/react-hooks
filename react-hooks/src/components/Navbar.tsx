import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
    <nav className={'navbar navbar-dark bg-primary navbar-expand-lg px-5 d-flex'}>
        <div className={'navbar-brand'}>
            Github Поиск
        </div>
        <ul className={'navbar-nav d-flex flex-row flex-grow-1'}>
            <li className={'nav-item p-2'}>
                <NavLink
                  to="/"
                  exact="true"
                  className={'nav-link'}
                >
                  Главная
                </NavLink>
            </li>
            <li className={'nav-item p-2'}>
                <NavLink
                  to="/about"
                  className={'nav-link'}
                >
                  Информация
                </NavLink>
            </li>
            <li className={'nav-item p-2'}>
                <NavLink
                  to="/profile/aleksandr-glebik"
                  className={'nav-link'}
                >
                  Профиль
                </NavLink>
            </li>
        </ul>
    </nav>
)

