import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import styles from './Forms.module.css';
import userIcon from '../img/account/login.png';
import { useEffect } from 'react';
import axios from 'axios';

function FormsLogin() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const [didClickButton, setDidClickButton] = useState(false)

    useEffect(() => {
        async function check(userEmail, userPass) {
            try {
                const res = await axios.post('http://localhost:3500/user/auth', {
                    email: userEmail,
                    password: userPass
                });
                localStorage.setItem('token', JSON.stringify(res.data))
                navigate('/')
            } catch(e) {
                setError(e.response.data.message)
            }
        }
        if (didClickButton) {
            check(email, password);
        }
        setDidClickButton(false)
    }, [didClickButton])
        
    const handleLogin = (e) => {
        e.preventDefault();
        if (!email | !password) {
            setError('Preencha todos os campos');
            return;
        }

        setDidClickButton(true)
    }

    return(
        <div>
            <h2 className={styles.title}>Faça login</h2>
            <div className={styles.loginBox}>
                <img src={userIcon} alt="Icone de Login" className={styles.loginImg}/>
                <div className={styles.loginInput}>
                    <form>
                        <input id="email" type="email" placeholder="Email"
                        onChange={(e) => [setEmail(e.target.value), setError('')]}
                        className={styles.loginField} required /> <br/>

                        <input id="password" type="password" placeholder="Senha"
                        onChange={(e) => [setPassword(e.target.value), setError('')]}
                        className={styles.loginField} required  /> <br/>

                        <p>{error}</p>

                        <button className={styles.btn} onClick={handleLogin}>Login</button><br/>
                    </form>

                    <p><b>Não possui conta?</b>&nbsp;
                        <Link to="/register">Registre-se</Link>
                    </p>

                </div>
            </div>
            <div className={styles.space}></div>
        </div>
    );

}

export default FormsLogin;