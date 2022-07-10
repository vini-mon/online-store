import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';
import logo from '../../img/PetLogo.png';

function Navbar() {

    /*
     * Verifica se o usuário está logado
     */
    const accountName = () => {
        const user = localStorage.getItem('token');
        const userInfo = JSON.parse(user)

        if (user && userInfo.name) {
            return "Hey, " + userInfo.name;
        }

        return "Login";
    }

    /*
     * Verifica se o usuário é administrador
     */
    const isAdmin = () => {
        const user = localStorage.getItem('token');
        const userInfo = JSON.parse(user)

        if (user && userInfo.admin) {
            return "Dashboard";
        }

        return false;
    }

    return (

        <nav>
            <div>
                <NavLink to="/"  >
                    <img className={styles.logo} src={logo} alt="Logo da PetStore" width="150" />
                </NavLink>
            </div>

            <ul className={styles.nav_list} >
                <li className={styles.item}>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.link_active : styles.link }>Home</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/products" className={({ isActive }) => isActive ? styles.link_active : styles.link }>Products</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/about" className={({ isActive }) => isActive ? styles.link_active : styles.link }>About</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/account" className={({ isActive }) => isActive ? styles.link_active : styles.link }>{accountName}</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/admin" className={({ isActive }) => isActive ? styles.link_active : styles.link }>{isAdmin}</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? styles.link_active : styles.link }><i className="fa-solid fa-cart-shopping"></i></NavLink>
                </li>
            </ul>
        
        </nav>
    )
}

export default Navbar;