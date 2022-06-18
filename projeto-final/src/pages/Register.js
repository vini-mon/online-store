import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import styles from './Forms.module.css';
import userIcon from '../img/account/login.png';
import useAuth from '../hooks/useAuth';


function FormsRegister(){

    // variaveis de estado para o registro

    const { signup } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState();
    const [end, setEnd] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();

    const handleSignup = (e) => {

        e.preventDefault();

        // algum dos campo está vazio

        if (!name || !end || !email || !password || !confirmPassword ) {
            
            setError('Preencha todos os campos')
            return

        // senhas não conferem

        }else if (password !== confirmPassword) {

            setError('As senhas não conferem')
            return

        }

        // tenta registrar o usuário

        const res = signup(email, password);

        if (res) {
            setError(res)
            return
        }

        navigate('/login')

    }

    return(

        <div>
            
            <h2 className={styles.title}>Registre-se</h2>

            <div className={styles.loginBox}>

                <img src={userIcon} alt="Icone de Login" className={styles.loginImg}/>

                <div className={styles.loginInput}>

                    <form>

                        <input id="Nome" type="text" placeholder="Nome"
                        onChange={(e) => [setName(e.target.value), setError('')]}  
                        className={styles.loginField}/> <br/>
                        
                        <input id="End" type="text" placeholder="Endereço"
                        onChange={(e) => [setEnd(e.target.value), setError('')]}  
                        className={styles.loginField}/> <br/>

                        <input id="email" type="email" placeholder="Email"
                        onChange={(e) => [setEmail(e.target.value), setError('')]}  
                        className={styles.loginField}/> <br/>

                        <input id="password" type="password" placeholder="Senha"
                        onChange={(e) => [setPassword(e.target.value), setError('')]} 
                        className={styles.loginField}/> <br/>

                        <input id="confirmPassword" type="password" placeholder="Confirmar senha"
                        onChange={(e) => [setConfirmPassword(e.target.value), setError('')]}
                        className={styles.loginField}/> <br/>

                        <p>{error}</p> <br/>

                        <button className={styles.btn} onClick={handleSignup}>Registrar</button><br/>

                    </form>

                    <p><b>Já possui conta? Então faça o</b>&nbsp;

                        <Link to="/login">
                            Login
                        </Link>

                    </p>

                </div>

            </div>

            <div className={styles.space}></div>

        </div>

    );

}

export default FormsRegister;