import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';
import logo from '../../img/PetLogo.png';
import catLogo from '../../img/CatLogo.png';

function Navbar() {

    return (

        <nav>
            
            <div>
                <NavLink to="/"  >
                    <img className={styles.catLogo} src={catLogo} alt="Logo da PetStore" width="150" />
                    <img className={styles.logo} src={logo} alt="Logo da PetStore" width="150" />
                </NavLink>
            </div>

            <ul className={styles.nav_list} >
                <li className={styles.item}>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.link_active : styles.link } >Home</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/products" className={({ isActive }) => isActive ? styles.link_active : styles.link } >Products</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/about" className={({ isActive }) => isActive ? styles.link_active : styles.link } >About</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/account" className={({ isActive }) => isActive ? styles.link_active : styles.link } >Account</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? styles.link_active : styles.link } ><i className="fa-solid fa-cart-shopping"></i></NavLink>
                </li>
            </ul>
        
        </nav>
    )
}

export default Navbar;