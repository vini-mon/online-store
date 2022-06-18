import { useNavigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import styles from './UserAccount.module.css';

function UserAccount() {

    const { signout } = useAuth();
    const navigate = useNavigate();

    return (

        <div className={styles.userAccount}>

            <h1>User Account</h1>
            <br/>

            <button className={styles.btn} onClick={() => [signout(), navigate('/')]}>Sair</button><br/>

        </div>

    );
}

export default UserAccount