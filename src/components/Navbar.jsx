import styles from './Navbar.module.scss'

import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'

import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { FaBars, FaHome } from "react-icons/fa";
import { MdClose, MdOutlinePalette } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegMessage } from "react-icons/fa6";
import { TbBuildingCommunity } from "react-icons/tb";
import { IoApps } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    const { user } = useAuthValue()
    const { logout } = useAuthentication()

    const [navbarIsOpen, setNavbarIsOpen] = useState(false)

    const [query, setQuery] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (query) {
            return navigate(`/search?q=${query}`)
        }
    }

    return (
        <header>
            <div className={styles.buttonContainer}>
                <div className={styles.logo}>
                    <NavLink to="/">
                        Trend
                    </NavLink>
                </div>
                <nav>
                    {user && (
                        <>
                            <button onClick={() => { setNavbarIsOpen(!navbarIsOpen) }}>
                                {!navbarIsOpen && (
                                    <FaBars />
                                )}
                                {navbarIsOpen && (
                                    <MdClose />
                                )}
                            </button>
                            <ul className={navbarIsOpen ? styles.open : ""}>

                                <li>
                                    <button onClick={logout} className={styles.logout}>
                                        <IoMdLogOut /><span>Sair</span>
                                    </button>
                                </li>
                                <li>
                                    <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
                                        <FaHome /><span>Home</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/profile" className={({ isActive }) => (isActive ? styles.active : "")}>
                                        <CgProfile /><span>Perfil</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/scraps" className={({ isActive }) => (isActive ? styles.active : "")}>
                                        <FaRegMessage /><span>Scraps</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/comunities" className={({ isActive }) => (isActive ? styles.active : "")}>
                                        <TbBuildingCommunity /><span>Comunidades</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/apps" className={({ isActive }) => (isActive ? styles.active : "")}>
                                        <IoApps /><span>Aplicativos</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/themes" className={({ isActive }) => (isActive ? styles.active : "")}>
                                        <MdOutlinePalette /><span>Temas</span>
                                    </NavLink>
                                </li>

                            </ul>
                        </>
                    )}
                </nav>
            </div>
            <div className={styles.searchBarContainer}>
                {user && (
                    <form className={styles.searchBar} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Buscar publicação por descrição (exata)' onChange={(e) => setQuery(e.target.value)}/>
                        <button type='submit'><CiSearch /></button>
                    </form>
                )}
            </div>
        </header>
    )
}

export default Navbar