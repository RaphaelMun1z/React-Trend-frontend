import styles from './Navbar.module.scss'

import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const { user } = useAuthValue()

    const [navbarIsOpen, setNavbarIsOpen] = useState(false)

    return (
        <header>
            <div className={styles.buttonContainer}>
                <div className={styles.logo}>
                    <NavLink to="/">
                        Talk
                    </NavLink>
                </div>
                <nav>
                    <button onClick={() => { setNavbarIsOpen(!navbarIsOpen) }}>
                        {!navbarIsOpen && (
                            <FaBars/>
                        )}
                        {navbarIsOpen && (
                            <MdClose/>
                        )}
                    </button>
                    {user && (
                        <ul className={navbarIsOpen ? styles.open : ""}>

                            <li>
                                <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile" className={({ isActive }) => (isActive ? styles.active : "")}>
                                    Perfil
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/scraps" className={({ isActive }) => (isActive ? styles.active : "")}>
                                    Scraps
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/comunities" className={({ isActive }) => (isActive ? styles.active : "")}>
                                    Comunidades
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/apps" className={({ isActive }) => (isActive ? styles.active : "")}>
                                    Aplicativos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/themes" className={({ isActive }) => (isActive ? styles.active : "")}>
                                    Temas
                                </NavLink>
                            </li>

                        </ul>
                    )}
                </nav>
            </div>
            <div className={styles.searchBarContainer}>
                {user && (
                    <div className={styles.searchBar}>
                        <input type="text" placeholder='Buscar' />
                        <button type='submit'>buscar</button>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Navbar