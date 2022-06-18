import { NavLink } from 'react-router-dom'

import styles from './Navbar.module.css';
import logo from '../../img/PetLogo.png'

import Cart from '../../img/cart/cart.png';

function Navbar() {

    return (
        
        // <div className="navbar">

        //     <div className="logo">
        //         <a href="index.html"><img src="images/PetLogo.png" alt="Logo da PetStore" width="150" /></a>
        //     </div>

        //     <nav>
        //         <ul>
        //             <li><a href="userAccount.html" className="line">User Account</a></li>
        //             <li><a href="adminAccount.html" className="line">Admin Account</a></li>
        //             <li><a href="register.html" className="line">Register</a></li>
        //             <li><a href="cart.html" className="line"><i className="fa-solid fa-cart-shopping"></i></a></li>
        //         </ul>
        //     </nav>

        // </div>

        <nav>
            <div className={styles.logo}>
                <NavLink to="/"  >
                    <img src={logo} alt="Logo da PetStore" width="150" />
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
                    <NavLink to="/cart" className={({ isActive }) => isActive ? styles.link_active : styles.link } ><img className={styles.iconCart} src={Cart} alt="Icon do carrinho de compras" /></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;