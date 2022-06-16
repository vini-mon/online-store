import { Link } from 'react-router-dom'

import Container from './Container'
import styles from './Navbar.module.css';
import logo from '../../img/PetLogo.png'

function Navbar(){

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

        // <div className={styles.navbar}>
        //     <div className={styles.logo}>
        //         <Link to="/">
        //             <img src="images/PetLogo.png" alt="Logo da PetStore" width="150" />
        //         </Link>
        //     </div>

        //     <ul className={styles.list}>
        //         <li className={styles.item}>
        //             <Link to="/">Home</Link>
        //         </li>
        //         <li className={styles.item}>
        //             <Link to="/products">Products</Link>
        //         </li>
        //         <li className={styles.item}>
        //             <Link to="/services">Services</Link>
        //         </li>
        //         <li className={styles.item}>
        //             <Link to="/about">About</Link>
        //         </li>
        //         <li className={styles.item}>
        //             <Link to="/login">Login</Link>
        //         </li>
        //         <li className={styles.item}>
        //             <Link to="/cart">Cart</Link>
        //         </li>
        //     </ul>

        // </div>

        <nav>
            <div className={styles.logo}>
                <Link to="/"  >
                    <img src={logo} alt="Logo da PetStore" width="150" />
                </Link>
            </div>

            <ul className={styles.nav_list} >

                <li className={styles.item}>
                    <Link to="/" className={styles.link}>Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/products" className={styles.link}>Products</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/services" className={styles.link}>Services</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/about" className={styles.link}>About</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/login" className={styles.link}>Login</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/cart" className={styles.link}>Cart</Link>
                </li>
            </ul>

{/* 
            <Container>
                <Link to="/">
                    <img src={logo} alt="Logo da PetStore" width="150" />
                </Link>
            </Container> */}
        </nav>
    )
}

export default Navbar;