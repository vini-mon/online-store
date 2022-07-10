import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import styles from './Forms.module.css';
import userIcon from '../img/account/login.png';
import axios from 'axios';

function FormsRegister() {

    const navigate = useNavigate();

    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();

    const [didClickButton, setDidClickButton] = useState(false);

    /*
     * Faz o request para o servidor e registra o usuário se não
     * houver erro.
     * Caso haja, alterar o estado de error, mostrando na tela.
     */
    useEffect(() => {
        async function register(userEmail, userPassword, userName, userAddress, userPhone) {
            try {
                const res = await axios.post('http://localhost:3500/user/', {
                    name: userName,
                    address: userAddress,
                    phone: userPhone,
                    email: userEmail,
                    password: userPassword
                })

                navigate('/')
            } catch(e) {
                setError(e.response.data[0].message);
            }
        }

        if (didClickButton) {
            register(email, password, name, address, phone);
        }

        setDidClickButton(false);
    }, [didClickButton]);

    /*
     * Valida os campos e altera o estado do didClickButton para
     * disparar o useEffect
     */
    const handleSignup = (e) => {
        e.preventDefault();

        if (!name || !address || !phone || !email || !password || !confirmPassword) {
            setError('Preencha todos os campos')
            return
        } else if (password !== confirmPassword) {
            setError('As senhas não conferem')
            return
        }

        setDidClickButton(true)
    }

    return (
        <div>
            <h2 className={styles.title}>Registre-se</h2>
            <div className={styles.loginBox}>
                <img src={userIcon} alt="Icone de Login" className={styles.loginImg}/>
                <div className={styles.loginInput}>
                    <form>
                        <input id="name" type="text" placeholder="Nome"
                        onChange={(e) => [setName(e.target.value), setError('')]}  
                        className={styles.loginField}/> <br/>

                        <input id="address" type="text" placeholder="Endereço"
                        onChange={(e) => [setAddress(e.target.value), setError('')]}  
                        className={styles.loginField}/> <br/>

                        <input id="phone" type="text" placeholder="Telefone"
                        onChange={(e) => [setPhone(e.target.value), setError('')]}  
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
                        <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
            <div className={styles.space}></div>
        </div>
    );
}

export default FormsRegister;