import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';
import logo from '../../img/PetLogo.png';

import { useState, useEffect } from 'react';

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

    // const [hiddenDash, setHiddenDash] = useState('none');

    /*
     * Verifica se o usuário é administrador
     * e exibe o menu de administração
     */
    const [admin, setAdmin] = useState(false);
    useEffect( ()=> {
        const isAdmin = () => {
            const user = localStorage.getItem('token');
            const userInfo = JSON.parse(user)
            if (userInfo === null){
                setAdmin(false);
                return;
            } 
            setAdmin(true);    
        }

        isAdmin();
    });
    
    return (
        /*
        * Navbar do site
        * Lógica de verificação do nome do usuário e do menu de administração
        */
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
                {admin &&
                    <li className={styles.item}>
                        <NavLink to="/admin" className={({ isActive }) => isActive ? styles.link_active : styles.link }>Dashboard</NavLink>
                    </li>
                }
                <li className={styles.item}>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? styles.link_active : styles.link }><i className="fa-solid fa-cart-shopping"></i></NavLink>
                </li>
            </ul>
        
        </nav>
    )
}

export default Navbar;