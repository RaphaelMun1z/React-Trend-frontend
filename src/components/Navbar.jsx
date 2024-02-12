import styles from './Navbar.module.scss'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <div className={styles.buttonContainer}>
                <div className={styles.logo}>
                    <NavLink to="/">
                        Orkut
                    </NavLink>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/" className={styles.active}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                Perfil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                Scraps
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                Comunidades
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                Aplicativos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                Temas
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.searchBarContainer}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder='Buscar'/>
                    <button type='submit'>buscar</button>
                </div>
            </div>
        </header>
    )
}

export default Navbar