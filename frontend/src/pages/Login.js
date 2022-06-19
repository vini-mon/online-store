import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import styles from './Forms.module.css';
import userIcon from '../img/account/login.png';
import useAuth from "../hooks/useAuth";

function FormsLogin(){

    // variaveis de estado para o login

    const {signin} = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    // função para validar o login

    const handleLogin = (e) => {

        e.preventDefault();

        // algum dos campo está vazio

        if (!email | !password) {
            setError('Preencha todos os campos');
            return;
        }

        // tenta logar o usuário

        const res = signin(email, password);

        // se o usuário não existe, retorna erro

        if (res) {

            setError(res);
            return;

        }

        navigate('/account');
        
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