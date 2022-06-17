import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebookSquare/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaWhatsapp/>
                </li>
            </ul>
            <p className={styles.copy_right}>
                &copy;<span>Copyright. All rights reserved.</span>
            </p>
        </footer>
    )
}

export default Footer